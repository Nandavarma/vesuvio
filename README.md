Here are two tailored **README files** — one for your **frontend** repo (`vesuvio`) and a shorter one for your **backend** (`vesuvio-server`). Each is optimized for clarity, presentation, and usefulness on GitHub.

---

## ✅ README for `vesuvio` (Frontend Repository)

```markdown
# Vesuvio 🍕 — Modern Food Ordering Web App

Vesuvio is a sleek and responsive food ordering web application built with **React**, **Tailwind CSS**, **Framer Motion**, and **Redux Toolkit**. It offers an immersive user experience with restaurant listings, search filters, cart management, and authentication — all powered by real-time data from a custom backend API.

🔗 **Live Site**: [https://vesuvio-in.vercel.app](https://vesuvio-in.vercel.app)

---

## 🧠 Tech Stack

- ⚛️ React (Functional Components + Hooks)
- 💅 Tailwind CSS
- 🌙 Dark Mode Support
- 🚀 Redux Toolkit (State Management)
- 🔐 Supabase Auth
- 🌐 Framer Motion (Animations)
- 🍽 Custom Backend API ([vesuvio-server](https://github.com/Nandavarma/vesuvio-server))

---

## 📡 Backend API Integration

All restaurant data, order actions, and logic are fetched from a custom-built API hosted at:

```

[https://vesuvio-server.onrender.com/api/](https://vesuvio-server.onrender.com/api/)

````

This server only accepts requests from the deployed frontend domain for security.

---

## 📁 Folder Structure

```plaintext
vesuvio/
├── public/
│   └── index.html              # Main HTML shell
├── src/
│   ├── assets/                 # Images & icons
│   ├── components/            # All UI components
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── PlaylistCard.jsx
│   │   └── ...
│   ├── pages/                 # Route-based page components
│   │   ├── Mainbody.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── utils/                 # Custom hooks, Redux, Supabase client
│   │   ├── useRestaurants.js
│   │   ├── darkModeContext.js
│   │   └── Redux utils/
│   │       └── authSlice.js
│   ├── App.js                 # Main app layout and routing
│   ├── index.js               # React DOM render entry
│   └── tailwind.config.js     # Tailwind customization
├── .env                       # Environment variables (Supabase keys)
├── package.json
└── README.md                  # You're here!
````

---

## 📸 Screenshots

> Replace these below with real images later

| Home Page                       | Restaurant Details                    | Order Success Modal               |
| ------------------------------- | ------------------------------------- | --------------------------------- |
| ![Home](./screenshots/home.png) | ![Details](./screenshots/details.png) | ![Order](./screenshots/order.png) |

---

## 🛠 Local Setup

```bash
# Clone the repository
git clone https://github.com/Nandavarma/vesuvio.git
cd vesuvio

# Install dependencies
npm install

# Start development server
npm run dev
```

> Ensure your `.env` file includes Supabase credentials

---

## 📬 Contact

For suggestions or collaborations:
📧 **[nandavarma84@gmail.com](mailto:nandavarma84@gmail.com)**

---

## ⭐️ Star the Project

If you like the project, consider giving it a ⭐️ to support the development!

````

---

## ✅ README for `vesuvio-server` (Backend Repository)

```markdown
# Vesuvio Server 🍽️ — Backend API

This is the backend API that powers the Vesuvio food ordering app.

🔗 **Frontend App**: [https://vesuvio-in.vercel.app](https://vesuvio-in.vercel.app)

---

## 📡 API Base URL

````

[https://vesuvio-server.onrender.com/api/](https://vesuvio-server.onrender.com/api/)

```

---

## 🔐 CORS Policy

This server **only allows requests from**:

```

[https://vesuvio-in.vercel.app](https://vesuvio-in.vercel.app)

````

If you attempt to fetch from another origin, the request will be blocked by CORS.

---

## 🚀 Features

- RESTful API with Express.js
- Serves restaurant data and menus
- Deployed on Render

---

## 🛠 Local Setup

```bash
git clone https://github.com/Nandavarma/vesuvio-server.git
cd vesuvio-server

npm install
npm run dev
````

---

## 📬 Contact

📧 **[nandavarma84@gmail.com](mailto:nandavarma84@gmail.com)**

```

---

Would you like me to:
- Generate a Markdown `screenshots/` section with placeholders?
- Add badges (e.g. Vercel, Render, License)?
- Format both for NPM/Yarn commands or Docker support?

Let me know and I can polish it further.
```
