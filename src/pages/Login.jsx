import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { credentials } from '../data/mockData'

const campusHeroBg =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000'><defs><linearGradient id='sky' x1='0' x2='0' y1='0' y2='1'><stop offset='0' stop-color='%2386c5d8'/><stop offset='0.6' stop-color='%23cae6f0'/><stop offset='1' stop-color='%23dceae6'/></linearGradient><linearGradient id='ground' x1='0' x2='0' y1='0' y2='1'><stop offset='0' stop-color='%2398a672'/><stop offset='1' stop-color='%23687c4f'/></linearGradient></defs><rect width='800' height='1000' fill='url(%23sky)'/><rect y='600' width='800' height='400' fill='url(%23ground)'/><polygon points='0,580 800,580 800,640 0,640' fill='%23dde2c0' opacity='0.6'/><rect x='80' y='350' width='250' height='250' fill='%23b09a7b'/><rect x='340' y='320' width='160' height='280' fill='%23a08c6f'/><rect x='510' y='370' width='220' height='230' fill='%2398856a'/><g fill='%23d9c89e'><rect x='100' y='380' width='14' height='18'/><rect x='130' y='380' width='14' height='18'/><rect x='160' y='380' width='14' height='18'/><rect x='190' y='380' width='14' height='18'/><rect x='220' y='380' width='14' height='18'/><rect x='250' y='380' width='14' height='18'/><rect x='280' y='380' width='14' height='18'/><rect x='100' y='420' width='14' height='18'/><rect x='130' y='420' width='14' height='18'/><rect x='160' y='420' width='14' height='18'/><rect x='190' y='420' width='14' height='18'/><rect x='220' y='420' width='14' height='18'/><rect x='250' y='420' width='14' height='18'/><rect x='280' y='420' width='14' height='18'/><rect x='100' y='460' width='14' height='18'/><rect x='130' y='460' width='14' height='18'/><rect x='160' y='460' width='14' height='18'/><rect x='190' y='460' width='14' height='18'/><rect x='220' y='460' width='14' height='18'/><rect x='250' y='460' width='14' height='18'/><rect x='280' y='460' width='14' height='18'/><rect x='100' y='500' width='14' height='18'/><rect x='130' y='500' width='14' height='18'/><rect x='160' y='500' width='14' height='18'/><rect x='190' y='500' width='14' height='18'/><rect x='220' y='500' width='14' height='18'/><rect x='250' y='500' width='14' height='18'/><rect x='280' y='500' width='14' height='18'/><rect x='100' y='540' width='14' height='18'/><rect x='130' y='540' width='14' height='18'/><rect x='160' y='540' width='14' height='18'/><rect x='190' y='540' width='14' height='18'/><rect x='220' y='540' width='14' height='18'/><rect x='250' y='540' width='14' height='18'/><rect x='280' y='540' width='14' height='18'/></g><g fill='%231f5028'><ellipse cx='30' cy='600' rx='40' ry='80'/><ellipse cx='770' cy='600' rx='40' ry='80'/><circle cx='30' cy='480' r='40'/><circle cx='770' cy='480' r='40'/></g></svg>\")"

