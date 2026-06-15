import { useLocation, useParams } from 'react-router-dom'
import { student, sidebarServices } from '../data/mockData'
import { useSemester } from '../context/SemesterContext'
import { HomeIcon, ServiceIcon } from './icons'

const campusBg = "url('/sidebar-banner.jpg')"

const dotClassByColor = {
  green: 'border-[#7cc24d] bg-transparent',
  yellow: 'border-[#f2a100] bg-transparent',
  red: 'border-[#e53935] bg-transparent',
  gray: 'border-gray-400 bg-transparent',
}

function CourseDot({ color }) {
  return (
    <span
      className={`inline-block w-[14px] h-[14px] rounded-full border-[2.5px] shrink-0 ${
        dotClassByColor[color] || dotClassByColor.gray
      }`}
      aria-hidden
    />
  )
}

export default function Sidebar({ onNavigate }) {
  const location = useLocation()
  const { code: activeCourseCode } = useParams()
  const { courses } = useSemester()

  const handleServiceClick = (id) => {
    if (id === 'student-results') {
      onNavigate?.('/results')
    } else {
      onNavigate?.(`/coming-soon/${id}`)
    }
  }

  return (
    <aside className="w-[290px] shrink-0 bg-white border-r border-portal-borderLight h-[calc(100vh-63px)] overflow-y-auto portal-scroll shadow-sidebar">
      <div
        className="relative h-[170px] bg-cover bg-center text-white"
        style={{ backgroundImage: campusBg }}
      >
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative h-full flex flex-col justify-end p-3">
          <div className="flex items-end gap-2 mb-1">
            <img
              src={student.avatar}
              alt={student.name}
              className="w-[44px] h-[44px] rounded-full ring-2 ring-white object-cover shrink-0"
            />
          </div>
          <div className="leading-tight pl-1">
            <div className="font-bold text-[15px] drop-shadow leading-tight">
              {student.name.split(' ').slice(0, 4).join(' ')}
              <br />
              {student.name.split(' ').slice(4).join(' ')}
            </div>
            <div className="text-[13px] text-white/85 mt-1">
              {student.registrationNumber}
            </div>
          </div>
        </div>
      </div>

      <nav className="pt-1 pb-6">
        <button
          type="button"
          onClick={() => onNavigate?.('/')}
          className={`w-full px-5 py-3 flex items-center gap-3 border-b border-portal-borderLight ${
            location.pathname === '/'
              ? 'text-[#1e1e1e] font-semibold'
              : 'text-[#3f3f3f] hover:bg-portal-sidebarHover'
          }`}
        >
          <HomeIcon className="w-[18px] h-[18px]" />
          <span className="text-[15px]">Home</span>
        </button>

        <div className="px-5 pt-4 pb-2">
          <span className="text-portal-tabSelected font-bold text-[15px]">Courses</span>
        </div>
        <ul className="pb-3">
          {courses.map((c) => {
            const active = activeCourseCode === c.code
            return (
              <li key={c.code}>
                <button
                  type="button"
                  onClick={() => onNavigate?.(`/courses/${c.code}`)}
                  className={`w-full px-5 py-2 flex items-center gap-3 text-left transition-colors ${
                    active
                      ? 'bg-portal-sidebarActive text-[#1e1e1e] font-semibold'
                      : 'text-[#3f3f3f] hover:bg-portal-sidebarHover'
                  }`}
                >
                  <CourseDot color={c.color} />
                  <span className="text-[14px] leading-tight">{c.name}</span>
                </button>
              </li>
            )
          })}
        </ul>

        <div className="border-t border-portal-borderLight" />

        <div className="px-5 pt-4 pb-2">
          <span className="text-portal-tabSelected font-bold text-[15px]">Services</span>
        </div>
        <ul>
          {sidebarServices.map((s) => {
            const active =
              s.id === 'student-results' && location.pathname === '/results'
            return (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => handleServiceClick(s.id)}
                  className={`w-full px-5 py-2.5 flex items-center gap-3 text-left transition-colors ${
                    active
                      ? 'bg-portal-sidebarActive text-[#1e1e1e] font-semibold'
                      : 'text-[#3f3f3f] hover:bg-portal-sidebarHover'
                  }`}
                >
                  {s.icon && (
                    <ServiceIcon
                      name={s.icon}
                      className="w-[16px] h-[16px] text-[#3f3f3f] shrink-0"
                    />
                  )}
                  <span
                    className={`text-[14px] leading-tight ${
                      !s.icon ? 'pl-[26px]' : ''
                    } ${s.rtl ? 'text-right w-full' : ''}`}
                    dir={s.rtl ? 'rtl' : 'ltr'}
                  >
                    {s.label}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
