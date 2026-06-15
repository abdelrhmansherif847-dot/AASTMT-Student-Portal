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
    <header className="sticky top-0 z-30 w-full bg-white border-b border-portal-border shadow-sm">
      <div className="flex items-center h-16 px-4 lg:px-6 gap-6">
        <div className="flex items-center gap-3 min-w-[230px]">
          <img src="/logo.svg" alt="AASTMT" className="w-11 h-11" />
          <div className="leading-tight">
            <div className="text-[22px] tracking-tight">
              <span className="font-semibold text-gray-800">Student</span>{' '}
              <span className="text-gray-500 italic">Portal</span>
            </div>
          </div>
        </div>

        <button className="hidden md:flex items-center gap-2 text-portal-link hover:text-portal-headerDark">
          <NewsIcon className="w-5 h-5" />
          <span className="text-[15px]">News</span>
        </button>

        <div className="flex-1" />

        <button className="hidden md:flex items-center gap-2 text-gray-600 hover:text-portal-link">
          <GlobeIcon className="w-5 h-5 text-portal-link" />
          <span className="text-[15px]">Change Language</span>
          <ChevronDown className="w-3 h-3" />
        </button>

        <button className="hidden md:flex items-center gap-2 text-gray-700 hover:text-portal-link">
          <FeedbackIcon className="w-5 h-5 text-rose-500" />
          <span className="text-[15px]">FeedBack</span>
        </button>

        <div className="flex items-center gap-2 cursor-pointer group" onClick={handleLogout} title="Click to logout">
          <img
            src={student.avatar}
            alt="avatar"
            className="w-9 h-9 rounded-full ring-2 ring-white object-cover"
          />
          <span className="hidden lg:inline text-[14.5px] text-gray-800 group-hover:text-portal-link max-w-[260px] truncate">
            {student.name}
          </span>
          <ChevronDown className="w-3 h-3 text-gray-600" />
        </div>

        <button className="relative ml-2 text-portal-link hover:text-portal-headerDark">
          <BellIcon className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] leading-none font-bold rounded-full w-4 h-4 flex items-center justify-center">
            5
          </span>
        </button>
      </div>
    </header>
  )
}