export default function Login({ onLogin }) {
  const navigate = useNavigate()
  const [registration, setRegistration] = useState('')
  const [pin, setPin] = useState('')
  const [remember, setRemember] = useState(false)
  const [robot, setRobot] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      registration.trim() === credentials.username &&
      pin === credentials.password
    ) {
      setError('')
      onLogin?.()
      navigate('/')
    } else {
      setError('Invalid Registration Number or Pin Code.')
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Left hero panel */}
      <div
        className="relative hidden lg:block lg:w-[55%] bg-cover bg-center"
        style={{ backgroundImage: campusHeroBg }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
        <div className="absolute bottom-10 left-10 right-10 text-white">
          <h1 className="text-[36px] font-bold drop-shadow-lg">
            AASTMT Student Portal
          </h1>
          <p className="mt-3 text-[14px] max-w-[480px] text-white/90 leading-relaxed">
            AASTMT Student Portal is a gateway where students can log in
            to access their academic program information, Student Portal
            contains information on courses, transcripts, timetables, exam
            schedules and department contact numbers.
          </p>
        </div>
      </div>

      {/* Right login form */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-[420px]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src="/logo.svg" alt="AASTMT" className="w-[62px] h-[62px]" />
            <div className="leading-none">
              <span className="text-[34px] tracking-tight font-bold text-[#1e1e1e]">
                Student
              </span>{' '}
              <span className="text-[34px] tracking-tight text-[#8a8d92] font-light">
                Portal
              </span>
            </div>
          </div>

          <hr className="border-t border-portal-borderLight" />

          <div className="mt-4">
            <h2 className="text-[19px] font-bold text-[#1e1e1e] mb-3">Registration</h2>
            <button
              type="button"
              className="w-full bg-portal-coral hover:bg-portal-coralHover text-white font-semibold text-[17px] py-3 rounded transition-colors"
              onClick={() => alert('Open Registration is a placeholder in this demo.')}
            >
              Open Registration
            </button>
          </div>

          <hr className="border-t border-portal-borderLight mt-6" />

          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            <h2 className="text-[19px] font-bold text-[#1e1e1e]">Login</h2>

            <input
              type="text"
              value={registration}
              onChange={(e) => setRegistration(e.target.value)}
              placeholder="Registration Number"
              autoComplete="username"
              required
              className="w-full px-4 py-3 border border-portal-borderInput rounded text-[15px] text-[#1e1e1e] placeholder:text-portal-textLight focus:outline-none focus:ring-1 focus:ring-portal-primary focus:border-portal-primary"
            />
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Pin Code"
              autoComplete="current-password"
              required
              className="w-full px-4 py-3 border border-portal-borderInput rounded text-[15px] text-[#1e1e1e] placeholder:text-portal-textLight focus:outline-none focus:ring-1 focus:ring-portal-primary focus:border-portal-primary"
            />

            <div className="border border-portal-borderInput rounded bg-[#f9f9f9] px-4 py-3 flex items-center justify-between">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={robot}
                  onChange={(e) => setRobot(e.target.checked)}
                  className="mt-1 w-5 h-5 accent-portal-primary"
                />
                <span className="text-[14px] text-[#1e1e1e] leading-tight">
                  I'm not a robot
                  <br />
                  <span className="text-[11px] text-portal-textLight">
                    This site is exceeding{' '}
                    <span className="underline">reCAPTCHA Enterprise free quota.</span>
                  </span>
                </span>
              </label>
              <div className="flex flex-col items-center text-[10px] text-portal-textLight leading-tight shrink-0 ml-3">
                <svg className="w-9 h-9" viewBox="0 0 64 64" fill="none">
                  <path d="M48 12 a22 22 0 1 1 -7 35" stroke="#4285f4" strokeWidth="6" strokeLinecap="round" fill="none" />
                  <polygon points="42,4 56,18 42,18" fill="#4285f4" />
                  <path d="M16 52 a22 22 0 0 1 7 -35" stroke="#0f9d58" strokeWidth="6" strokeLinecap="round" fill="none" />
                  <polygon points="22,60 8,46 22,46" fill="#0f9d58" />
                </svg>
                reCAPTCHA
              </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 accent-portal-primary"
              />
              <span className="text-[14px] text-[#1e1e1e]">Remember Me</span>
            </label>

            {error && (
              <div className="text-sm text-rose-600 bg-rose-50 border border-rose-200 rounded px-3 py-2">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-portal-primary hover:bg-portal-tabSelected text-white font-semibold text-[17px] py-3 rounded transition-colors mt-1"
            >
              Login
            </button>

            <p className="text-[13px] text-[#3b3b3b] mt-2">
              Can't log in or Forgot Password? Click{' '}
              <a href="#" className="text-portal-primary underline hover:text-portal-tabSelected">
                here
              </a>{' '}
              to send your password.
            </p>

            <p className="text-[11px] text-center text-portal-textLight pt-3 border-t border-portal-borderLight mt-4">
              Demo credentials — Registration:{' '}
              <span className="font-mono text-[#3b3b3b]">{credentials.username}</span> · Pin:{' '}
              <span className="font-mono text-[#3b3b3b]">{credentials.password}</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
