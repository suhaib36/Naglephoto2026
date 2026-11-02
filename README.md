# Nagle Photography — Client Mobile Application

A premium, modern, fully interactive mobile client application for **Nagle Photography** ([nagleweb.com](https://nagleweb.com/)), an established commercial photography studio based in Chicago, Illinois operated by photographer Joe Nagle.

Specializing in commercial photography, product photography, advertising, catalog, lifestyle, food, people, portraits, and corporate editorial commissions.

---

## 📸 Key Features & Architecture

### 1. Branding & Editorial Aesthetic
- **Authentic Logo**: Sourced directly from [nagleweb.com](https://nagleweb.com/) (`logo_nagle-photography-1.png`).
- **Brand Colors**: Minimalist editorial studio palette (`#121214` studio dark, crisp gallery white `#FFFFFF`, subtle amber gold `#C59B27`, warm slate zinc `#262626`, refined `#E4E4E7` borders).
- **Authentic Photography**: Integrated actual Nagle Photography commercial archives (Krazy Glue product silo, Rick Bayless portrait, Sharpie pro fine silo, yakitori food flame, commuter urban series) alongside curated commercial photography.

### 2. Device Specifications & Native iOS Look
- Designed for **iPhone 16 Pro** (393 × 852 px design resolution).
- Dynamic Island, native iOS status bar (clock, 5G, Wi-Fi, battery), and bottom home indicator bar.
- Fixed bottom navigation: Home, Projects, Galleries, Messages, Profile.
- Includes a desktop view toggle to switch between an authentic **iPhone 16 Pro frame** (with titanium bezels and subtle shadows) and **Full Screen** mode.

### 3. App Entry (Zero Login / Registration)
- Quick branded splash screen with subtle loading pulse, automatically transitioning directly to the Home Screen.
- Preloaded client profile: **Marcus Vance**, Creative Director at Vance & Co. Luxury Goods.

### 4. Interactive Experiences
- **Home Screen**: Active project cards, recent galleries showcase, pending review items, upcoming shoots calendar, and studio activity feed.
- **Photography Project Booking (Guided Wizard)**:
  - Step 1: 8 photography specialties with visual thumbnails (Product, Advertising, Lifestyle, Food, Corporate, Portrait, Event, Other).
  - Step 2: Project details, brand, photo count, shoot date, studio vs. location selector.
  - Step 3: Reference image upload interaction and attached creative brief PDF.
  - Step 4: Summary review with inline edit triggers and dispatch button.
  - Step 5: Confirmation screen; new project immediately populates into "My Projects".
- **My Projects**: Active, Upcoming, and Completed tabs with 6-stage visual timeline (Request Submitted → Project Confirmed → Photography Shoot → Photos Uploaded → Client Review → Final Delivery).
- **Private Photo Galleries**:
  - Grid view modes (2-column and 3-column).
  - Filter pills (All, Favorites, Pending Review, Approved, Revisions).
  - Multi-selection controls: individual select, Select All, Deselect All, shortlisted favorites.
  - Sticky bottom batch action bar: Download Selected, Submit for Approval.
- **Full-Screen Photo Viewer**:
  - High-res photo inspection with prev/next navigation and image counter.
  - Camera EXIF metadata (camera body, lens, aperture, shutter, ISO, resolution).
  - Retouch feedback drawer and revision presets.
  - Single and batch approval with confirmation modal and confetti celebration.
- **Project Communication**: Direct chat thread with Joe Nagle and studio retoucher Elena Rostova with quick reply suggestions and file attachment simulation.
- **Notifications**: Grouped by Today, Yesterday, Earlier with unread indicators and deep links to relevant projects/galleries.
- **Client Profile**: Company info, project stats, notification toggles, studio contact info with direct phone/email actions, and an edit profile modal.

---

## 🛠️ Tech Stack

- **React 18** with **TypeScript**
- **Tailwind CSS** for minimalist editorial styling
- **Lucide React** for minimalist line iconography
- **Canvas Confetti** for milestone celebrations
- **Vite 6** for lightning-fast bundling

---

## 🚀 Running the App

```bash
# Install dependencies
npm install

# Start Vite local development server
npm run dev

# Build for production
npm run build
```
