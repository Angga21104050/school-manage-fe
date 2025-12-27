import './App.css'
import { useState } from 'react'
import Login from './pages/login.jsx'
import SiswaPerKelas from './pages/SiswaPerKelas.jsx'
import GuruPerKelas from './pages/GuruPerKelas.jsx'
import FullReport from './pages/FullReport.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'))

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />
  }

  return (
    <>
      <h1>School Management Dashboard</h1>

      <SiswaPerKelas />
      <GuruPerKelas />
      <FullReport />

      <button style={{ marginTop: '20px' }}
        onClick={() => {
          localStorage.removeItem('isLogin')
          setIsLoggedIn(false)
        }}
      >
        Logout
      </button>
    </>
  )
}

export default App
