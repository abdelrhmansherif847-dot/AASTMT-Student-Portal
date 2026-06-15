import { useNavigate } from 'react-router-dom'
import { dashboardCards } from '../data/mockData'

// Inline SVG illustrations for each card category — kept simple and consistent.
const cardImages = {
  graduation: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <defs>
        <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#aedce8" />
          <stop offset="1" stopColor="#cae9f0" />
        </linearGradient>
      </defs>
      <rect width="200" height="140" fill="url(#sky1)" />
      <path d="M0 110 L200 90 L200 140 L0 140 Z" fill="#5ca4cf" opacity="0.6" />
      <circle cx="100" cy="58" r="9" fill="#f3d9b1" />
      <path d="M90 75 q10 -8 20 0 v45 h-20 z" fill="#222" />
      <path d="M85 75 v45 h-12 z M115 75 v45 h12 z" fill="#222" />
      <rect x="92" y="38" width="16" height="3" fill="#222" />
      <polygon points="84,38 116,38 100,30" fill="#222" />
      <line x1="100" y1="38" x2="106" y2="55" stroke="#e2b22a" strokeWidth="2" />
      <circle cx="106" cy="56" r="2" fill="#e2b22a" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <rect width="200" height="140" fill="#f5f5dc" />
      <g fill="#3b7a3f" fontFamily="Verdana" fontSize="20" fontWeight="bold">
        <text x="20" y="50">12</text>
        <text x="60" y="50">19</text>
        <text x="100" y="50">26</text>
        <text x="20" y="100">13</text>
        <text x="60" y="100">20</text>
        <text x="100" y="100">27</text>
      </g>
      <g stroke="#3b7a3f" strokeWidth="1" fill="none">
        <line x1="0" y1="65" x2="200" y2="65" />
        <line x1="0" y1="115" x2="200" y2="115" />
        <line x1="50" y1="0" x2="50" y2="140" />
        <line x1="90" y1="0" x2="90" y2="140" />
        <line x1="130" y1="0" x2="130" y2="140" />
      </g>
    </svg>
  ),
  transcript: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <rect width="200" height="140" fill="#faf2e3" />
      <g fontFamily="serif" fontSize="6" fill="#3b3b3b" opacity="0.7">
        <text x="20" y="25">Course Credit Grade</text>
        <text x="20" y="40">EBA1103   3   B+</text>
        <text x="20" y="55">EBA1203   3   A-</text>
        <text x="20" y="70">EBA1401   3   C-</text>
        <text x="20" y="85">EIM1101   3   B-</text>
        <text x="20" y="100">EBA1308   3   C+</text>
        <text x="20" y="115">UNR1102   3   B+</text>
      </g>
    </svg>
  ),
  medical: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <rect width="200" height="140" fill="#dfeef6" />
      <circle cx="100" cy="70" r="35" fill="none" stroke="#2c5d8a" strokeWidth="3" />
      <rect x="92" y="35" width="16" height="70" fill="#c9d8e1" />
      <rect x="65" y="62" width="70" height="16" fill="#c9d8e1" />
      <circle cx="140" cy="100" r="12" fill="#2c5d8a" />
    </svg>
  ),
  moodle: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <rect width="200" height="140" fill="#fff" />
      <g fontFamily="Arial" fontSize="34" fontWeight="bold">
        <text x="20" y="80" fill="#f88f1a">m</text>
        <text x="50" y="80" fill="#f88f1a">o</text>
        <text x="78" y="80" fill="#f88f1a">o</text>
        <text x="106" y="80" fill="#f88f1a">d</text>
        <text x="134" y="80" fill="#f88f1a">l</text>
        <text x="150" y="80" fill="#f88f1a">e</text>
      </g>
      <circle cx="172" cy="50" r="14" fill="#f88f1a" opacity="0.7" />
    </svg>
  ),
  books: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <rect width="200" height="140" fill="#f2eadb" />
      <rect x="20" y="40" width="160" height="20" fill="#b66639" />
      <rect x="20" y="65" width="160" height="20" fill="#3b7a8b" />
      <rect x="20" y="90" width="160" height="20" fill="#7a5a3a" />
    </svg>
  ),
  note: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <rect width="200" height="140" fill="#e6e6e6" />
      <rect x="40" y="20" width="120" height="100" fill="#fff" stroke="#bbb" />
      <g stroke="#999" strokeWidth="1">
        <line x1="55" y1="50" x2="145" y2="50" />
        <line x1="55" y1="65" x2="145" y2="65" />
        <line x1="55" y1="80" x2="145" y2="80" />
        <line x1="55" y1="95" x2="120" y2="95" />
      </g>
    </svg>
  ),
  support: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <rect width="200" height="140" fill="#e8d8c3" />
      <rect x="40" y="30" width="120" height="60" rx="4" fill="#fff" stroke="#b07a4a" strokeWidth="2" />
      <text x="100" y="60" textAnchor="middle" fill="#b07a4a" fontFamily="Arial" fontSize="18" fontWeight="bold">Support</text>
      <text x="100" y="80" textAnchor="middle" fill="#b07a4a" fontFamily="Arial" fontSize="10">we are here</text>
    </svg>
  ),
  tuition: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <rect width="200" height="140" fill="#2196f3" />
      <text x="100" y="65" textAnchor="middle" fill="#fff" fontFamily="Arial Black" fontSize="22" fontWeight="900">TUITION</text>
      <text x="100" y="95" textAnchor="middle" fill="#fff" fontFamily="Arial Black" fontSize="22" fontWeight="900">&amp; FEES</text>
    </svg>
  ),
  card: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <rect width="200" height="140" fill="#dde4e8" />
      <rect x="35" y="40" width="130" height="80" rx="6" fill="#2596be" />
      <rect x="45" y="55" width="30" height="22" rx="2" fill="#f5d27b" />
      <line x1="45" y1="95" x2="155" y2="95" stroke="#fff" strokeWidth="2" />
      <line x1="45" y1="105" x2="120" y2="105" stroke="#fff" strokeWidth="2" />
    </svg>
  ),
  sticky: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <rect width="200" height="140" fill="#fde74c" />
      <rect x="15" y="15" width="60" height="60" fill="#ff6b6b" transform="rotate(-6 45 45)" />
      <rect x="100" y="20" width="60" height="60" fill="#5cdb95" transform="rotate(4 130 50)" />
      <rect x="40" y="80" width="60" height="50" fill="#4f86c6" transform="rotate(-3 70 105)" />
      <rect x="120" y="80" width="60" height="50" fill="#f48fb1" transform="rotate(6 150 105)" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <rect width="200" height="140" fill="#dcd6c8" />
      <rect x="40" y="30" width="120" height="80" rx="2" fill="#3b3b3b" />
      <rect x="44" y="34" width="112" height="72" rx="1" fill="#fff" />
      <line x1="100" y1="34" x2="100" y2="106" stroke="#3b3b3b" strokeWidth="1" />
    </svg>
  ),
  access: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <rect width="200" height="140" fill="#f4f4f4" />
      <text x="20" y="50" fill="#f5a623" fontFamily="Arial" fontSize="20" fontWeight="bold">Open</text>
      <text x="20" y="80" fill="#f5a623" fontFamily="Arial" fontSize="20" fontWeight="bold">Access</text>
      <circle cx="160" cy="70" r="20" fill="none" stroke="#f5a623" strokeWidth="3" />
      <rect x="155" y="70" width="10" height="14" fill="#f5a623" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <rect width="200" height="140" fill="#fff" />
      <rect x="40" y="40" width="120" height="60" fill="#e7eaee" stroke="#9aa0a6" />
      <polyline points="40,40 100,80 160,40" fill="none" stroke="#9aa0a6" strokeWidth="2" />
      <text x="100" y="125" textAnchor="middle" fill="#5f6368" fontFamily="Arial" fontSize="12">Activate your mail</text>
    </svg>
  ),
  update: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <rect width="200" height="140" fill="#f0e6da" />
      <rect x="40" y="25" width="120" height="90" fill="#fff" stroke="#bbb" />
      <g stroke="#aaa" strokeWidth="1">
        <line x1="55" y1="45" x2="145" y2="45" />
        <line x1="55" y1="60" x2="145" y2="60" />
        <line x1="55" y1="75" x2="120" y2="75" />
        <line x1="55" y1="90" x2="145" y2="90" />
      </g>
    </svg>
  ),
  bank: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <rect width="200" height="140" fill="#f0f4f7" />
      <rect x="40" y="40" width="120" height="60" rx="4" fill="#0078b8" />
      <text x="100" y="70" textAnchor="middle" fill="#fff" fontFamily="Arial" fontSize="16" fontWeight="bold">BANK</text>
      <text x="100" y="90" textAnchor="middle" fill="#fff" fontFamily="Arial" fontSize="10">Student Account</text>
    </svg>
  ),
  qnb: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <rect width="200" height="140" fill="#fff" />
      <text x="100" y="65" textAnchor="middle" fill="#7a1f25" fontFamily="Arial Black" fontSize="28" fontWeight="900">QNB</text>
      <text x="100" y="95" textAnchor="middle" fill="#7a1f25" fontFamily="Arial" fontSize="14">ALAHLI</text>
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <rect width="200" height="140" fill="#fff" />
      <g fill="#f5a623">
        <rect x="30" y="80" width="20" height="40" />
        <rect x="65" y="60" width="20" height="60" />
        <rect x="100" y="40" width="20" height="80" />
        <rect x="135" y="25" width="20" height="95" />
      </g>
      <polyline points="30,80 65,60 100,40 135,25 170,15" fill="none" stroke="#0095c8" strokeWidth="2" />
    </svg>
  ),
  road: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <rect width="200" height="140" fill="#5a5550" />
      <polygon points="80,140 120,140 140,30 60,30" fill="#3b3633" />
      <g fill="#fff">
        <rect x="98" y="45" width="4" height="15" />
        <rect x="98" y="70" width="4" height="15" />
        <rect x="98" y="95" width="4" height="15" />
        <rect x="98" y="120" width="4" height="15" />
      </g>
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <rect width="200" height="140" fill="#0a2c4a" />
      <rect x="80" y="60" width="40" height="40" rx="4" fill="#f5a623" />
      <path d="M85 60 v-12 a15 15 0 0 1 30 0 v12" fill="none" stroke="#f5a623" strokeWidth="4" />
    </svg>
  ),
  vote: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <rect width="200" height="140" fill="#e3eef3" />
      <rect x="55" y="40" width="90" height="60" fill="#fff" stroke="#0a8bb2" strokeWidth="2" />
      <polyline points="70,75 90,90 130,55" fill="none" stroke="#0a8bb2" strokeWidth="3" />
    </svg>
  ),
  supplies: (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <rect width="200" height="140" fill="#f0d8a0" />
      <rect x="35" y="55" width="14" height="60" fill="#d4574e" />
      <rect x="55" y="40" width="14" height="75" fill="#5fbf8f" />
      <rect x="75" y="50" width="14" height="65" fill="#f5d27b" />
      <rect x="95" y="35" width="14" height="80" fill="#7c9cd1" />
      <rect x="115" y="48" width="14" height="67" fill="#c177d4" />
      <rect x="135" y="42" width="14" height="73" fill="#f5a76d" />
    </svg>
  ),
}

function DashboardCard({ card, onClick }) {
  const img = cardImages[card.image] || cardImages.note
  return (
    <button
      type="button"
      onClick={onClick}
      className="group bg-white rounded shadow-card overflow-hidden border border-portal-borderLight hover:shadow-cardHover transition-shadow text-left"
    >
      <div className="aspect-[5/3] bg-portal-borderLight overflow-hidden">
        {img}
      </div>
      <div className="px-3 py-3 border-t border-portal-borderLight">
        <span
          className="text-[14px] font-semibold text-[#1e1e1e] group-hover:text-portal-primary"
          dir={card.rtl ? 'rtl' : 'ltr'}
        >
          {card.label}
        </span>
      </div>
    </button>
  )
}

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className="px-6 lg:px-8 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {dashboardCards.map((card) => (
          <DashboardCard
            key={card.id}
            card={card}
            onClick={() => navigate(card.path || `/coming-soon/${card.id}`)}
          />
        ))}
      </div>
    </div>
  )
}
