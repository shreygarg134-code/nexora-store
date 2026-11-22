# Nexora (v1)

A modular, multi-page e-commerce storefront built from scratch with **Vanilla JavaScript (ES6+)**, HTML5, and CSS3—no frontend frameworks. Designed to practice core web engineering fundamentals: OOP class inheritance, asynchronous API integration, client-side state persistence, and automated unit testing.

**Live Demo:** 

---

## Features

* **Dynamic Product Catalog:** Fetches live product data asynchronously from `supersimplebackend.dev` and renders items using ES6 classes (`Product` and `Clothing` subclasses) with dynamic CSS-variable star ratings.
* **Interactive Cart & Quantity Controls:** Add items with custom quantities, update or remove items in real time, and persist cart state across sessions with `localStorage`.
* **Checkout & Delivery Calculations:** Supports multiple shipping speeds with dynamic delivery date calculations powered by **Day.js**, plus an auto-updating payment summary (subtotal, shipping, 10% tax, and order total).
* **Backend Order Placement:** Submits cart payloads via `fetch` (`POST`) to generate backend-assigned Order IDs and timestamps.
* **Order History & Management (`orders.html`):** Displays placed orders with one-click **Buy it again** cart additions and **Delete order** persistence.
* **Live Package Tracking (`tracking.html`):** Reads `orderId` and `productId` from URL query parameters to render item-specific tracking details and a dynamic progress bar (*Preparing* → *Shipped* → *Delivered*).
* **Automated Unit & Integration Tests:** Built with **Jasmine 5.1.1** to test currency formatting, cart mutations, and DOM rendering in `ordersummary.js`.

---

## Tech Stack

* **Frontend:** HTML5, CSS3 (Grid & Flexbox), Vanilla JavaScript (ES6 Modules)
* **Libraries:** [Day.js](https://day.js.org/) (ESM), [Jasmine 5.1.1](https://jasmine.github.io/)
* **Backend / API:** `supersimplebackend.dev` (`XMLHttpRequest` & `fetch`)
* **Storage:** Browser `localStorage`

---

## Project Structure

```text
nexora-store/
├── index.html                 # Main storefront page
├── checkout.html              # Cart review & payment summary
├── orders.html                # Order history & management
├── tracking.html              # URL-driven package tracking
├── data/
│   ├── products.js            # Product/Clothing OOP classes & backend loader
│   ├── cart.js                # Active cart state & localStorage logic
│   ├── deliveryoption.js      # Shipping tiers & pricing
│   ├── orders.js              # Order storage, lookup, & deletion helpers
│   ├── cart-oop.js            # [Study] Object-based OOP cart refactor
│   ├── cart-class.js          # [Study] ES6 Class-based cart refactor
│   └── backend-prac.js        # [Study] Early XHR/API experiments
├── scripts/
│   ├── index.js               # Storefront rendering & add-to-cart listeners
│   ├── checkout.js            # Checkout page entry point
│   ├── orders.js              # Orders page rendering & actions
│   ├── tracking.js            # Tracking page URL parser & progress bar
│   ├── checkout/
│   │   ├── ordersummary.js    # Cart items & delivery option controls
│   │   └── paymentsummary.js  # Cost breakdown & POST order submission
│   └── utils/
│       └── money.js           # Cents-to-dollars currency formatter
├── styles/                    # Shared & page-specific stylesheets
├── images/                    # Nexora branding, icons, & product assets
└── tests/
    ├── tests.html             # Jasmine test runner
    ├── checkout/              # DOM & order summary integration tests
    ├── data/                  # Cart unit tests
    ├── utils/                 # Money utility unit tests
    └── Test-simple/           # [Study] Manual test scripts pre-Jasmine
