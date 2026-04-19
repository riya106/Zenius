# 🚀 Zenius - Your All-in-One Learning Platform

Zenius is a full-stack platform that helps students and professionals discover internships, hackathons, tech summits, and master Data Structures & Algorithms.

## 🌐 Live Demo

| Service | URL | Status |
|---------|-----|--------|
| **Frontend** | [https://zenius2.vercel.app](https://zenius2.vercel.app) | ✅ Live |
| **Backend API** | [https://zenius-backend.onrender.com](https://zenius-backend.onrender.com) | ✅ Live |

## ✨ Features

### 🔐 Authentication
- Email/Password signup & login
- Google OAuth integration
- Secure Firebase authentication

### 💼 Internships
- Browse curated internship opportunities
- Search by title or company
- Filter by category (Web Dev, AI/ML, Data Science, Cybersecurity)
- Direct application links

### 🎯 Hackathons
- Discover online, offline & hybrid hackathons
- Filter by mode
- View prizes and team size requirements
- Direct registration links

### 🏆 Summits & Conferences
- Find global tech summits
- Filter by category (Technology, Marketing, Design, Business)
- Location and date information
- Easy registration

### 📚 DSA Resources
- Structured learning roadmap
- Complete syllabus
- Practice sheets (Striver, LeetCode, NeetCode)
- Curated LeetCode questions

### 🎨 UI/UX
- Beautiful glass morphism design
- Dark/Light mode toggle
- Fully responsive
- Smooth animations

## 🛠️ Tech Stack

**Frontend:**
- React 18 with Vite
- Tailwind CSS
- Firebase Authentication
- Axios for API calls

**Backend:**
- Node.js with Express
- MongoDB with Mongoose
- CORS enabled

**Deployment:**
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## 📁 Project Structure
# 🚀 Zenius - Your All-in-One Learning Platform

Zenius is a full-stack platform that helps students and professionals discover internships, hackathons, tech summits, and master Data Structures & Algorithms.

## 🌐 Live Demo

| Service | URL | Status |
|---------|-----|--------|
| **Frontend** | [https://zenius2.vercel.app](https://zenius2.vercel.app) | ✅ Live |
| **Backend API** | [https://zenius-backend.onrender.com](https://zenius-backend.onrender.com) | ✅ Live |

## ✨ Features

### 🔐 Authentication
- Email/Password signup & login
- Google OAuth integration
- Secure Firebase authentication

### 💼 Internships
- Browse curated internship opportunities
- Search by title or company
- Filter by category (Web Dev, AI/ML, Data Science, Cybersecurity)
- Direct application links

### 🎯 Hackathons
- Discover online, offline & hybrid hackathons
- Filter by mode
- View prizes and team size requirements
- Direct registration links

### 🏆 Summits & Conferences
- Find global tech summits
- Filter by category (Technology, Marketing, Design, Business)
- Location and date information
- Easy registration

### 📚 DSA Resources
- Structured learning roadmap
- Complete syllabus
- Practice sheets (Striver, LeetCode, NeetCode)
- Curated LeetCode questions

### 🎨 UI/UX
- Beautiful glass morphism design
- Dark/Light mode toggle
- Fully responsive
- Smooth animations

## 🛠️ Tech Stack

**Frontend:**
- React 18 with Vite
- Tailwind CSS
- Firebase Authentication
- Axios for API calls

**Backend:**
- Node.js with Express
- MongoDB with Mongoose
- CORS enabled

**Deployment:**
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## 📁 Project Structure
# 🚀 Zenius - Your All-in-One Learning Platform

Zenius is a full-stack platform that helps students and professionals discover internships, hackathons, tech summits, and master Data Structures & Algorithms.

## 🌐 Live Demo

| Service | URL | Status |
|---------|-----|--------|
| **Frontend** | [https://zenius2.vercel.app](https://zenius2.vercel.app) | ✅ Live |
| **Backend API** | [https://zenius-backend.onrender.com](https://zenius-backend.onrender.com) | ✅ Live |

## ✨ Features

### 🔐 Authentication
- Email/Password signup & login
- Google OAuth integration
- Secure Firebase authentication

### 💼 Internships
- Browse curated internship opportunities
- Search by title or company
- Filter by category (Web Dev, AI/ML, Data Science, Cybersecurity)
- Direct application links

### 🎯 Hackathons
- Discover online, offline & hybrid hackathons
- Filter by mode
- View prizes and team size requirements
- Direct registration links

### 🏆 Summits & Conferences
- Find global tech summits
- Filter by category (Technology, Marketing, Design, Business)
- Location and date information
- Easy registration

### 📚 DSA Resources
- Structured learning roadmap
- Complete syllabus
- Practice sheets (Striver, LeetCode, NeetCode)
- Curated LeetCode questions

### 🎨 UI/UX
- Beautiful glass morphism design
- Dark/Light mode toggle
- Fully responsive
- Smooth animations

## 🛠️ Tech Stack

**Frontend:**
- React 18 with Vite
- Tailwind CSS
- Firebase Authentication
- Axios for API calls

**Backend:**
- Node.js with Express
- MongoDB with Mongoose
- CORS enabled

**Deployment:**
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## 📁 Project Structure
Zenius/
├── backend/
│ ├── models/
│ │ ├── Summit.js
│ │ ├── Internship.js
│ │ ├── Hackathon.js
│ │ └── DSA models
│ ├── routes/
│ │ ├── summitRoutes.js
│ │ ├── internshipRoutes.js
│ │ ├── hackathonRoutes.js
│ │ └── dsaRoutes.js
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── Components/
│ │ │ ├── Dashboard.jsx
│ │ │ ├── Front.jsx
│ │ │ ├── Login.jsx
│ │ │ ├── InternshipPage.jsx
│ │ │ ├── HackathonPage.jsx
│ │ │ ├── Summits.jsx
│ │ │ └── Dsa.jsx
│ │ ├── config/
│ │ │ └── api.js
│ │ └── firebase.js
│ └── package.json
└── README.md

text

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account
- Firebase project

### Installation


# Clone the repository
git clone https://github.com/riya106/Zenius.git
cd Zenius

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Set up environment variables
# Backend: Create backend/.env
# Frontend: Create frontend/.env
Environment Variables

Backend (.env)

env
MONGO_URL=your_mongodb_connection_string
PORT=5001
Frontend (.env)

env
VITE_API_URL=http://localhost:5001
Run Locally

bash
# Terminal 1 - Start Backend
cd backend
npm run dev

# Terminal 2 - Start Frontend
cd frontend
npm run dev
Open http://localhost:5173

📊 API Endpoints

Endpoint	Method	Description
/api/summits	GET	Get all summits
/api/internships	GET	Get all internships
/api/hackathons	GET	Get all hackathons
/api/dsa/roadmap	GET	Get DSA roadmap
/api/dsa/syllabus	GET	Get DSA syllabus
/api/dsa/practiceSheets	GET	Get practice sheets
🎯 Features in Detail

Dark Mode

Toggle between light and dark themes
Persists across sessions
Smooth transitions
Search & Filter

Real-time search
Category-based filtering
Responsive design
Authentication

Email/Password login
Google Sign-in
Protected routes
Persistent sessions
📈 Future Enhancements

Save favorite internships
Application tracking
Email notifications
User profiles
Admin dashboard
Resume builder
Interview preparation materials
🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
📄 License

This project is open source and available under the MIT License.

👩‍💻 Author

Riya Tyagi

GitHub: @riya106
Project Link: https://github.com/riya106/Zenius
🙏 Acknowledgments

Unsplash for images
Firebase for authentication
Vercel & Render for hosting
MongoDB Atlas for database


