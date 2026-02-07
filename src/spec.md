# Specification

## Summary
**Goal:** Build a 5-page, responsive, SEO-friendly corporate website for “GKV Smart Energy” with consistent navigation, solar-themed design, and a working contact form that stores submissions in a Motoko canister.

**Planned changes:**
- Implement a shared site shell (header nav with active state + mobile hamburger/drawer, and a footer with contact detail placeholders) across Home, About Us, Services, Projects/Portfolio, and Contact Us pages.
- Build the Home page sections with the provided hero headline/subheading, two CTA buttons, intro paragraph, 4 service highlight cards, “Why Choose” section, testimonials, and footer contact details.
- Build the About Us page with labeled sections: Overview, Vision, Mission, and Experience/Expertise/Reliability in simple professional English.
- Build the Services page listing the 5 required service offerings in a scannable, responsive layout with short descriptions.
- Build the Projects/Portfolio page with a responsive gallery grid of projects, each showing an image, capacity (kW), and 1–2 client benefit bullets.
- Build the Contact Us page with address/phone/email, a contact form (Name, Mobile, Email, Message) with basic validation, and a visible Google Map placeholder block.
- Implement backend persistence for contact submissions in a single Motoko actor and wire the frontend form submission to it with success/failure messaging (no page reload).
- Apply the requested visual design system (white background, green/blue accents, modern typography, consistent spacing) across all pages with full mobile/tablet responsiveness.
- Add SEO-friendly structure: semantic headings (one H1 per page, logical H2/H3) and page-level metadata (title/description) for all five pages, with natural inclusion of target keywords.
- Add generated solar-themed static images as frontend assets for the Home hero and Projects gallery (served from the frontend, not backend).

**User-visible outcome:** Visitors can browse a clean, mobile-friendly 5-page GKV Smart Energy website, view services and project examples with images, and submit the contact form to store their message and see an immediate success/error status.
