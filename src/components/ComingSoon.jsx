import { useParams } from 'react-router-dom'
import { sidebarServices } from '../data/mockData'

export default function ComingSoon() {
  const { id } = useParams()
  const item = sidebarServices.find((s) => s.id === id)
  const label = item?.label || 'This feature'

  return (
    <div className="p-6 lg:p-10">
      <div className="bg-white rounded-md shadow-card border border-portal-border p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-20 h-20 rounded-full bg-portal-headerDark/10 flex items-center justify-center mb-6">
          <svg
            className="w-10 h-10 text-portal-link"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800" dir={item?.rtl ? 'rtl' : 'ltr'}>
          {label}
        </h2>
        <p className="text-portal-link text-lg mt-3 font-medium">Coming Soon</p>
        <p className="text-gray-500 text-sm mt-4 max-w-md">
          This module is part of the AASTMT Student Portal demo. Only the Student
          Results page is functional in this build.
        </p>
      </div>
    </div>
  )
}
