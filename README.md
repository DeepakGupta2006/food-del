# 🍅 Food-Del — Food Delivery Web App (MERN Stack)

A full-stack food delivery web application built using the **MERN stack** (MongoDB, Express.js, React, Node.js). Food-Del replicates the core functionality of modern food ordering platforms — browsing a menu, managing a cart, placing orders, and tracking order status — along with a dedicated admin panel for restaurant management.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Screenshots](#-screenshots)
- [Future Improvements](#-future-improvements)
- [License](#-license)

---

## ✨ Features

### Customer-Facing App
- 🔐 Secure user authentication (signup/login) using **JWT** and **bcrypt** password hashing
- 🍽️ Browse food items by category with images, descriptions, and pricing
- 🛒 Add, update, and remove items from a persistent cart tied to the user's account
- 📍 Checkout flow with delivery address collection
- 💵 Choice between **Cash on Delivery** and **Online Payment** (in progress)
- 📦 Order history with real-time status tracking (*Food Processing → Out for Delivery → Delivered*)
- 🔔 Toast notifications for order confirmations and errors
- 📱 Responsive design for desktop and mobile

### Admin Panel
- ➕ Add new food items with image upload support
- 📋 View and manage the full menu, including item removal
- 📦 View all customer orders with delivery details
- 🔄 Update order status, reflected live on the customer's order history

---

## 🛠️ Tech Stack

**Frontend**
- React.js + Vite
- React Router DOM
- Axios
- React-Toastify

**Backend**
- Node.js
- Express.js
- JWT (JSON Web Tokens) for authentication
- bcrypt for password hashing
- Multer for image uploads

**Database**
- MongoDB (via Mongoose ODM)
- MongoDB Atlas (cloud-hosted)

---

## 📁 Project Structure

```
food-del/
├── Backend/            # Express REST API
│   ├── config/         # Database connection
│   ├── controllers/    # Route logic (auth, cart, food, orders)
│   ├── middleware/      # JWT auth middleware
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API route definitions
│   ├── uploads/         # Uploaded food images
│   └── server.js
│
├── frontend/            # Customer-facing React app
│   └── src/
│       ├── components/  # Navbar, Footer, LoginPopup, etc.
│       ├── context/     # Global state (StoreContext)
│       └── pages/       # Home, Cart, PlaceOrder, MyOrders
│
└── admin/               # Admin dashboard React app
    └── src/
        └── pages/       # Add, List, Orders
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (free tier works)

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/food-del.git
cd food-del
```

### 2. Set up the Backend
```bash
cd Backend
npm install
```
Create a `.env` file in the `Backend` folder (see [Environment Variables](#-environment-variables) below), then run:
```bash
npm run server
```
The backend will start on `http://localhost:4000`.

### 3. Set up the Frontend
```bash
cd ../frontend
npm install
npm run dev
```

### 4. Set up the Admin Panel
```bash
cd ../admin
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `Backend` folder with the following:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

> ⚠️ Never commit your `.env` file to GitHub. Make sure it's listed in `.gitignore`.

---

## 🔌 API Endpoints

| Method | Endpoint                | Description                     | Auth Required |
|--------|--------------------------|----------------------------------|----------------|
| POST   | `/api/user/register`     | Register a new user              | ❌ |
| POST   | `/api/user/login`        | Login existing user              | ❌ |
| GET    | `/api/food/list`         | Get all food items               | ❌ |
| POST   | `/api/cart/add`          | Add item to cart                 | ✅ |
| POST   | `/api/cart/remove`       | Remove item from cart            | ✅ |
| POST   | `/api/cart/get`          | Get user's cart                  | ✅ |
| POST   | `/api/order/place`       | Place a new order                | ✅ |
| POST   | `/api/order/userorders`  | Get logged-in user's orders      | ✅ |
| GET    | `/api/order/list`        | Get all orders (admin)           | ❌ |
| POST   | `/api/order/status`      | Update order status (admin)      | ❌ |

---


## 🔮 Future Improvements

- [ ] Integrate a working online payment gateway (Razorpay/Stripe)
- [ ] Add order status email notifications
- [ ] Add product reviews and ratings
- [ ] Implement admin authentication for the admin panel
- [ ] Add search and filter functionality for the menu
- [ ] Deploy with CI/CD pipeline

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

Built by **Deepak Gupta** as a learning project to explore full-stack development with the MERN stack.
