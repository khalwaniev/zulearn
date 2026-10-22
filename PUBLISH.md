# Publishing Zulearn to GitHub and enabling GitHub Pages

## WARNING
Do not upload the separate private goals ZIP to this public repository. The extracted `zulearn-public/` directory must contain **only public STEM materials**. Inspect `git status` and `git diff --cached` before push. A `.gitignore` is not a privacy control for files already committed.

## Method A — GitHub CLI (run locally on a machine with `gh auth login` configured)
```bash
cd /path/to/zulearn-public
git init -b main
git add .
git diff --cached --stat
git commit -m "Initialize Zulearn Scientific AI Tripos and GitHub Pages"
gh repo create khalwaniev/zulearn --public --source=. --remote=origin --push
```
If repo already exists, **do not run create again**; review and push selectively.

## Enable GitHub Pages
On GitHub: repository `Settings` → `Pages` → `Build and deployment` → `Deploy from a branch` → `main` → `/docs` → `Save`.
Expected URL **after** successful deployment: `https://khalwaniev.github.io/zulearn/`. The URL is NOT active until GitHub reports success. The site is static HTML and uses no third-party assets.

Reference: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
