# Specification

## Summary
**Goal:** Update the site branding to use the uploaded GKV Smart Energy logo everywhere, and show a solar installation image on the Solar Calculator page that matches the calculated system size (kW).

**Planned changes:**
- Replace the existing static logo asset used by the header and footer so the new uploaded logo artwork appears consistently across desktop and mobile (while keeping the current fallback text if the image fails to load).
- Add kW-range-based solar installation images under `frontend/public/assets/generated` and display the appropriate image on the Solar Calculator results based on `results.systemSizeKW`, with a safe fallback if an image is missing.

**User-visible outcome:** The website header/footer show the new GKV Smart Energy logo, and the Solar Calculator shows a representative solar installation photo that corresponds to the calculated kW size.
