import { useNavigate } from 'react-router-dom'
import { student } from '../data/mockData'
import {
  NewsIcon,
  GlobeIcon,
  FeedbackIcon,
  BellIcon,
  ChevronDown,
} from './icons'

export default function Navbar({ onLogout }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    if (onLogout) onLogout()
    navigate('/login')
  }

  return (
    <header className="sticky top-0 z-30 w-full bg-white">
      <div className="flex items-center h-[60px] px-4 lg:px-6 gap-5">
        {/* Logo + Student Portal text */}
        <div className="flex items-center gap-2.5">
          <img src="/logo.svg" alt="AASTMT" className="w-[42px] h-[42px]" />
          <div className="leading-none">
            <span className="text-[24px] tracking-tight font-bold text-[#1e1e1e]">
              Student
            </span>{' '}
            <span className="text-[24px] tracking-tight text-[#8a8d92] font-light italic-serif">
              Portal
            </span>
          </div>
        </div>

        {/* News */}
        <button
          type="button"
          className="ml-2 hidden md:flex items-center gap-1.5 text-portal-teal hover:opacity-80"
        >
          <NewsIcon className="w-[18px] h-[18px]" />
          <span className="text-[15px]">News</span>
        </button>

        <div className="flex-1" />

        {/* Change Language */}
        <button
          type="button"
          className="hidden md:flex items-center gap-1.5 text-[#5f6368] hover:text-portal-teal"
        >
          <GlobeIcon className="w-[18px] h-[18px] text-portal-teal" />
          <span className="text-[15px]">Change Language</span>
          <ChevronDown className="w-3 h-3" />
        </button>

        {/* Feedback */}
        <button
          type="button"
          className="hidden md:flex items-center gap-1.5 text-[#5f6368] hover:text-portal-teal"
        >
          <FeedbackIcon className="w-[18px] h-[18px] text-[#ef5350]" />
          <span className="text-[15px]">FeedBack</span>
        </button>

        {/* User */}
        <button
          type="button"
          onClick={handleLogout}
          title="Click to logout"
          className="flex items-center gap-2 group"
        >
          <img
            src={student.avatar}
            alt="avatar"
            className="w-[34px] h-[34px] rounded-full object-cover ring-1 ring-gray-200"
          />
          <span className="hidden lg:inline text-[14px] text-[#1e1e1e] group-hover:text-portal-teal max-w-[260px] truncate">
            {student.name}
          </span>
          <ChevronDown className="w-3 h-3 text-[#5f6368]" />
        </button>

        {/* Bell */}
        <button type="button" className="relative ml-1 text-portal-teal hover:opacity-80">
          <BellIcon className="w-[22px] h-[22px]" />
          <span className="absolute -top-1.5 -right-1.5 bg-[#ef5350] text-white text-[10px] leading-none font-bold rounded-full w-[16px] h-[16px] flex items-center justify-center">
            5
          </span>
        </button>
      </div>

      {/* Thin teal progress strip */}
      <div className="navbar-progress" />
    </header>
  )
}
