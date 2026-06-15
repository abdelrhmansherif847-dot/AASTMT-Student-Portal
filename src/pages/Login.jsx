import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { credentials } from '../data/mockData'
import { LockIcon, UserIcon } from '../components/icons'

export default function Login({ onLogin }) {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      username.trim() === credentials.username &&
      password === credentials.password
    ) {
      setError('')
      onLogin?.()
      navigate('/results')
    } else {
      setError('Invalid registration number or password.')
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background:
          'linear-gradient(135deg, #1c8db0 0%, #0f6f8c 50%, #08465a 100%)',
      }}
    >
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.svg" alt="AASTMT" className="w-20 h-20 drop-shadow-lg" />
          <div className="mt-3 text-white text-2xl font-semibold tracking-tight">
            Student <span className="text-white/80 italic font-normal">Portal</span>
          </div>
          <div className="text-white/80 text-sm mt-1 text-center">
            Arab Academy for Science, Technology &amp; Maritime Transport
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-2xl p-8 space-y-5"
        >
          <div>
            <h1 className="text-xl font-semibold text-gray-800">Welcome back</h1>
            <p className="text-sm text-gray-500 mt-1">Sign in to your student account</p>
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Registration Number
            </label>
            <div className="relative">
              <UserIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="241016032"
                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portal-link focus:border-portal-link text-gray-800"
                autoComplete="username"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <LockIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portal-link focus:border-portal-link text-gray-800"
                autoComplete="current-password"
                required
              />
            </div>
          </div>

          {error && (
            <div className="text-sm text-rose-600 bg-rose-50 border border-rose-200 rounded px-3 py-2">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-portal-header hover:bg-portal-headerDark text-white font-medium py-2.5 rounded-md transition-colors shadow"
          >
            Sign In
          </button>

          <div className="text-xs text-gray-500 text-center pt-2 border-t border-gray-100">
            Demo credentials — Registration:{' '}
            <span className="font-mono text-gray-700">{credentials.username}</span> · Password:{' '}
            <span className="font-mono text-gray-700">{credentials.password}</span>
          </div>
        </form>

        <p className="text-center text-white/70 text-xs mt-6">
          © {new Date().getFullYear()} AASTMT · Demo Project
        </p>
      </div>
    </div>
  )
}
