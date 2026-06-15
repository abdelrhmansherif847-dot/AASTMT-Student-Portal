import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSemester } from '../context/SemesterContext'
import { semesterData, semesters } from '../data/mockData'

const TABS = ['Overview', 'Content', 'Community', 'Members', 'Book']

function findCourse(code) {
  for (const semId of Object.keys(semesterData)) {
    const found = semesterData[semId].results.find((r) => r.code === code)
    if (found) return { semId, course: found }
  }
  return null
}

export default function CourseDetail() {
  const { code } = useParams()
  const navigate = useNavigate()
  const { setSelectedId } = useSemester()
  const [activeTab, setActiveTab] = useState('Overview')

  const match = findCourse(code)

  useEffect(() => {
    if (match) setSelectedId(match.semId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code])

  if (!match) {
    return (
      <div className="p-8">
        <button
          onClick={() => navigate(-1)}
          className="text-portal-primary underline"
        >
          ← Back
        </button>
        <p className="mt-4 text-portal-textMuted">
          Course <span className="font-mono">{code}</span> not found.
        </p>
      </div>
    )
  }

  const { course, semId } = match
  const semLabel = semesters.find((s) => s.id === semId)?.label

  return (
    <div className="px-6 lg:px-8 py-6 space-y-5">
      <div className="bg-white rounded shadow-card border border-portal-borderLight">
        <div className="px-6 pt-5 pb-3">
          <h1 className="text-[24px] font-semibold text-[#1e1e1e] leading-tight">
            {course.name}
          </h1>
          <p className="text-[13.5px] text-portal-textMuted mt-1">
            Construction and Building Engineering - Alexandria
            {semLabel && <span dir="rtl" className="ml-2">({semLabel})</span>}
          </p>
        </div>
        <div className="px-2 border-t border-portal-borderLight">
          <nav className="flex flex-wrap gap-1">
            {TABS.map((t) => {
              const active = t === activeTab
              return (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`px-4 py-3 text-[14px] font-medium transition-colors ${
                    active
                      ? 'text-portal-tabSelected border-b-2 border-portal-tabSelected'
                      : 'text-portal-textMuted hover:text-[#1e1e1e]'
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    {t === 'Overview' && (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="9" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <circle cx="12" cy="16" r="0.5" fill="currentColor" />
                      </svg>
                    )}
                    {t === 'Content' && (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="16" rx="1.5" />
                        <line x1="3" y1="9" x2="21" y2="9" />
                      </svg>
                    )}
                    {t === 'Community' && (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                    )}
                    {t === 'Members' && (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    )}
                    {t === 'Book' && (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>
                    )}
                    {t}
                  </span>
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      <section>
        <h2 className="text-[20px] font-semibold text-[#1e1e1e] mb-3">
          Course Results
        </h2>
        <div className="bg-white border border-portal-borderLight rounded overflow-hidden">
          <table className="w-full text-[14px] border-collapse">
            <thead>
              <tr className="bg-portal-teal text-white">
                <th className="px-4 py-3 text-left font-semibold border-r border-white/40">
                  Course<br />Code
                </th>
                <th className="px-4 py-3 text-left font-semibold border-r border-white/40">
                  Course Name
                </th>
                <th className="px-4 py-3 text-center font-semibold border-r border-white/40">
                  Attendance
                </th>
                <th className="px-4 py-3 text-center font-semibold border-r border-white/40">
                  7th Week<br />(30%)
                </th>
                <th className="px-4 py-3 text-center font-semibold border-r border-white/40">
                  12th Week<br />(20%)
                </th>
                <th className="px-4 py-3 text-center font-semibold border-r border-white/40">
                  Semester Work<br />(10%)
                </th>
                <th className="px-4 py-3 text-center font-semibold">
                  Final<br />Grade
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="bg-[#e8eaed] px-5 py-5 font-bold text-[#3b3b3b] text-left">
                  {course.code}
                </td>
                <td className="px-5 py-5 text-[#3b3b3b]">{course.name}</td>
                <td className="px-5 py-5 text-center text-[#3b3b3b]">
                  {course.attendance || '—'}
                </td>
                <td className="px-5 py-5 text-center text-[#3b3b3b]">
                  {course.week7}
                </td>
                <td className="px-5 py-5 text-center text-[#3b3b3b]">
                  {course.week12}
                </td>
                <td className="px-5 py-5 text-center text-[#3b3b3b]">
                  {course.semesterWork}
                </td>
                <td className="px-5 py-5 text-center font-bold text-[18px] text-[#1e1e1e] border-l border-portal-teal/70">
                  {course.finalGrade}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-[20px] font-semibold text-[#1e1e1e] mb-3">
          Course Schedule
        </h2>
        <div className="bg-white border border-portal-borderLight rounded p-6 text-portal-textMuted text-[14px] min-h-[120px]">
          The schedule for this course will appear here.
        </div>
      </section>
    </div>
  )
}
