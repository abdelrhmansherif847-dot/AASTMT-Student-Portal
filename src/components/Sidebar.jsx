import { useLocation } from 'react-router-dom'
import { student, courses, sidebarServices } from '../data/mockData'
import { HomeIcon, ServiceIcon } from './icons'

const campusBg =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 280'><defs><linearGradient id='sky' x1='0' x2='0' y1='0' y2='1'><stop offset='0' stop-color='%2386c5d8'/><stop offset='1' stop-color='%23e0eef3'/></linearGradient><linearGradient id='blg' x1='0' x2='0' y1='0' y2='1'><stop offset='0' stop-color='%23b09a7b'/><stop offset='1' stop-color='%237a6957'/></linearGradient><linearGradient id='palm' x1='0' x2='0' y1='0' y2='1'><stop offset='0' stop-color='%231f7340'/><stop offset='1' stop-color='%23155028'/></linearGradient></defs><rect width='600' height='280' fill='url(%23sky)'/><!-- Arabic top text strip --><text x='300' y='38' fill='%23ffffff' font-family='serif' font-size='16' text-anchor='middle' opacity='0.55'>الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري</text><text x='300' y='62' fill='%23ffffff' font-family='serif' font-size='11' text-anchor='middle' opacity='0.55'>Arab Academy for Science, Technology %26 Maritime Transport</text><!-- Buildings --><rect x='40' y='150' width='160' height='110' fill='url(%23blg)'/><polygon points='40,150 120,110 200,150' fill='%238d7a60'/><rect x='220' y='130' width='200' height='130' fill='%23a08c6f'/><rect x='440' y='160' width='130' height='100' fill='%2398856a'/><!-- Windows --><g fill='%23d9c89e'><rect x='60' y='170' width='12' height='14'/><rect x='80' y='170' width='12' height='14'/><rect x='100' y='170' width='12' height='14'/><rect x='120' y='170' width='12' height='14'/><rect x='140' y='170' width='12' height='14'/><rect x='160' y='170' width='12' height='14'/><rect x='60' y='200' width='12' height='14'/><rect x='80' y='200' width='12' height='14'/><rect x='100' y='200' width='12' height='14'/><rect x='120' y='200' width='12' height='14'/><rect x='140' y='200' width='12' height='14'/><rect x='160' y='200' width='12' height='14'/><rect x='240' y='150' width='14' height='16'/><rect x='265' y='150' width='14' height='16'/><rect x='290' y='150' width='14' height='16'/><rect x='315' y='150' width='14' height='16'/><rect x='340' y='150' width='14' height='16'/><rect x='365' y='150' width='14' height='16'/><rect x='390' y='150' width='14' height='16'/><rect x='240' y='180' width='14' height='16'/><rect x='265' y='180' width='14' height='16'/><rect x='290' y='180' width='14' height='16'/><rect x='315' y='180' width='14' height='16'/><rect x='340' y='180' width='14' height='16'/><rect x='365' y='180' width='14' height='16'/><rect x='390' y='180' width='14' height='16'/><rect x='240' y='210' width='14' height='16'/><rect x='265' y='210' width='14' height='16'/><rect x='290' y='210' width='14' height='16'/><rect x='315' y='210' width='14' height='16'/><rect x='340' y='210' width='14' height='16'/><rect x='365' y='210' width='14' height='16'/><rect x='390' y='210' width='14' height='16'/><rect x='460' y='180' width='12' height='14'/><rect x='480' y='180' width='12' height='14'/><rect x='500' y='180' width='12' height='14'/><rect x='520' y='180' width='12' height='14'/><rect x='540' y='180' width='12' height='14'/></g><!-- Palms --><g fill='url(%23palm)'><ellipse cx='15' cy='260' rx='80' ry='30'/><ellipse cx='585' cy='260' rx='80' ry='30'/></g></svg>\")"

function CourseDot({ passed }) {
  return (
    <span
      className={`inline-block w-[14px] h-[14px] rounded-full border-2 shrink-0 ${
        passed ? 'border-emerald-500' : 'border-gray-400'
      }`}
      aria-hidden
    />
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
    <aside className="w-[290px] shrink-0 bg-white border-r border-portal-borderSoft h-[calc(100vh-63px)] overflow-y-auto portal-scroll shadow-sidebar">
      {/* Profile card with campus banner */}
      <div
        className="relative h-[150px] bg-cover bg-center text-white"
        style={{ backgroundImage: campusBg }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative h-full flex flex-col justify-between p-3">
          <div className="flex items-start gap-2">
            <img
              src={student.avatar}
              alt={student.name}
              className="w-[42px] h-[42px] rounded-full ring-2 ring-white object-cover shrink-0"
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
        {/* Home */}
        <button
          type="button"
          onClick={() => onNavigate?.('/')}
          className={`w-full px-5 py-3 flex items-center gap-3 border-b border-portal-borderSoft ${
            location.pathname === '/'
              ? 'text-[#1e1e1e] font-semibold'
              : 'text-[#3f3f3f] hover:bg-portal-sidebarHover'
          }`}
        >
          <HomeIcon className="w-[18px] h-[18px]" />
          <span className="text-[15px]">Home</span>
        </button>

        {/* Courses */}
        <div className="px-5 pt-4 pb-2">
          <span className="text-portal-teal font-bold text-[15px]">Courses</span>
        </div>
        <ul className="pb-3">
          {courses.map((c) => (
            <li
              key={c.code}
              className="px-5 py-2 flex items-center gap-3 cursor-default"
            >
              <CourseDot passed={c.passed} />
              <span className="text-[14px] text-[#3f3f3f] leading-tight font-medium">
                {c.name}
              </span>
            </li>
          ))}
        </ul>

        <div className="border-t border-portal-borderSoft" />

        {/* Services */}
        <div className="px-5 pt-4 pb-2">
          <span className="text-portal-teal font-bold text-[15px]">Services</span>
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
