# SanctumAI Docs — Deployment Notes

## Deployment Summary

- **Vercel Project:** `sanctumai-dev/site` (project ID: `prj_BhqE8pBgMCB8sYsbFKIlX1ZbbH3p`)
- **GitHub Repo:** [SanctumSec/sanctum-docs](https://github.com/SanctumSec/sanctum-docs)
- **Production URL:** https://site-nmusissbf-sanctumai-dev.vercel.app
- **Custom Domain:** `docs.sanctumai.dev` (added to Vercel, pending DNS)

## DNS Configuration Required

Add one of the following DNS records for `docs.sanctumai.dev`:

### Option A: A Record (Recommended by Vercel)
```
Type: A
Name: docs
Value: 76.76.21.21
```

### Option B: CNAME Record
```
Type: CNAME
Name: docs
Value: cname.vercel-dns.com
```

> **Note:** The domain is on Google Domains (ns-cloud-d*.googledomains.com). Jason or Katie should add this record in the Google Domains DNS console.

## Build Fixes Applied

1. **`_meta.json` → `_meta.ts`** — Nextra 3 removed support for `.json` meta files
2. **`banner.text` → `banner.content`** — API change in nextra-theme-docs v3
3. **`footer.text` → `footer.content`** — Same API change
4. **Removed `useNextSeoProps`** — Deprecated in Nextra 3
5. **Added `pages/_app.tsx`** — Required by Nextra 3
6. **Renamed `pages/api/` → `pages/api-reference/`** — `pages/api/` is reserved by Next.js for API routes
7. **Removed `{#anchor}` syntax from headings** — Not valid MDX (parsed as JSX expressions)
8. **Removed `nextra/components` imports** — Not exported in Nextra 3; replaced `<Callout>` with blockquotes, `<Tabs>` with heading sections

## Git Integration

The GitHub repo connection failed during initial deploy (likely needs Vercel GitHub App installed on SanctumSec org). To enable auto-deploy on push:

1. Go to https://vercel.com/sanctumai-dev/site/settings/git
2. Connect to `SanctumSec/sanctum-docs`
3. Or install the Vercel GitHub App on the SanctumSec org

## Date

Deployed: February 14, 2026
