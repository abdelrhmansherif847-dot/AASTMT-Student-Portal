import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function DashboardLayout({ children, onLogout }) {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-portal-pageBg flex flex-col">
      <Navbar onLogout={onLogout} />
      <div className="flex flex-1 min-h-0">
        <Sidebar onNavigate={(path) => navigate(path)} />
        <main className="flex-1 overflow-y-auto h-[calc(100vh-64px)]">{children}</main>
      </div>
    </div>
  )
}
