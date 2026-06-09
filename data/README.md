# SophtMade — Website Guide

Everything you need to manage, update, and grow your store.

---

## Quick Start

1. Download the `sophtmade` folder
2. Open `index.html` in any browser — the site works immediately
3. No installation, no server, no npm required

To go live, upload the entire `sophtmade` folder to any web host (Netlify, cPanel, GitHub Pages, etc.)

---

## Folder Structure

```
sophtmade/
├── index.html          Landing page
├── shop.html           Jersey shop + filters
├── cart.html           Cart + WhatsApp checkout
├── contact.html        Contact, delivery info, FAQ
│
├── css/
│   ├── style.css       Global styles, colours, buttons, layout
│   ├── navbar.css      Navigation bar
│   ├── hero.css        Dark cinematic hero section
│   ├── shop.css        Product grid, cards, filters
│   ├── modal.css       Product detail popup
│   ├── cart.css        Cart page, order summary
│   └── responsive.css  Mobile, tablet, desktop breakpoints
│
├── js/
│   ├── products.js     ⭐ ALL YOUR JERSEY DATA LIVES HERE
│   ├── shop.js         Grid rendering, search, filters
│   ├── modal.js        Product detail modal logic
│   ├── cart.js         Cart engine (add, remove, qty, sizes)
│   ├── checkout.js     WhatsApp order message builder
│   └── ui.js           Navbar, hamburger, FAQ, animations
│
└── images/
    ├── logo/           logo-white.png, logo-dark.png
    ├── jerseys/        One image per product
    ├── hero/           hero-jersey.png, club-bg.jpg, national-bg.jpg
    └── icons/          favicon.ico
```

---

## How to Add a New Jersey

Open `js/products.js` and add a new object to the `PRODUCTS` array.

**Copy this template:**

```javascript
{
  id: 17,                              // Unique number — always increment
  name: "Club Name Jersey Type",       // Full product name
  club: "Club Name",                   // Exact club name (used for filters)
  category: "club",                    // "club" or "national"
  version: "fan",                      // "fan" or "player"
  kit: "home",                         // "home" or "away"
  price: 18500,                        // Price in Naira (numbers only, no ₦)
  description: "Your description...",  // Shown in product modal
  image: "images/jerseys/filename.jpg",// Path to your jersey image
  rating: 5,                           // 1 to 5 (whole numbers)
  reviewCount: 0,                      // Number shown next to stars
  sizes: ["S","M","L","XL","XXL"],     // Available sizes
  featured: false                      // true = shows on homepage
},
```

Then drop the jersey image into `images/jerseys/` with the same filename you used above.

**Rules:**

- `id` must be unique — always use the next number in sequence
- Only 4 products can be `featured: true` on the homepage at once
- `club` must match exactly across products (used by the filter system)
- Image format: JPG or PNG, recommended size 800×800px (square works best)

---

## How to Edit Product Details

Find the product in `js/products.js` by its `name` or `id` and change any field.

**Change a price:**

```javascript
price: 21000,   // was 18500
```

**Change availability (remove a size):**

```javascript
sizes: ["S","M","L","XL"],   // removed XXL
```

**Update a description:**

```javascript
description: "New description text here.",
```

Save the file — changes appear instantly when you refresh the browser.

---

## How to Update Your Logo

Replace the files in `images/logo/`:

| File             | Used on                                  |
| ---------------- | ---------------------------------------- |
| `logo-white.png` | Home page (dark hero navbar)             |
| `logo-dark.png`  | Shop, Cart, Contact pages (light navbar) |

Recommended size: **160×48px** (wide, transparent background PNG).

If your logo has not loaded, the text "SophtMade" will show as a fallback automatically.

---

## How to Change Your WhatsApp Number

Your number appears in **multiple places**. Search and replace `08136358095` with your full number (country code, no spaces, no +):

| File             | What to change                    |
| ---------------- | --------------------------------- |
| `js/checkout.js` | `const WA_NUMBER = '08136358095'` |
| `index.html`     | All `wa.me/08136358095` links     |
| `contact.html`   | All `wa.me/08136358095` links     |
| `shop.html`      | All `wa.me/08136358095` links     |
| `cart.html`      | All `wa.me/08136358095` links     |

The format must be: local or country code number, e.g. `08136358095` or `2348136358095`

---

## How to Change Prices (Currency)

Prices are always formatted as ₦ automatically by the `formatPrice()` function in `js/products.js`.

To change the currency symbol, find this line in `js/products.js`:

```javascript
function formatPrice(amount) {
  return "₦" + amount.toLocaleString("en-NG");
}
```

Change `'₦'` to any symbol you want, e.g. `'$'` or `'GH₵'`.

---

## How to Add Hero Images

| Image                         | Size       | Purpose                                                       |
| ----------------------------- | ---------- | ------------------------------------------------------------- |
| `images/hero/hero-jersey.png` | 600×800px  | Featured jersey on the dark hero (transparent PNG works best) |
| `images/hero/club-bg.jpg`     | 1200×675px | Background for "Club jerseys" collection tile                 |
| `images/hero/national-bg.jpg` | 1200×675px | Background for "National teams" collection tile               |

