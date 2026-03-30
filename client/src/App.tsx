import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const therapists = [
    { name: "Dr. Aline", specialty: "Anxiety", rating: 4.8, available: true },
    { name: "Dr. Kevin", specialty: "Depression", rating: 4.5, available: false },
    { name: "Dr. Grace", specialty: "Relationships", rating: 4.9, available: true }
  ]

  return (
    <div style={{
      fontFamily: "Arial",
      padding: "40px",
      backgroundColor: "#f4f6fb",
      minHeight: "100vh"
    }}>
      <h1 style={{ color: "#5B6DFF" }}>MindSafe</h1>
      <p>Select a therapist to begin an anonymous session.</p>

      <div style={{ marginTop: "30px" }}>
        {therapists.map((t, index) => (
          <div key={index} style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "15px",
            width: "350px",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.05)"
          }}>
            <h3>{t.name}</h3>
            <p>Specialty: {t.specialty}</p>
            <p>Rating: ⭐ {t.rating}</p>
            <p>
              Status: {t.available ? "🟢 Available" : "🔴 Busy"}
            </p>

            <button disabled={!t.available}>
              Start Session
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
