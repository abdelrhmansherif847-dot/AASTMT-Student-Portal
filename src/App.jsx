import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import DashboardLayout from './components/DashboardLayout'
import Login from './pages/Login'
import StudentResults from './pages/StudentResults'
import Home from './pages/Home'
import ComingSoon from './components/ComingSoon'
import { SemesterProvider } from './context/SemesterContext'

const AUTH_KEY = 'aastmt_portal_authed'

function ProtectedRoute({ authed, children }) {
  const location = useLocation()
  if (!authed) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }
  return children
}

export default function App() {
  const [authed, setAuthed] = useState(() => {
    try {
      return sessionStorage.getItem(AUTH_KEY) === '1'
    } catch {
      return false
    }
  })

  useEffect(() => {
    try {
      if (authed) sessionStorage.setItem(AUTH_KEY, '1')
      else sessionStorage.removeItem(AUTH_KEY)
    } catch {
      /* ignore storage errors */
    }
  }, [authed])

  const handleLogin = () => setAuthed(true)
  const handleLogout = () => setAuthed(false)

  return (
    <SemesterProvider>
    <Routes>
      <Route
        path="/login"
        element={
          authed ? <Navigate to="/results" replace /> : <Login onLogin={handleLogin} />
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute authed={authed}>
            <DashboardLayout onLogout={handleLogout}>
              <Home />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/results"
        element={
          <ProtectedRoute authed={authed}>
            <DashboardLayout onLogout={handleLogout}>
              <StudentResults />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/coming-soon/:id"
        element={
          <ProtectedRoute authed={authed}>
            <DashboardLayout onLogout={handleLogout}>
              <ComingSoon />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to={authed ? '/results' : '/login'} replace />} />
    </Routes>
    </SemesterProvider>
  )
}
