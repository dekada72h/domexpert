#!/usr/bin/env bash
# Send a fancy Discord embed notification for a CI workflow event.
#
# Required env (provided by GitHub Actions context — see workflow):
#   WEBHOOK_URL    Discord webhook
#   GH_REPO        repo full name (org/name)
#   GH_RUN_ID      action run id
#   GH_BRANCH      branch name
#   GH_SHA         full commit SHA
#   GH_ACTOR       who triggered the run
#
# Customizable env (each workflow sets its own):
#   ICON           emoji prefix for title          (default: 💥)
#   TITLE          short title text                (default: "Workflow failed")
#   SUBTITLE       1-line summary under banner     (default: "")
#   COLOR          Discord embed color (decimal)   (default: 15548997 — red)
#                  presets: red=15548997 orange=16753920 yellow=15844367
#                           green=4437377 blue=3447003 purple=10181046
#   STATUS         FAILED | SUCCESS | WARN          (default: FAILED)
#
# Discord renders an embed with ANSI-colored hacker banner + structured fields.
# Falls through silently (exit 0) if WEBHOOK_URL is not set.

set -euo pipefail

if [ -z "${WEBHOOK_URL:-}" ]; then
  echo "WEBHOOK_URL not set — skipping Discord notification"
  exit 0
fi

GH_REPO="${GH_REPO:-?/?}"
GH_RUN_ID="${GH_RUN_ID:-0}"
GH_BRANCH="${GH_BRANCH:-?}"
GH_SHA="${GH_SHA:-0000000}"
GH_ACTOR="${GH_ACTOR:-?}"

ICON="${ICON:-💥}"
TITLE="${TITLE:-Workflow failed}"
SUBTITLE="${SUBTITLE:-}"
COLOR="${COLOR:-15548997}"
STATUS="${STATUS:-FAILED}"

SHORT_SHA="${GH_SHA:0:7}"
RUN_URL="https://github.com/$GH_REPO/actions/runs/$GH_RUN_ID"
COMMIT_URL="https://github.com/$GH_REPO/commit/$GH_SHA"
ACTOR_URL="https://github.com/$GH_ACTOR"

# Pick banner color matching status. ANSI 31=red, 33=yellow, 32=green
case "$STATUS" in
  FAILED)  ANSI_COLOR=31; STATUS_GLYPH="✗" ;;
  WARN)    ANSI_COLOR=33; STATUS_GLYPH="!" ;;
  SUCCESS) ANSI_COLOR=32; STATUS_GLYPH="✓" ;;
  *)       ANSI_COLOR=37; STATUS_GLYPH="·" ;;
esac

# Build ANSI-colored hacker banner. Use raw escape \x1b inside printf -v then
# emit as part of JSON (Python will safely re-encode).
ESC=$(printf '\x1b')
RESET="${ESC}[0m"
BOLD="${ESC}[1m"
COL="${ESC}[1;${ANSI_COLOR}m"
DIM="${ESC}[2;37m"

BANNER="\`\`\`ansi
${COL}╔══════════════════════════════════════════════════╗${RESET}
${COL}║${RESET}     ${BOLD}D E K A D A · C I${RESET}              ${COL}[ ${STATUS_GLYPH} ${STATUS} ]${RESET}   ${COL}║${RESET}
${COL}╚══════════════════════════════════════════════════╝${RESET}
${DIM}> github.com/$GH_REPO${RESET}
\`\`\`"

# Construct JSON payload via Python (handles escaping & UTF-8 cleanly)
PAYLOAD=$(WEBHOOK_URL="" python3 <<PYEOF
import json, os
banner = """${BANNER}"""
title_text = "${ICON} ${TITLE}"
subtitle = """${SUBTITLE}"""
description = banner
if subtitle.strip():
    description += "\n" + subtitle
payload = {
  "username": "Dekada CI",
  "embeds": [{
    "color": ${COLOR},
    "title": title_text,
    "description": description,
    "fields": [
      {"name": "📦 Repo",     "value": "[${GH_REPO}](https://github.com/${GH_REPO})",                  "inline": True},
      {"name": "🌿 Branch",   "value": "\`${GH_BRANCH}\`",                                              "inline": True},
      {"name": "📝 Commit",   "value": "[\`${SHORT_SHA}\`](${COMMIT_URL})",                            "inline": True},
      {"name": "👤 Actor",    "value": "[${GH_ACTOR}](${ACTOR_URL})",                                  "inline": True},
      {"name": "🔗 Run logs", "value": "[Open run #${GH_RUN_ID}](${RUN_URL})",                         "inline": True},
      {"name": "⏱️ When",      "value": "<t:$(date +%s):R>",                                            "inline": True},
    ],
    "footer": {"text": "Dekada CI · production guard"},
  }]
}
print(json.dumps(payload))
PYEOF
)

curl -fsSL -X POST -H "Content-Type: application/json" \
  -d "$PAYLOAD" "$WEBHOOK_URL" \
  >/dev/null && echo "✓ Discord notification sent" \
  || { echo "⚠ webhook POST failed"; exit 1; }
