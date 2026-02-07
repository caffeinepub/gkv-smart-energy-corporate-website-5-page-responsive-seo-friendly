# Specification

## Summary
**Goal:** Update the site’s contact details to the correct company information, add a Board of Directors section with photos on the About page, and ensure the logo renders consistently with a graceful fallback.

**Planned changes:**
- Replace any placeholder contact info across the site (footer and Contact page) with the provided mobile number, email, and both head/branch office addresses (English text).
- Update Contact page “visit/map” placeholder text to reference the provided office location(s) rather than the old placeholder address.
- Add an About page “Board of Directors” section listing Vishnu Kumar Chaudhary, Kartik Kumar Chaudhary, and Ganesh Kumar Chaudhary with square, consistently sized headshot images in a responsive layout.
- Add three director photo image assets as static files under `frontend/public/assets/generated` and reference them from the new section.
- Ensure header and footer use the existing logo asset path consistently, including meaningful alt text and a safe text fallback if the logo fails to load.

**User-visible outcome:** Visitors see the correct addresses, phone, and email everywhere on the site, can view a Board of Directors section with photos on the About page, and the company logo displays reliably in the header/footer with fallback branding if the image can’t be loaded.
