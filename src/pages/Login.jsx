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
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Left hero panel — real AASTMT campus photo */}
      <div className="relative hidden lg:block lg:w-[55%]">
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
            to access important program information. Student Portal contains
            information on courses, transcripts, timetables, exam schedules and
            department contact numbers.
          </p>
        </div>
      </div>

      {/* Right login form */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
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
              <div className="flex flex-col items-center text-[10px] text-[#555] leading-tight shrink-0 ml-3">
                <svg className="w-[44px] h-[44px]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  {/* Upper blue arrow — thick crescent with triangular head pointing down-right */}
                  <path
                    d="M 18 50
                       A 32 32 0 0 1 70 24
                       L 70 12
                       L 92 30
                       L 70 48
                       L 70 36
                       A 20 20 0 0 0 30 50
                       Z"
                    fill="#1a73e8"
                  />
                  {/* Lower gray arrow — mirror of the blue one */}
                  <path
                    d="M 82 50
                       A 32 32 0 0 1 30 76
                       L 30 88
                       L 8 70
                       L 30 52
                       L 30 64
                       A 20 20 0 0 0 70 50
                       Z"
                    fill="#9aa0a6"
                  />
                </svg>
                <span className="mt-0.5">reCAPTCHA</span>
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
