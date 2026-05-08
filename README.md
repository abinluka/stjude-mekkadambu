# St. Jude Church (RCSC), Mekkadambu — Website
## Complete Hosting & Deployment Guide

---

## 📁 FOLDER STRUCTURE

```
stjude-parish/
├── index.html              ← Home page
├── about.html              ← About Parish & History
├── liturgy.html            ← Mass Schedule & Sacraments
├── administration.html     ← Vicar, Council, Committees
├── ministries.html         ← KCYM, Catechism, Pious Associations
├── news.html               ← News & Events Calendar
├── gallery.html            ← Photo Gallery + Videos (with lightbox)
├── downloads.html          ← Bulletins & Forms
├── contact.html            ← Contact Form & Map
├── css/
│   └── style.css           ← All styles (mobile-first, responsive)
├── js/
│   └── main.js             ← Navigation, scroll, animations, form
├── images/                 ← Put all your parish photos here
│   └── (your photos here)
└── downloads/              ← Put all PDFs here
    └── (bulletin PDFs, forms here)
```

---

## ✅ FEATURES INCLUDED

- [x] Sticky responsive navbar with dropdown menus
- [x] Mobile hamburger menu (works on all phones)
- [x] Live announcement ticker (scrolling banner)
- [x] Hero section with Mass timings prominently displayed
- [x] Quick links navigation bar
- [x] Welcome / About section with statistics
- [x] Mass Schedule cards + detailed table
- [x] Announcements section with sidebar
- [x] Ministries preview cards
- [x] Gallery preview on homepage
- [x] Contact strip CTA
- [x] Full footer with links, timings, and contact info
- [x] Scroll-to-top button
- [x] Reveal animations on scroll
- [x] Counter animations (statistics)
- [x] Photo gallery with category filters
- [x] Lightbox photo viewer
- [x] YouTube video embed support
- [x] Contact form with validation
- [x] Downloads page (bulletins + forms)
- [x] Google Maps embed (placeholder — replace with real link)
- [x] All 9 pages complete and linked

---

## 🖼️ HOW TO ADD REAL PHOTOS

1. Copy your parish photos into the `images/` folder
2. Use these formats: `.jpg`, `.jpeg`, `.png`, `.webp`
3. Recommended size: **800×600px** or larger (compress before uploading)
4. In `gallery.html`, replace the emoji placeholders in each `.photo-thumb`:

```html
<!-- BEFORE (placeholder) -->
<div class="photo-thumb" data-lightbox="images/feast1.jpg">
  <span>⛪</span>
  <div class="overlay">🔍<span>Feast Day 2024</span></div>
</div>

<!-- AFTER (with real photo) -->
<div class="photo-thumb" data-lightbox="images/feast1.jpg">
  <img src="images/feast1.jpg" alt="Feast of St. Jude 2024" />
  <div class="overlay">🔍<span>Feast Day 2024</span></div>
</div>
```

---

## 📄 HOW TO ADD PDF DOWNLOADS

1. Put PDF files in the `downloads/` folder
2. In `downloads.html`, the `<a href="downloads/your-file.pdf" download>` links are already set up
3. Just name your files to match:
   - `bulletin-may-2025.pdf`
   - `form-baptism.pdf`
   - `form-marriage.pdf`
   - etc.

---

## 🗺️ HOW TO ADD GOOGLE MAPS

1. Go to **Google Maps** → search "St Jude Church Mekkadambu"
2. Click **Share** → **Embed a map**
3. Copy the `<iframe>` code
4. In `contact.html`, replace the existing iframe with your copied code

---

## 📹 HOW TO ADD YOUTUBE VIDEOS

In `gallery.html`, replace each video placeholder with a real YouTube embed:

```html
<!-- Replace the div.video-placeholder with this iframe -->
<iframe 
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
```
Get the Video ID from the YouTube URL: `youtube.com/watch?v=VIDEO_ID`

---

## 🔧 HOW TO UPDATE CONTENT

All content is in plain HTML — no database or CMS needed.

| What to update | Where to edit |
|----------------|---------------|
| Mass timings | `index.html` (hero section) + `liturgy.html` |
| Announcements ticker | Top of every page (`.ticker-content` div) |
| Parish council names | `administration.html` |
| News / Events | `news.html` |
| Contact details | `contact.html` + footer of every page |
| Vicar name | `administration.html` |
| Parish statistics | `index.html` (`.welcome-stats`) |

---

## 🌐 OPTION 1: FREE HOSTING — GitHub Pages (Recommended for Beginners)

**Cost: FREE | No database needed | Works perfectly for this static site**

### Step-by-step:

1. **Create a GitHub account** at https://github.com (free)

2. **Create a new repository**:
   - Click "New repository"
   - Name it: `stjude-mekkadambu` (or any name)
   - Make it **Public**
   - Click "Create repository"

