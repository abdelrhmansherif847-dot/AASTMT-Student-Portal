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
      navigate('/results')
    } else {
      setError('Invalid Registration Number or Pin Code.')
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-start justify-center pt-10 pb-10 px-4">
      <div className="w-full max-w-[460px]">
        {/* Logo + Title */}
        <div className="flex items-center justify-center gap-3 px-2 mb-6">
          <img src="/logo.svg" alt="AASTMT" className="w-[78px] h-[78px]" />
          <div className="leading-none">
            <span className="text-[42px] tracking-tight font-bold text-[#1e1e1e]">
              Student
            </span>{' '}
            <span className="text-[42px] tracking-tight text-[#8a8d92] font-light">
              Portal
            </span>
          </div>
        </div>

        <hr className="border-t border-[#e3e6e8]" />

        {/* Registration */}
        <div className="mt-4">
          <h2 className="text-[20px] font-bold text-[#1e1e1e] mb-3">Registration</h2>
          <button
            type="button"
            className="w-full bg-portal-coral hover:bg-portal-coralHover text-white font-semibold text-[18px] py-3 rounded transition-colors"
            onClick={() => alert('Open Registration is a placeholder in this demo.')}
          >
            Open Registration
          </button>
        </div>

        <hr className="border-t border-[#e3e6e8] mt-6" />

        {/* Login */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <h2 className="text-[20px] font-bold text-[#1e1e1e]">Login</h2>

          <input
            type="text"
            value={registration}
            onChange={(e) => setRegistration(e.target.value)}
            placeholder="Registration Number"
            autoComplete="username"
            required
            className="w-full px-4 py-3 border border-portal-borderInput rounded text-[15px] text-[#1e1e1e] placeholder:text-[#9aa0a6] focus:outline-none focus:ring-1 focus:ring-portal-teal focus:border-portal-teal"
          />
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Pin Code"
            autoComplete="current-password"
            required
            className="w-full px-4 py-3 border border-portal-borderInput rounded text-[15px] text-[#1e1e1e] placeholder:text-[#9aa0a6] focus:outline-none focus:ring-1 focus:ring-portal-teal focus:border-portal-teal"
          />

          {/* reCAPTCHA mock */}
          <div className="border border-portal-borderInput rounded bg-[#f9f9f9] px-4 py-3 flex items-center justify-between">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={robot}
                onChange={(e) => setRobot(e.target.checked)}
                className="mt-1 w-5 h-5 accent-portal-teal"
              />
              <span className="text-[14px] text-[#1e1e1e] leading-tight">
                I'm not a robot
                <br />
                <span className="text-[11px] text-[#9aa0a6]">
                  This site is exceeding{' '}
                  <span className="underline">reCAPTCHA Enterprise free quota.</span>
                </span>
              </span>
            </label>
            <div className="flex flex-col items-center text-[10px] text-[#9aa0a6] leading-tight shrink-0 ml-3">
              <svg className="w-9 h-9" viewBox="0 0 64 64" fill="none">
                <path
                  d="M48 12 a22 22 0 1 1 -7 35"
                  stroke="#4285f4"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                />
                <polygon points="42,4 56,18 42,18" fill="#4285f4" />
                <path
                  d="M16 52 a22 22 0 0 1 7 -35"
                  stroke="#0f9d58"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                />
                <polygon points="22,60 8,46 22,46" fill="#0f9d58" />
              </svg>
              reCAPTCHA
            </div>
          </div>

          {/* Remember Me */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="w-4 h-4 accent-portal-teal"
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
            className="w-full bg-portal-teal hover:bg-portal-tealDark text-white font-semibold text-[18px] py-3 rounded transition-colors mt-1"
          >
            Login
          </button>

          <p className="text-[13px] text-[#3b3b3b] mt-2">
            Can't log in or Forgot Password? Click{' '}
            <a href="#" className="text-portal-teal underline hover:text-portal-tealDark">
              here
            </a>{' '}
            to send your password.
          </p>

          <p className="text-[11px] text-center text-[#9aa0a6] pt-3 border-t border-[#e3e6e8] mt-4">
            Demo credentials — Registration:{' '}
            <span className="font-mono text-[#3b3b3b]">{credentials.username}</span> · Pin:{' '}
            <span className="font-mono text-[#3b3b3b]">{credentials.password}</span>
          </p>
        </form>
      </div>
    </div>
  )
}
