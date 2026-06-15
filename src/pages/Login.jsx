import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { credentials } from '../data/mockData'

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
    <div className="min-h-screen lg:h-screen bg-white flex flex-col lg:flex-row lg:overflow-hidden">
      {/* Left hero panel — real AASTMT campus photo, fills the full height */}
      <div className="relative hidden lg:block lg:w-[55%] lg:h-screen">
        <img
          src="/campus.jpg"
          alt="AASTMT Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />
        <div className="absolute bottom-10 left-10 right-10 text-white">
          <h1 className="text-[36px] font-bold drop-shadow-lg">
            AASTMT <span className="font-light">Student Portal</span>
          </h1>
          <p className="mt-3 text-[14px] max-w-[480px] text-white/90 leading-relaxed">
            AASTMT Student Portal is an online gateway where students can log in
            to access important program information. Student Portal contain
            information on courses, transcripts, timetables, exam schedules and
            department contact numbers.
          </p>
        </div>
      </div>

      {/* Right login form */}
      <div className="flex-1 flex items-center justify-center px-4 py-8 lg:h-screen lg:overflow-y-auto">
        <div className="w-full max-w-[420px]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src="/aast-logo.png" alt="AASTMT" className="h-[72px] w-auto object-contain" />
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
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={robot}
                  onChange={(e) => setRobot(e.target.checked)}
                  className="w-6 h-6 accent-portal-primary"
                />
                <span className="text-[15px] text-[#222222] leading-tight">
                  I'm not a robot
                  <br />
                  <span className="text-[10px] text-portal-textLight">
                    This site is exceeding{' '}
                    <span className="underline">reCAPTCHA Enterprise free quota.</span>
                  </span>
                </span>
              </label>
              <img
                src="/recaptcha.png"
                alt="reCAPTCHA"
                className="h-[58px] w-auto shrink-0 ml-3 object-contain"
              />
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

            <p className="text-[11px] text-center text-portal-textLight pt-3 mt-4">
              Copyright © 2019 Information and Documentation Center - AASTMT
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
