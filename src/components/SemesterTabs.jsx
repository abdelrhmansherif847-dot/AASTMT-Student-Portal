import { useState } from 'react'
import { semesters } from '../data/mockData'

export default function SemesterTabs() {
  const [active, setActive] = useState(semesters[0].id)

  return (
    <div className="bg-white rounded-md shadow-card border border-portal-border p-5">
      <h2 className="text-[20px] font-semibold text-gray-800">Semesters</h2>
      <p className="text-[14px] text-gray-500 mt-1">Semesters that the student registered.</p>
      <div className="mt-4 flex flex-wrap gap-2 bg-portal-rowAlt p-2 rounded">
        {semesters.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActive(s.id)}
            className={`px-5 py-2 rounded text-[14px] font-medium transition-colors ${
              active === s.id
                ? 'bg-portal-headerDark text-white shadow'
                : 'bg-gray-500/80 text-white hover:bg-gray-600'
            }`}
            dir="rtl"
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  )
}
