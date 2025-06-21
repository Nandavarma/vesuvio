# 🍕 Vesuvio — A Modern Food Ordering Web App

**Vesuvio** is a sleek, fully responsive food ordering platform built with React and Tailwind CSS. Users can explore restaurants, filter based on preferences, manage a cart, and place mock orders — all integrated with real-time data from a custom-built backend.

> Live Project: [https://vesuvio-in.vercel.app](https://vesuvio-in.vercel.app)

---

## 🚀 Features

- 🔍 Live restaurant search
- ✅ Filters: Veg-only & 4+ ratings
- 🛒 Smart cart management
- ✨ Framer Motion animations
- 🌙 Full dark/light mode support
- 🔐 Supabase login/register
- ⚙️ Redux Toolkit for state management
- 📡 Fetches data from your custom backend API

---

## 🧠 Tech Stack

- **React** + **Vite**
- **Tailwind CSS**
- **Redux Toolkit**
- **Framer Motion**
- **React Router**
- **Supabase Auth**
- **Custom Node.js/Express API** ([Backend Repo](https://github.com/Nandavarma/vesuvio-server))

---

## 📡 Backend API

All data is fetched from your own hosted backend:
https://vesuvio-server.onrender.com/api/

yaml
Copy
Edit

> The backend only allows requests from the deployed frontend domain for security.

---

## 📦 Folder Structure

```plaintext
vesuvio/
├── public/
│   └── index.html               # HTML shell
├── src/
│   ├── assets/                  # Images & logos
│   ├── components/              # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── PlaylistCard.jsx
│   │   ├── LoginRegister.jsx
│   │   └── ...
│   ├── pages/                   # Page-level routes
│   │   ├── Mainbody.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── utils/                   # Hooks, contexts, Redux logic
│   │   ├── useRestaurants.js
│   │   ├── useOnlineStatus.js
│   │   ├── darkModeContext.js
│   │   └── Redux utils/
│   │       ├── authSlice.js
│   │       └── cartSlice.js
│   ├── App.js                   # Main route manager
│   ├── index.js                 # Entry point
│   └── tailwind.config.js       # Tailwind config
├── .env                         # Environment variables
├── package.json
└── README.md
```
## 🛠️ Local Setup

> Requires **Node.js ≥ 16** and **npm**

```bash
# 1. Clone the repository
git clone https://github.com/Nandavarma/vesuvio.git
cd vesuvio

# 2. Install dependencies
npm install

# 3. Add your Supabase credentials to a `.env` file
# Example:
# VITE_SUPABASE_URL=your-url
# VITE_SUPABASE_ANON_KEY=your-key

# 4. Start development server
npm run dev

```
## 🖼️ Screenshots


Home Page	Restaurant Details	Order Confirmation

📬 Contact
If you have feedback, suggestions, or want to collaborate:

📧 nandavarma84@gmail.com

🌟 Like the Project?
Give it a ⭐️ on GitHub if you found it helpful!
