# Changbaishan · Snow Days 2027

A complete, ready-to-upload static website for GitHub Pages. Includes the revised 5–11 January itinerary, 14 photographed activities, traveller advice, keyboard navigation, cookie settings and three policy pages.

No npm, build step, API key, server account or paid package is needed to run the files locally.

## See it on a Mac first

1. Double-click the downloaded ZIP to extract it.
2. Open the extracted `Changbaishan-GitHub-Pages` folder.
3. Double-click `index.html` to open it in a browser.

To edit in VS Code, choose **File → Open Folder** and select this folder. Optional: use a local preview extension or, if Python 3 is installed, run `python3 -m http.server 8000` from this folder and visit `http://localhost:8000`. Press Ctrl+C to stop. A local HTTP preview gives browser storage a consistent origin; direct file previews may handle stored preferences differently.

## Publish on GitHub Pages

1. Sign in at https://github.com and create a new repository, for example `changbaishan-trip`. A public repository is the straightforward option with GitHub Free. This makes the source and published itinerary public.
2. In the new repository, choose **uploading an existing file** (or **Add file → Upload files**).
3. Upload the **contents inside this folder**, including the entire `assets` folder. Upload the extracted files, not the ZIP and not the outer `Changbaishan-GitHub-Pages` folder. `index.html` must appear at the repository's top level.
4. Choose **Commit changes**. Use `main` as the branch.
5. Open the repository's **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/(root)**. Click **Save**.
7. Wait for the Pages deployment to finish. Return to **Settings → Pages** and click the site URL GitHub displays.

The included `.nojekyll` file tells GitHub to serve plain static files. If it is hidden on the Mac and was not uploaded, use **Add file → Create new file**, name it `.nojekyll`, leave it empty and commit. In Finder, Command+Shift+Period toggles hidden files.

All site assets use relative paths, so the website works under a GitHub repository URL. No custom domain is needed. GitHub settings and plan availability can change; see the official instructions below.

## Change the website later

- `trip-data.js`: dates, daily itinerary, activities, photo captions and credits.
- `index.html`: main page, accommodation budget and traveller information.
- `style.css`: colours, fonts, spacing and responsive layout.
- `app.js`: interactive itinerary and destination tabs.
- `site-controls.js`: cookie settings and keyboard-help dialogs.
- `privacy.html`, `terms.html`, `cookies.html`: policies adapted for this GitHub Pages edition.
- `assets/`: bundled photos and an activity-photo provenance record.

Commit updated files to the configured branch to publish changes. Keep the hotel budget and itinerary text in sync when changing trip dates. The archive does not include the original host's access restrictions; standard GitHub Pages publication is public. No account credentials or hosting secrets are included.

## Photos and sources

Every activity includes source and photo-credit links. Photos remain subject to their owners' rights; most source pages do not state an open reuse licence. Tianchi's credited photograph is public domain. The archive does not grant additional photo reuse rights. Main-page source notes also credit the resort panorama and destination photographs.

## Official GitHub documentation

- Publishing from a branch: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Creating a Pages site: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- Hosting and visitor data: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- GitHub privacy: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement

Packaged 5 October 2026 from the latest Snow Days website. Travel information remains a planning snapshot; January 2027 operations and bookings must be confirmed.
