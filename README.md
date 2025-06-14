# **WanderLust Project**

A full-stack travel lodging application inspired by platforms like Airbnb. Users can explore various listings, view detailed information, and add new places. Built using modern web technologies with an emphasis on clean UI, routing, and modular code structure.


## 🔧 Table of Contents

- [Features] 
- [Tech Stack]
- [Getting Started]
  - [Prerequisites]
  - [Installation]
  - [Environment Variables] 
  - [Running Locally] 
- [Usage] 
- [Project Structure]
- [Acknowledgments]

---

## ⭐ Features

- User authentication (signup/login/logout)  
- Property listing & browsing  
- Detailed property views with images, descriptions & availability  
- Booking system with date selection  
- Responsive UI for mobile & desktop  

---
## 📸 Screenshots
---
## 🛠️ Tech Stack

| Role             | Technology                          |
|------------------|-------------------------------------|
| Frontend         | React, React Router, Axios          |
| Backend          | Node.js, Express.js, MongoDB (Mongoose) |
| Authentication   | JWT (JSON Web Tokens)               |
| Styles           | CSS Modules / Styled Components     |
| Deployment       | (optionally) Render                 |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+)  
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)  
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/Vinaykumar1809/WanderLust-Project.git
   cd WanderLust-Project

2.Install dependencies in both client and server:

```
cd backend
npm install

cd ../frontend
npm install
```
Environment Variables
Create a .env file in the backend directory:
```
PORT=5000
MONGODB_URI=<your_mongo_connection_string>
JWT_SECRET=<your_jwt_secret>
```
Running Locally
From the backend folder:

```npm run dev    # starts Node + Express server on port 5000```

From the frontend folder:

```npm start      # starts React dev server, usually on port 3000```

Open http://localhost:3000 in your browser.


## 🧭 Usage
1.Register a new user or log in with existing credentials.

2.Browse and search properties by location, price, ratings.

3.View property details—description, amenities, image gallery.

4.Pick available dates and complete a booking.

5.(Optional) Logout or explore more listings.


## 🗂️ Project Structure


```
WanderLust-Project/
├── backend/                  # API server
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/                 # React client
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/         # Axios API calls
├── screenshots/              # (optional) Screenshot images
└── README.md
```

Acknowledgments

-Built as part of learning MERN stack

-Inspired by Airbnb’s intuitive layout and UX

-Thanks to the MERN and Open Source communities!



Enjoy using WanderLust!

Happy travels, and feel free to open issues or PRs ✌️