3. **Upload all files**:
   - Click "uploading an existing file"
   - Drag and drop the entire `stjude-parish/` folder contents
   - Click "Commit changes"

4. **Enable GitHub Pages**:
   - Go to repository → **Settings** → **Pages**
   - Source: Deploy from a branch → Branch: `main` → Folder: `/ (root)`
   - Click Save

5. **Your website is live** at:
   `https://yourusername.github.io/stjude-mekkadambu/`

**Time to go live: ~5 minutes**

---

## 🌐 OPTION 2: FREE HOSTING — Netlify (Easiest, Drag & Drop)

**Cost: FREE | Custom domain support | HTTPS included**

1. Go to **https://netlify.com** → Sign up free
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag and drop your `stjude-parish/` folder onto the page
4. Site is instantly live at a random URL like `https://random-name.netlify.app`
5. (Optional) Go to **Site settings → Domain** → Add custom domain

**Time to go live: 2 minutes**

---

## 🌐 OPTION 3: PAID HOSTING (For Custom Domain like www.stjudemekkadambu.org)

**Recommended providers:**
- **Hostinger** (~₹99/month) — https://hostinger.in
- **Bluehost** (~₹179/month) — https://bluehost.in
- **GoDaddy** — https://godaddy.com

### Steps:
1. **Buy a domain** (e.g., `stjudemekkadambu.org`) — ~₹700–900/year
2. **Buy hosting** (shared hosting plan is sufficient)
3. **Log into cPanel** (provided by host)
4. Open **File Manager** → Navigate to `public_html/`
5. **Upload** all files from `stjude-parish/` into `public_html/`
6. Your site is live at your domain!

---

## 🌐 OPTION 4: Google Sites (Simplest — No Code Needed)

If you want no-code management:
1. Go to **https://sites.google.com**
2. Create a new site
3. Copy-paste content manually
4. Publish with a Google domain or connect your own

> ⚠️ Note: Google Sites won't use your custom HTML/CSS — it's a separate approach.

---

## 🔒 SSL / HTTPS

- **GitHub Pages**: HTTPS is automatic (free)
- **Netlify**: HTTPS is automatic (free)
- **Paid hosting**: Enable "Let's Encrypt SSL" in cPanel (free)

---

## 💾 NO DATABASE REQUIRED

This website is **100% static HTML** — no PHP, no MySQL, no WordPress.

- ✅ No server setup needed
- ✅ No database to maintain
- ✅ No security vulnerabilities from CMS
- ✅ Fast loading on slow connections
- ✅ Works on any free hosting

The contact form currently uses JavaScript validation only. To actually **receive emails** from the form, use one of these free services:

### To receive contact form emails (Free):
1. **Formspree** (https://formspree.io) — Free for 50 submissions/month
   - Sign up → Create a form → Get your endpoint
   - In `contact.html`, change: `<form id="contactForm">` to:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```

2. **Web3Forms** (https://web3forms.com) — Free unlimited
   - Sign up with your Gmail → Get access key
   - Add to form: `<input type="hidden" name="access_key" value="YOUR_KEY">`

---

## 📱 MOBILE TESTING

Test on mobile before going live:
1. Open Chrome on PC → Press F12 → Click the phone icon
2. Test at 375px (iPhone) and 390px (Android) widths
3. Or use: https://responsivedesignchecker.com

---

## 📋 CUSTOMIZATION CHECKLIST

Before going live, update these placeholder values:

- [ ] Replace `0485-XXXXXXX` with real office phone number
- [ ] Replace `+91 9XXXXXXXXX` with real Vicar's number
- [ ] Replace `stjude.mekkadambu@gmail.com` with real email
- [ ] Replace Vicar name `[Vicar Name]` in `administration.html`
- [ ] Replace Parish Council member names
- [ ] Add real photos to `images/` folder
- [ ] Add real PDF files to `downloads/` folder
- [ ] Update Google Maps embed with real church location
- [ ] Add YouTube channel link in `gallery.html`
- [ ] Update Facebook/social media links in footer
- [ ] Review and update all placeholder statistics (families, members)

---

## 🛠️ MAKING FUTURE UPDATES

### To update announcements:
Open any `.html` file → Find `.ticker-content` → Edit the `<span>` texts

### To add a new news item:
Open `news.html` → Copy an existing `.news-card` block → Paste and edit

### To add a new download:
Open `downloads.html` → Copy an existing `.download-card` → Edit title/file name

### To change colors:
Open `css/style.css` → Edit the `:root { }` CSS variables at the top

---

## 📞 SUPPORT

For technical help with the website:
- Read the HTML comments inside each file — every section is clearly labelled
- Search "HTML basics tutorial" on YouTube for visual guides
- For domain/hosting issues, contact your hosting provider's support

---

*Website built with HTML5, CSS3, and vanilla JavaScript.*
*No frameworks. No build tools. Works offline and on slow networks.*
*Designed with love for the Parish of St. Jude Church (RCSC), Mekkadambu.*
