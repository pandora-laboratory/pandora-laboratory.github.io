# TODO: Replace placeholder assets with real images/videos

This project is scaffolded and functional. Follow these steps to wire in real assets for the homepage demos.

## 1) Before/After sliders (grid)

- Put your images under `public/images/`.
  - Example:
    - `public/images/shadow_1_before.jpg`
    - `public/images/shadow_1_after.jpg`
    - `public/images/reflection_1_before.jpg`
    - `public/images/reflection_1_after.jpg`
- Open `src/app/page.tsx` and find the "grid of sliders" section.
- Replace the placeholder pairs:
  - `beforeSrc` and `afterSrc` props for each `<BeforeAfterSlider />` with your paths, e.g. `/images/shadow_1_before.jpg`.
  - Update the `label` prop (e.g., "Shadow", "Reflection").

Tip: You can duplicate `<BeforeAfterSlider />` elements to add more examples. All images are served from `public/`, so reference them by leading slash.

## 2) Interaction demo (thumbnails + videos)

- Put your thumbnails and videos under:
  - Thumbnails: `public/thumbs/` (e.g., `public/thumbs/scribbles.jpg`, `public/thumbs/clicks.jpg`)
  - Videos: `public/videos/` (e.g., `public/videos/scribbles.mp4`, `public/videos/clicks.mp4`)
- Open `src/app/page.tsx` and locate the `<InteractiveDemo />` props.
- Replace placeholder paths:
  - `thumbSrc`: `/thumbs/scribbles.jpg`
  - `videoSrc`: `/videos/scribbles.mp4`
  - Do the same for the second item.
- The player auto-plays the selected video and pauses/resets others.

## 3) Optional: Author/action links

- In `src/app/page.tsx`, update the hero section links (arXiv, Code, Demo) with your real URLs.

## 4) Verify locally

```bash
npm run dev
# visit http://localhost:3000
```

## 5) Production build

```bash
npm run build && npm run start
```

## Notes

- All asset paths are relative to `public/`. Do not import images/videos via `import`—use URL paths (e.g., `/images/…`).
- Ideal thumbnail size: ~320×180 (16:9). Use compressed JPG/WEBP for faster loading.
- Use H.264/AAC encoded `.mp4` for widest browser compatibility.


