# yiming-shi.com

Source for Yiming Shi’s site. The theme is [al-folio](https://github.com/alshedivat/al-folio). The blog is a separate site at <https://skddj.github.io/blog/>.

## After this is merged

GitHub Pages will not show the new site until the publishing source is the built branch.

1. Settings → Actions → General → Workflow permissions → **Read and write**.
2. Wait until the **Deploy site** action on `master` finishes. It publishes the `gh-pages` branch.
3. Settings → Pages → Build and deployment → **Deploy from a branch** → branch **`gh-pages`** / `/ (root)`.
4. Custom domain: `yiming-shi.com`. Leave **Enforce HTTPS** on. `CNAME` in this repo is `yiming-shi.com`.

`https://skddj.github.io` will keep serving whatever branch Pages is pointed at until step 3.
