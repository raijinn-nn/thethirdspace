# ☕ the third space — Full-Stack Cafe & Focus Studio Web Application

**Course:** ITS122P — Term Project  
**Section:** AM3  
**Student:** Drilon  
**Architecture:** Front End (HTML5, CSS, Vanilla JS) ➔ Back End (Node.js & Express.js) ➔ Database (Supabase / PostgreSQL & MySQL)

---

## 🌟 1. Business Concept Overview
**"the third space"** is inspired by sociologist **Ray Oldenburg's** framework of the *"third place"* — the vital community realm distinct from the 1st space (Home) and the 2nd space (Work / School). 

It is conceptualized as an artisanal café and focus studio tailored for students, developers, and remote creatives. The platform provides:
- **Zero-Friction Table Ordering:** Customers order drinks and meals directly to their table or focus booth from their phone.
- **Space & Booth Reservations:** Real-time booking of silent study booths and group tables.
- **Order Tracking:** Live kitchen timeline stepper to monitor order status.
- **Contact & Inquiries:** Dedicated feedback and event booking system.
- **Staff / Admin Portal:** Comprehensive CRUD operations to manage orders, catalog items, table reservations, and inquiries.

---

## 🧭 2. Page Structure (Exceeds 5 Major Pages Requirement)

| Page | File | Purpose |
| :--- | :--- | :--- |
| **Home** | [`index.html`](file:///c:/Users/justi/Downloads/thethirdspace/index.html) | Hero showcase, Oldenburg philosophy, value props, featured menu carousel, and CTAs. |
| **About Us** | [`about.html`](file:///c:/Users/justi/Downloads/thethirdspace/about.html) | Heritage, Ray Oldenburg's 3rd Place sociological theory, space zones, and core values. |
| **Menu & Order** | [`menu.html`](file:///c:/Users/justi/Downloads/thethirdspace/menu.html) | Categorized menu, live instant search, shopping cart drawer, checkout modal, and simulated QR payment. |
| **Book Space** | [`reservation.html`](file:///c:/Users/justi/Downloads/thethirdspace/reservation.html) | Workspace / table booking with date/time validation, zone selection, and dynamic summary. |
| **Track Order** | [`orders.html`](file:///c:/Users/justi/Downloads/thethirdspace/orders.html) | Live order tracker with visual 4-step kitchen progress stepper and recent orders lookup. |
| **Contact Us** | [`contact.html`](file:///c:/Users/justi/Downloads/thethirdspace/contact.html) | Contact form with client-side validation, operating hours, simulated map, and FAQ accordion. |
| **Staff Portal** | [`admin.html`](file:///c:/Users/justi/Downloads/thethirdspace/admin.html) | Complete administrative dashboard with full **CRUD** operations on Orders, Products, Reservations, and Messages. |

---

## ⚙️ 3. Full-Stack Technology Stack

- **Front-End:** Semantic HTML5, Tailwind CSS, Lucide Icons, Vanilla JavaScript (ES6+).
- **Back-End:** Node.js, Express.js REST API server ([`server.js`](file:///c:/Users/justi/Downloads/thethirdspace/server.js)).
- **Database:** Supabase (Cloud PostgreSQL) + MySQL database export script ([`database.sql`](file:///c:/Users/justi/Downloads/thethirdspace/database.sql)).
- **Data Layer Architecture:**
  - **Tier 1:** Communicates with Node.js/Express REST API endpoints (`/api/...`).
  - **Tier 2:** Direct `@supabase/supabase-js` cloud client connection.
  - **Tier 3:** Built-in offline fallback store (`localStorage` and memory store) ensuring zero crashes even when running standalone or offline during classroom presentations!

---

## 🚀 4. Quick Start & Setup Instructions

### Prerequisites
- Node.js (v18 or higher) installed on your system.

### Step 1: Install Dependencies
Open PowerShell or Terminal in the project root:
```bash
npm install
```

### Step 2: Configure Supabase (Optional for Cloud Mode)
1. Go to your [Supabase Dashboard](https://supabase.com/dashboard) and create a project.
2. In the Supabase **SQL Editor**, open [`supabase_schema.sql`](file:///c:/Users/justi/Downloads/thethirdspace/supabase_schema.sql) and click **RUN**.
3. Copy your project URL and `anon` / `service_role` API key.
4. Paste them into `.env`:
   ```env
   PORT=3000
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_KEY=your-supabase-key-here
   ```
5. *(Also paste them into [`js/supabase-config.js`](file:///c:/Users/justi/Downloads/thethirdspace/js/supabase-config.js) under `SUPABASE_CONFIG` if you wish to use browser direct mode).*

> **Note:** If you don't have a Supabase account yet, the application **automatically runs in integrated fallback demo mode** with pre-seeded data so you can test all features and demonstrate them immediately!

### Step 3: Start the Full-Stack Server
```bash
npm start
```
Open your browser and navigate to:
```
http://localhost:3000
```

---

## 🔐 5. Staff Admin Credentials
- **URL:** `http://localhost:3000/admin.html`
- **Email:** `admin@thethirdspace.cafe`
- **Password:** `admin123`
*(Or click "Access Dashboard" for 1-click demonstration access).*

---

## 📊 6. CRUD Operations Matrix

| Entity | CREATE | READ | UPDATE | DELETE |
| :--- | :--- | :--- | :--- | :--- |
| **Products** | Admin modal creates new item with price, category, image | Menu catalogue & Admin table display all items | Admin can edit price, availability, description | Admin can remove product from database |
| **Orders** | Customer places order through Cart & Checkout modal | Track order by reference code & Admin views all orders | Admin updates status: *Pending ➔ Preparing ➔ Ready ➔ Completed* | Admin can cancel or delete order record |
| **Reservations** | Customer books table / booth on reservation page | Admin views all table reservations | Admin updates status: *Confirmed ➔ Seated ➔ Completed* | Admin can cancel or remove reservation |
| **Messages** | Customer submits inquiry on Contact page | Admin views inquiries in Inquiries tab | Admin toggles *Read / Unread* | Admin deletes resolved messages |

---

## 📂 7. Project Deliverables Files Included
- `index.html`, `about.html`, `menu.html`, `reservation.html`, `orders.html`, `contact.html`, `admin.html`
- `server.js` (Express.js backend with REST routes)
- `package.json` (Dependencies and run scripts)
- `js/supabase-config.js` (Client data layer & Supabase SDK integration)
- `js/navbar.js` (Shared responsive navigation & footer)
- `supabase_schema.sql` (PostgreSQL / Supabase script with RLS & seed data)
- `database.sql` (MySQL database export script for course submission)
- `README.md` (Project guide)

