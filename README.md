# **WanderLust Project**

A full-stack travel lodging application inspired by platforms like Airbnb. Users can explore various listings, view detailed information, and add new places. Built using modern web technologies with an emphasis on clean UI, routing, and modular code structure.

Implements a full-stack architecture using the MVC (Model-View-Controller) design pattern, separating data handling, user interface, and control logic for maintainability and scalability.


## 🔧 Table of Contents

- [Features]
- [Screenshots]
- [Demo]
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

<h2>🖥️ Responsive Design (Desktop):</h2>

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">

  <div style="text-align: center;">
    <a href="https://github.com/user-attachments/assets/36181857-bda3-4ee4-92e5-97cca9635864" target="_blank">
      <img src="https://github.com/user-attachments/assets/36181857-bda3-4ee4-92e5-97cca9635864" alt="Home Page" width="300px" style="border-radius: 8px;">
    </a>
    <p>Home Page</p>
  </div>

  <div style="text-align: center;">
    <a href="https://github.com/user-attachments/assets/4555ae63-2b36-4e9e-b4ca-3fe8fbc95470" target="_blank">
      <img src="https://github.com/user-attachments/assets/4555ae63-2b36-4e9e-b4ca-3fe8fbc95470" alt="Detail Page" width="300px" style="border-radius: 8px;">
    </a>
    <p>Listing Detail Page</p>
  </div>

  <div style="text-align: center;">
    <a href="https://github.com/user-attachments/assets/56dca773-82e6-4c3b-a690-2343f64569a2" target="_blank">
      <img src="https://github.com/user-attachments/assets/56dca773-82e6-4c3b-a690-2343f64569a2" alt="List Your Place" width="300px" style="border-radius: 8px;">
    </a>
    <p>List Your Place</p>
  </div>

  <div style="text-align: center;">
    <a href="https://github.com/user-attachments/assets/0bf958aa-1c47-4455-9136-02b2b15f32b1" target="_blank">
      <img src="https://github.com/user-attachments/assets/0bf958aa-1c47-4455-9136-02b2b15f32b1" alt="Sign Up Page" width="300px" style="border-radius: 8px;">
    </a>
    <p>Sign Up Page</p>
  </div>

</div>


<h2>📱 Responsive Design (Mobile):</h2>

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">

  <div style="text-align: center;">
    <a href="https://github.com/user-attachments/assets/d8dbde73-0aaf-4c6a-b093-e9ca714deec3" target="_blank">
      <img src="https://github.com/user-attachments/assets/d8dbde73-0aaf-4c6a-b093-e9ca714deec3" alt="Mobile Home Page" width="180px" style="border-radius: 8px;">
    </a>
    <p>Mobile Home Page</p>
  </div>

  <div style="text-align: center;">
    <a href="https://github.com/user-attachments/assets/0077485d-9dfe-4298-835a-73e1b8b3510d" target="_blank">
      <img src="https://github.com/user-attachments/assets/0077485d-9dfe-4298-835a-73e1b8b3510d" alt="Mobile Navbar" width="180px" style="border-radius: 8px;">
    </a>
    <p>Mobile Navbar</p>
  </div>

  <div style="text-align: center;">
    <a href="https://github.com/user-attachments/assets/aef71ff6-5371-4bba-948d-3269b205954c" target="_blank">
      <img src="https://github.com/user-attachments/assets/aef71ff6-5371-4bba-948d-3269b205954c" alt="Mobile Listing Page" width="180px" style="border-radius: 8px;">
    </a>
    <p>Listing Detail Page</p>
  </div>

  <div style="text-align: center;">
    <a href="https://github.com/user-attachments/assets/2136e07b-e842-4985-88d3-f06f94a64d66" target="_blank">
      <img src="https://github.com/user-attachments/assets/2136e07b-e842-4985-88d3-f06f94a64d66" alt="Mobile Sign Up Page" width="180px" style="border-radius: 8px;">
    </a>
    <p>Sign Up Page</p>
  </div>

</div>

---



## Demo

 https://github.com/user-attachments/assets/3b85d943-b9ec-42a0-9f70-cba870c2f2b3

 
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
└── README.md
```

Acknowledgments

-Built as part of learning MERN stack

-Inspired by Airbnb’s intuitive layout and UX

-Thanks to the MERN and Open Source communities!



Enjoy using WanderLust!

Happy travels, and feel free to open issues or PRs ✌️