If no image is present, the site shows a clean placeholder outline — nothing breaks.

---

## How to Edit the FAQ

Open `contact.html` and find the section with `class="faq-list"`.

**Each question follows this pattern:**

```html
<div class="faq-item">
  <button class="faq-item__question" aria-expanded="false">
    Your question here?
    <svg ...></svg>
  </button>
  <div class="faq-item__answer" hidden>
    <p>Your answer here.</p>
  </div>
</div>
```

Copy the block above to add a new question. Delete a block to remove one.

---

## How to Edit Testimonials

Open `index.html` and find the section with `class="testi__grid"`.

Each testimonial is an `<article class="testi__card">` block. Edit the text inside:

```html
<div class="testi__stars">★★★★★</div>
<blockquote class="testi__quote">"Your customer quote here."</blockquote>
<p class="testi__name">Customer Name</p>
<p class="testi__location">City, Nigeria</p>
```

The middle card with `class="testi__card--featured"` has the dark/amber highlight styling — keep it as the middle card for best visual balance.

---

## How to Change Brand Colours

Open `css/style.css` and look for the `:root` block at the top.

```css
:root {
  --amber: #f7a500; /* Main accent — buttons, stars, highlights */
  --amber-dark: #d48e00; /* Hover state for amber elements */
  --pitch: #0a0a0a; /* Hero background, navbar, footer */
  --near-black: #222222; /* Body text */
  --white: #ffffff; /* Page background */
  --warm-grey: #f5f5f4; /* Card backgrounds, sections */
  --whatsapp: #25d366; /* WhatsApp buttons — do not change */
}
```

Change `--amber` to any colour to reskin the entire site instantly.

---

## How to Go Live (Deployment)

### Option A — Netlify (Free, Recommended)

1. Go to [netlify.com](https://netlify.com) and sign up free
2. Drag and drop the `sophtmade` folder onto the Netlify dashboard
3. Your site is live in 30 seconds with a free URL
4. Connect a custom domain from the Netlify settings

### Option B — cPanel / Hosting Provider

1. Log in to your hosting cPanel
2. Open File Manager → navigate to `public_html`
3. Upload all files from the `sophtmade` folder
4. Visit your domain — the site is live

### Option C — GitHub Pages (Free)

1. Create a GitHub account and a new repository
2. Upload all files to the repository
3. Go to Settings → Pages → set source to main branch
4. GitHub gives you a free URL (yourname.github.io/sophtmade)

---

## Adding More Products — Tips

- **Naming convention for images:** use lowercase, hyphens, no spaces
  e.g. `man-utd-home-fan.jpg`, `chelsea-away-player.jpg`
- **Square images look best** on product cards (1:1 ratio)
- **Compress images** before uploading to keep the site fast
  Recommended tool: [squoosh.app](https://squoosh.app) — free, browser-based
- **Keep image file sizes under 200KB** for fast mobile loading
- The site handles missing images gracefully — a jersey outline placeholder shows instead

---

## WhatsApp Order Message Format

When a customer clicks "Checkout via WhatsApp", they'll see a pre-filled message like this:

```
🛒 *NEW ORDER — SophtMade*
─────────────────────────

*1. Manchester United Home Jersey*
   • Version: Fan edition
   • Kit: Home kit
   • Size: L
   • Qty: 1
   • Price: ₦18,500

*2. Real Madrid Away Jersey*
   • Version: Player edition
   • Kit: Away kit
   • Size: M
   • Qty: 1
   • Price: ₦28,000

─────────────────────────
*TOTAL: ₦46,500*
_(Delivery fee to be confirmed)_

Please confirm availability and provide delivery details. Thank you! 🙏
```

You receive this on WhatsApp at **+234 810 811 6903** and reply directly to confirm the order.

---

## Common Questions

**The cart resets when I close the browser tab — is that normal?**
No — the cart uses `localStorage` which persists across tabs and browser restarts. If it resets, check that you're opening the file from a web server (not just double-clicking the HTML file directly). Use a local server like VS Code Live Server, or deploy to Netlify.

**Images aren't showing up.**
Make sure the image filename in `products.js` exactly matches the file in `images/jerseys/` — including the extension (`.jpg` vs `.JPG`). File names are case-sensitive on most web servers.

**A filter isn't working for a new club I added.**
Make sure the `club` field in your new product in `products.js` matches the club name exactly — including capitalisation. The filter system auto-generates from the data.

**Can I add a custom domain?**
Yes — all hosting options above support custom domains. Netlify and cPanel make this easiest.

---

## Contact & Support

Business: **SophtMade**
WhatsApp: **+234 810 811 6903**

---

_Built with HTML, CSS & JavaScript. No frameworks, no dependencies, no build tools._
_Open any file in a browser and it works._
