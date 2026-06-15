import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { student, notifications } from '../data/mockData'
import {
  NewsIcon,
  GlobeIcon,
  FeedbackIcon,
  BellIcon,
  ChevronDown,
} from './icons'

function NotificationPanel({ onClose }) {
  return (
    <div className="absolute right-0 top-10 w-[340px] bg-white rounded shadow-panel border border-portal-borderLight z-40 overflow-hidden">
      <div className="px-4 py-3 border-b border-portal-borderLight bg-portal-pageBg">
        <span className="font-semibold text-[14px] text-portal-textMain">
          Notifications
        </span>
      </div>
      <ul className="max-h-[360px] overflow-y-auto portal-scroll">
        {notifications.map((n) => (
          <li key={n.id} className="px-4 py-3 border-b border-portal-borderLight hover:bg-portal-pageBg cursor-pointer">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-portal-notifBadge/20 flex items-center justify-center shrink-0 mt-0.5">
                <BellIcon className="w-4 h-4 text-portal-notifBadge" />
              </div>
              <div className="leading-snug">
                <div className="text-[13.5px] font-semibold text-portal-textMain">
                  {n.title}
                </div>
                <div className="text-[12.5px] text-portal-textMuted mt-0.5">
                  {n.body}
                </div>
                <div className="text-[11.5px] text-portal-textLight mt-1">
                  {n.time}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={onClose}
        className="w-full px-4 py-2.5 text-[12.5px] text-portal-primary hover:bg-portal-pageBg border-t border-portal-borderLight"
      >
        Close
      </button>
    </div>
  )
}

export default function Navbar({ onLogout }) {
  const navigate = useNavigate()
  const [notifOpen, setNotifOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const notifRef = useRef(null)
  const userRef = useRef(null)

  useEffect(() => {
    const onDocClick = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false)
      }
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  const handleLogout = () => {
    setUserMenuOpen(false)
    if (onLogout) onLogout()
    navigate('/login')
  }

  return (
    <header className="sticky top-0 z-30 w-full bg-white">
      <div className="flex items-center h-[60px] px-4 lg:px-6 gap-5">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="flex items-center gap-2.5"
          title="Home"
        >
          <img src="/logo.svg" alt="AASTMT" className="w-[42px] h-[42px]" />
          <div className="leading-none">
            <span className="text-[24px] tracking-tight font-bold text-[#1e1e1e]">
              Student
            </span>{' '}
            <span className="text-[24px] tracking-tight text-[#8a8d92] font-light italic-serif">
              Portal
            </span>
          </div>
        </button>

        <button
          type="button"
          className="ml-2 hidden md:flex items-center gap-1.5 text-portal-primary hover:opacity-80"
        >
          <NewsIcon className="w-[18px] h-[18px]" />
          <span className="text-[15px]">News</span>
        </button>

        <div className="flex-1" />

        <button
          type="button"
          className="hidden md:flex items-center gap-1.5 text-[#5f6368] hover:text-portal-primary"
        >
          <GlobeIcon className="w-[18px] h-[18px] text-portal-primary" />
          <span className="text-[15px]">Change Language</span>
          <ChevronDown className="w-3 h-3" />
        </button>

        <button
          type="button"
          className="hidden md:flex items-center gap-1.5 text-[#5f6368] hover:text-portal-primary"
        >
          <FeedbackIcon className="w-[18px] h-[18px] text-[#ef5350]" />
          <span className="text-[15px]">FeedBack</span>
        </button>

        {/* User dropdown */}
        <div className="relative" ref={userRef}>
          <button
            type="button"
            onClick={() => setUserMenuOpen((v) => !v)}
            className="flex items-center gap-2 group"
          >
            <img
              src={student.avatar}
              alt="avatar"
              className="w-[34px] h-[34px] rounded-full object-cover ring-1 ring-gray-200"
            />
            <span className="hidden lg:inline text-[14px] text-[#1e1e1e] group-hover:text-portal-primary max-w-[260px] truncate">
              {student.name}
            </span>
            <ChevronDown className="w-3 h-3 text-[#5f6368]" />
          </button>
          {userMenuOpen && (
            <div className="absolute right-0 top-12 w-[200px] bg-white rounded shadow-panel border border-portal-borderLight z-40 overflow-hidden">
              <div className="px-4 py-3 border-b border-portal-borderLight">
                <div className="text-[13px] font-semibold truncate">
                  {student.name.split(' ').slice(0, 3).join(' ')}
                </div>
                <div className="text-[12px] text-portal-textMuted">
                  {student.registrationNumber}
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2.5 text-[13px] text-portal-textMain hover:bg-portal-pageBg"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Bell */}
        <div className="relative" ref={notifRef}>
          <button
            type="button"
            onClick={() => setNotifOpen((v) => !v)}
            className="relative ml-1 text-portal-primary hover:opacity-80"
          >
            <BellIcon className="w-[22px] h-[22px]" />
            <span className="absolute -top-1.5 -right-1.5 bg-portal-notifBadge text-white text-[10px] leading-none font-bold rounded-full w-[16px] h-[16px] flex items-center justify-center">
              {notifications.length}
            </span>
          </button>
          {notifOpen && <NotificationPanel onClose={() => setNotifOpen(false)} />}
        </div>
      </div>

      <div className="navbar-progress" />
    </header>
  )
}
