# Gate Section — Photo Slider

## Structure
- **Left column**: Auto-rotating slider (3 images, fades every 4s, clickable dots at bottom)
- **Right column**: Original text (headline + 2 paragraphs + "Cross the threshold" arrow link)

## Slider behavior
- Slides change every 4000ms
- Fade transition (opacity, 1.2s ease)
- Click a dot to jump to that slide
- Click a slide to select it
- Active slide shows its label (EN + JP) at bottom

## Photos required
Place 3 photos in `public/assets/gate/`:
- `photo-1.jpg` — First Meeting (出会い)
- `photo-2.jpg` — First Walk (初散歩)
- `photo-3.jpg` — The Promise (約束)

## File changes
- `src/components/Gate.jsx` — slider logic (useState + useEffect), restored text content, removed stats
- `src/kage/kage.css` — added `.gate-slider`, `.gate-slide`, `.gate-slide-lab`, `.gate-dots`, `.gate-dot` styles
