# Digital-Tools-Platform

A modern, fully responsive product catalog and interactive pricing platform with real-time cart functionality. Built using React, DaisyUI and Tailwind CSS.

---

## 📝 Description

This project is a dynamic Product Listing and Pricing Application that provides users with a seamless shopping experience. It features a modern interface with a toggleable view between available products and a real-time shopping cart. 

Users can browse through a variety of items presented in a clean 3-column layout, filter or toggle views, add items to the cart, and proceed to checkout. It manages state efficiently to update the cart count in the navbar instantly and delivers interactive user feedback via toast notifications.

---

## 🛠️ Technologies Used

* **Frontend Library:** React.js (Functional Components, Hooks)
* **Styling & UI Components:** Tailwind CSS & DaisyUI
* **State Management:** React useState and map (for Cart functionality)
* **Notifications:** React-Toastify (NPM Package)
* **Data Source:** Custom JSON Data (Mock Product API)
* **Version Control:**  GitHub

---

## ✨ Key Features

Here are the top 3 core features of this application:

### 1. 🔄 Dynamic Content Toggling & 3-Column Layout
The application features a centralized toggle system that allows users to switch seamlessly between the **Product Grid** and the **Cart Section**. Products are beautifully displayed in a responsive 3-column layout built from Figma designs, complete with pricing periods (one-time/monthly/yearly) and specialized product tags.

### 2. 🛒 Real-Time Cart Management (Add, Remove & Checkout)
A fully functional cart system integrated across components:
* Clicking **"Buy Now"** updates the global Navbar cart counter instantly and changes the button state to *"Added to cart"*.
* The 1-column Cart view calculates the total price dynamically.
* Users can remove specific items with a single click, automatically adjusting the total count and price.

### 3. 🔔 Interactive Feedback & Toast Notifications
Powered by `react-toastify`, the application provides smooth, non-blocking visual alerts for every critical user action. Users receive instant, beautifully styled success or warning toasts whenever they add an item to the cart, remove a product, or clear the cart via the **"Proceed to Checkout"** button.
