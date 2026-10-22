# Clink's Cabin website

This package is ready for GitHub Pages, Netlify or another static host.

## Add the property photographs
Put the following files in the `images` folder. Use these exact lowercase names:

- `hero-exterior.jpg` — best wide exterior/deck/gazebo photograph
- `living-room.jpg`
- `kitchen.jpg`
- `dining-room.jpg`
- `fire-pit.jpg`
- `deck-gazebo.jpg`
- `bedroom-1.jpg`
- `bedroom-2.jpg`
- `bedroom-3.jpg`

A copy of the currently available bathroom image is included as `bathroom-2.png`, but it is not shown in the initial gallery. Add it later if desired.

Before uploading, crop the hero image to a wide landscape shape and resize large photographs to about 2000 pixels on the longest edge. JPG quality around 80–85% usually balances appearance and file size.

## Publish on GitHub Pages
1. Create a repository called `clinkscabin-site`.
2. Upload `index.html`, `styles.css`, `script.js` and the `images` folder to the repository root.
3. In the repository, open Settings > Pages.
4. Under Build and deployment, select Deploy from a branch, choose `main` and `/ (root)`, then save.
5. In Pages, enter `clinkscabin.com` as the custom domain after the GitHub Pages site is live.
6. Add the DNS records GitHub shows to Porkbun. Do not delete or change records until the GitHub Pages custom-domain screen provides the exact values.

## Contact behaviour
The enquiry form uses `mailto:` and sends to `clinks.cabin@gmail.com`. It does not store guest information. The guest's email app must be configured for the button to work. A hosted form service or booking engine can replace this later.

## Items to verify before launch
- Confirm Wi-Fi is available before leaving it in the amenities list.
- Confirm garage parking is available to every guest.
- Confirm the phrase “walk-in shower” is not used unless accurate; the site currently says only “two full bathrooms”.
- Add your final cancellation, payment and rental-agreement process before accepting money directly.
- Keep the exact street address off the public site; share directions with confirmed guests.
