# MindSafe – Anonymous Mental Health Support Platform

## 📌 Overview

MindSafe is a web-based platform designed to connect young people in East Africa (ages 12–30) with licensed therapists while maintaining complete anonymity. The system addresses the stigma, accessibility, and privacy concerns surrounding mental health support in Rwanda and across the region.

This prototype demonstrates a functional implementation of the system based on the Software Requirements Specification (SRS), focusing on anonymity, accessibility, and user-centered design.

---

## 🎯 Problem Statement

Mental health challenges among young people in Rwanda are increasing, including depression, anxiety, trauma, and substance abuse. However, access to support remains limited due to:

* Cultural stigma surrounding mental health
* Fear of being recognized in small communities
* Limited youth-friendly services
* Financial and accessibility barriers

As a result, many young people avoid seeking help or resort to harmful coping mechanisms.

---

## 💡 Solution

MindSafe provides a safe, anonymous digital space where users can:

* Create accounts using pseudonyms only
* Browse verified therapists
* Book confidential therapy sessions
* Pay discreetly through mobile money systems
* Access crisis resources when needed

---

## 🧱 System Architecture

The system is structured into three main layers:

### 1. Frontend (Presentation Layer)

Handles user interaction and interface rendering.

* `index.html` – Main structure of the application
* `style.css` – Styling and layout
* `app.js` – User interface logic and event handling

### 2. Backend (Mock API Layer)

Simulates server-side logic using JavaScript.

* `mockApi.js` – Handles:

  * User authentication
  * Session management
  * Therapist data
  * Booking logic

### 3. Data Layer

Represents persistent storage.

* `localStorage` – Stores users and sessions
* `db.json` – Demonstrates database structure (for conceptual clarity)

This layered design reflects a real-world architecture including API Gateway, services, and database components as defined in the SRS.

---

## 👥 System Actors

The system models three primary actors:

### 1. Client (User)

* Signs up anonymously
* Logs in using pseudonym and password
* Browses therapists
* Books and pays for sessions
* Views and rates sessions

### 2. Therapist

* Represented through profiles
* Includes specialty, ratings, and availability
* Identity protected using pseudonyms

### 3. Admin (Simulated)

* Therapist verification is implied through system design
* Ensures platform integrity and safety

---

## ⚙️ Functional Requirements Implemented

### 🔐 Anonymous Authentication (FR-1.x)

* Pseudonym-based signup (no email/phone)
* Password-based login
* Recovery code generation
* No personal data collection

### 🧑‍⚕️ Therapist Directory (FR-2.x, FR-3.x)

* View therapist profiles
* Filter by specialty
* Display ratings

### 📅 Session Management (FR-3.x)

* Book sessions (Text, Audio, Video)
* Select date
* View sessions dashboard
* Rate sessions after completion

### 💳 Payment Simulation (FR-4.x)

* Simulated mobile money payment
* Discreet transaction flow
* Session confirmed after payment

### 🚨 Crisis Resources (FR-5.x)

* Emergency contact information
* Accessible without login
* Disclaimer for non-emergency use

---

## 🧪 Non-Functional Requirements

### Performance

* Lightweight single-page application
* Fast load times

### Security (Simulated)

* No personal identifiable information stored
* Local storage used for demonstration

### Usability

* Clean and minimal UI
* Mobile-friendly layout
* Simple navigation

---

## 🚀 How to Run the Project

### Option 1: Local Setup

1. Download or clone the repository
2. Open `index.html` in a browser

### Option 2: Live Deployment

The application is deployed via GitHub Pages:

 https://faith842.github.io/mind-safe/

---

## 🧪 Testing the System

### Test Flow:

1. Create an account
2. Save recovery code
3. Log in
4. Browse therapists
5. Book a session
6. Simulate payment
7. View session under "My Sessions"
8. Rate the session

### Data Persistence:

* Data is stored in the browser using localStorage
* Sessions remain after page refresh

---

## 🔄 System Processes

The application demonstrates the following processes:

1. Anonymous registration and login
2. Therapist discovery and filtering
3. Session booking workflow
4. Payment processing simulation
5. Session tracking and feedback

---

## 📌 Deployment

The system is deployed as a static web application using GitHub Pages.

* No backend server required
* Fully accessible via public URL
* Supports demonstration from any device with a browser

---

## 🔮 Future Enhancements

* Real backend (Node.js or Django)
* End-to-end encrypted messaging
* WebRTC for real-time video/audio sessions
* Integration with M-Pesa API
* Multi-language support
* Admin dashboard for therapist verification
* Notifications and reminders
* AI-based therapist matching

---

## 📚 Development Approach

The project follows an Agile development model:

* Iterative feature development
* Continuous testing and refinement
* Focus on high-priority features first (authentication, booking, payments)

---

## ⚠️ Disclaimer

This is a prototype for demonstration purposes only.

* No real payments are processed
* No real therapist interactions occur
* Security features are simulated and not production-ready

---

## ✨ Conclusion

MindSafe demonstrates a practical, scalable solution to mental health accessibility challenges in East Africa. By prioritizing anonymity, simplicity, and cultural context, the platform creates a safe environment for users to seek support without fear of stigma.

The prototype reflects both the functional and architectural requirements outlined in the SRS and provides a strong foundation for future development.
