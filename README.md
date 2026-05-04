# Dom Expert

[domexpert.online](https://domexpert.online/) — Next.js site for a Wrocław real-estate agency. Polish, dark-on-cream emerald aesthetic, animation-heavy.

## Stack

- **Next.js 16** static export (`output: "export"`, `trailingSlash: true`)
- **Tailwind CSS v4** (`@theme` tokens — primary emerald, secondary bronze, ink, cream)
- **motion/react** — TiltCard 3D glare, MagneticButton, animated blobs, AnimatePresence layout transitions
- **Inter** + **Fraunces** via `next/font/google`

## Pages (~510 static)

- `/` — hero with parallax, featured properties, services preview, CTA
- `/properties/` — full grid + 4-axis filter (osiedle × type × listing × beds), ≥30 listings always returned
- `/properties/[slug]/` — 505 detail pages with Schema.org `RealEstateListing` JSON-LD
- `/about/` · `/contact/` · `/services/` · `/sitemap.xml` · `/robots.txt` · `/404`

Every combination of *33 osiedla × 2 listings × 7 types* (462 combos) has at least one property — no filter combination ever returns 0 results.

## Local dev

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build + manual deploy

```bash
rm -rf .next out
npx next build                                   # NOT --turbopack: Turbopack doesn't yet emit out/ for output:export
rsync -az --delete out/ dekada-vps:/tmp/domexpert-staged/
ssh dekada-vps "sudo -n rsync -a --delete /tmp/domexpert-staged/ /srv/sites/domexpert.online/html/ \
  && sudo -n docker exec domexpert-online nginx -s reload"
```

## CI/CD (auto-deploy)

Push to `main` → `.github/workflows/deploy.yml` → tsc → next build → rsync to VPS → nginx reload → smoke test 5 routes + dynamic slug + lang=pl + ≥30 listings → Discord alert on failure.

`.github/workflows/deps-bump.yml` opens a monthly minor+patch dep PR on the 1st (cron `47 7 1 * *` UTC = 09:47 Warsaw).

## Regenerating listings

```bash
python3 scripts/gen-properties.py > data/properties.ts   # seed=42, deterministic
```

The generator enforces every district × listing × type combination has ≥1 entry — exits with `SystemExit(1)` if any combo is missing.

## Critical config gotchas

- `next.config.ts` MUST have `output: "export"` — without it `out/` is never created.
- `trailingSlash: true` is required — nginx redirects `/foo` → `/foo/` (301), so we need `out/foo/index.html`.
- Don't pass `--turbopack` to `next build` — Next.js 16 Turbopack doesn't yet support `output: "export"` for emitting `out/`.

---

Built by [Dekada72H](https://dekada72h.com/) — VPS infrastructure: [dekada-vps-infra](https://github.com/dekada72h/dekada-vps-infra).
