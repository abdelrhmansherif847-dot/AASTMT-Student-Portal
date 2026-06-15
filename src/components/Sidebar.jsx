import { NavLink, useLocation } from 'react-router-dom'
import { student, courses, sidebarServices } from '../data/mockData'
import { HomeIcon, ServiceIcon } from './icons'

const campusBg =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><defs><linearGradient id='sky' x1='0' x2='0' y1='0' y2='1'><stop offset='0' stop-color='%2386c5d8'/><stop offset='1' stop-color='%23c9e4ec'/></linearGradient><linearGradient id='bld' x1='0' x2='0' y1='0' y2='1'><stop offset='0' stop-color='%23a89376'/><stop offset='1' stop-color='%237a6957'/></linearGradient></defs><rect width='400' height='200' fill='url(%23sky)'/><rect x='20' y='110' width='110' height='70' fill='url(%23bld)'/><rect x='150' y='90' width='140' height='90' fill='%23806b51'/><rect x='305' y='115' width='80' height='65' fill='%23998166'/><rect x='160' y='110' width='8' height='20' fill='%23d8c79e'/><rect x='180' y='110' width='8' height='20' fill='%23d8c79e'/><rect x='200' y='110' width='8' height='20' fill='%23d8c79e'/><rect x='220' y='110' width='8' height='20' fill='%23d8c79e'/><rect x='240' y='110' width='8' height='20' fill='%23d8c79e'/><rect x='260' y='110' width='8' height='20' fill='%23d8c79e'/><rect x='160' y='140' width='8' height='20' fill='%23d8c79e'/><rect x='180' y='140' width='8' height='20' fill='%23d8c79e'/><rect x='200' y='140' width='8' height='20' fill='%23d8c79e'/><rect x='220' y='140' width='8' height='20' fill='%23d8c79e'/><rect x='240' y='140' width='8' height='20' fill='%23d8c79e'/><rect x='260' y='140' width='8' height='20' fill='%23d8c79e'/><polygon points='30,110 70,80 110,110' fill='%236e5f4d'/><text x='200' y='40' fill='%23ffffff' font-family='serif' font-size='14' text-anchor='middle' opacity='0.85'>الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري</text><text x='200' y='65' fill='%23ffffff' font-family='serif' font-size='10' text-anchor='middle' opacity='0.85'>Arab Academy for Science, Technology %26 Maritime Transport</text></svg>\")"

function CourseItem({ course }) {
  return (
    <li className="px-5 py-2 flex items-center gap-3 hover:bg-portal-sidebarHover cursor-not-allowed">
      <span
        className={`inline-block w-3.5 h-3.5 rounded-full border-2 ${
          course.passed ? 'border-green-500' : 'border-gray-400'
        }`}
        aria-hidden
      />
      <span className="text-[14px] text-gray-700 leading-tight">{course.name}</span>
    </li>
  )
}

function ServiceItem({ item, active, onClick }) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className={`w-full px-5 py-2.5 flex items-center gap-3 text-left transition-colors ${
          active
            ? 'bg-portal-sidebarActive border-l-4 border-portal-link text-gray-900 font-medium'
            : 'border-l-4 border-transparent text-gray-700 hover:bg-portal-sidebarHover'
        }`}
      >
        {item.icon && (
          <ServiceIcon name={item.icon} className="w-4 h-4 text-gray-700 shrink-0" />
        )}
        <span
          className={`text-[14px] leading-tight ${item.rtl ? 'text-right w-full' : ''}`}
          dir={item.rtl ? 'rtl' : 'ltr'}
        >
          {item.label}
        </span>
      </button>
    </li>
  )
}

export default function Sidebar({ onNavigate }) {
  const location = useLocation()

  const handleServiceClick = (id) => {
    if (id === 'student-results') {
      onNavigate?.('/results')
    } else {
      onNavigate?.(`/coming-soon/${id}`)
    }
  }

  return (
    <aside className="w-[300px] shrink-0 bg-white border-r border-portal-border h-[calc(100vh-64px)] overflow-y-auto portal-scroll">
      <div
        className="relative h-[150px] bg-cover bg-center text-white"
        style={{ backgroundImage: campusBg }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full flex flex-col justify-end p-4">
          <div className="flex items-end gap-3">
            <img
              src={student.avatar}
              alt={student.name}
              className="w-14 h-14 rounded-full ring-2 ring-white object-cover"
            />
          </div>
          <div className="mt-3 leading-tight">
            <div className="font-semibold text-[15px] drop-shadow">{student.name}</div>
            <div className="text-[13px] text-white/90 mt-1">{student.registrationNumber}</div>
          </div>
        </div>
      </div>

      <nav className="py-2">
        <button
          type="button"
          onClick={() => onNavigate?.('/')}
          className={`w-full px-5 py-3 flex items-center gap-3 border-b border-portal-border ${
            location.pathname === '/'
              ? 'text-portal-link font-semibold'
              : 'text-gray-700 hover:bg-portal-sidebarHover'
          }`}
        >
          <HomeIcon className="w-5 h-5" />
          <span className="text-[15px]">Home</span>
        </button>

        <div className="px-5 pt-4 pb-2 text-portal-link font-semibold text-[15px]">
          Courses
        </div>
        <ul className="pb-2">
          {courses.map((c) => (
            <CourseItem key={c.code} course={c} />
          ))}
        </ul>

        <div className="border-t border-portal-border mt-2" />

        <div className="px-5 pt-4 pb-2 text-portal-link font-semibold text-[15px]">
          Services
        </div>
        <ul className="pb-6">
          {sidebarServices.map((s) => (
            <ServiceItem
              key={s.id}
              item={s}
              active={
                s.id === 'student-results' && location.pathname === '/results'
              }
              onClick={() => handleServiceClick(s.id)}
            />
          ))}
        </ul>
      </nav>
    </aside>
  )
}
