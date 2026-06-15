import { useSemester } from '../context/SemesterContext'

const columns = [
  { key: 'code', label: 'Course Code', align: 'left', twoLine: true },
  { key: 'name', label: 'Course Name', align: 'left' },
  { key: 'attendance', label: 'Attendance', align: 'center' },
  { key: 'week7', label: '7th Week', sub: '(30%)', align: 'center' },
  { key: 'week12', label: '12th Week', sub: '(20%)', align: 'center' },
  { key: 'semesterWork', label: 'Semeter Work', sub: '(10%)', align: 'center' },
  { key: 'finalGrade', label: 'Final Grade', finalCol: true, align: 'center' },
]

const TEAL = '#147a9c'

export default function ResultsTable() {
  const { results: semesterResults } = useSemester()
  return (
    <div className="bg-white overflow-hidden rounded shadow-card border border-portal-borderLight">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[14px]">
          <thead>
            <tr className="bg-[#147a9c] text-white">
              {columns.map((c, i) => (
                <th
                  key={c.key}
                  className={`px-3 py-3 font-bold align-middle ${
                    c.align === 'left' ? 'text-left' : 'text-center'
                  } ${i < columns.length - 1 ? 'border-r border-white/40' : ''}`}
                >
                  {c.finalCol ? (
                    <span className="block leading-tight">
                      Final<br />Grade
                    </span>
                  ) : c.key === 'code' ? (
                    <span className="block leading-tight">
                      Course<br />Code
                    </span>
                  ) : c.sub ? (
                    <span className="block leading-tight">
                      {c.label}
                      <br />
                      {c.sub}
                    </span>
                  ) : (
                    c.label
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {semesterResults.map((row, idx) => {
              const stripe = idx % 2 === 1
              const rowBg = stripe ? 'bg-[#c4c9cf]' : 'bg-white'
              const codeBg = stripe ? 'bg-[#a9aeb4]' : 'bg-[#bcc1c8]'
              const cellBase = 'px-3 py-3 text-[#1a1a1a]'
              return (
                <tr key={row.code} className={rowBg}>
                  <td
                    className={`${codeBg} ${cellBase} font-bold text-[14px] text-left whitespace-nowrap`}
                  >
                    {row.code}
                  </td>
                  <td
                    className={`${cellBase} text-[14px] text-left`}
                    style={{ borderRight: `2px solid ${TEAL}` }}
                  >
                    {row.name}
                  </td>
                  <td className={`${cellBase} text-[14px] text-center`}>
                    {row.attendance}
                  </td>
                  <td className={`${cellBase} text-[14px] text-center`}>
                    {row.week7}
                  </td>
                  <td className={`${cellBase} text-[14px] text-center`}>
                    {row.week12}
                  </td>
                  <td className={`${cellBase} text-[14px] text-center`}>
                    {row.semesterWork}
                  </td>
                  <td
                    className="px-3 py-3 text-center font-bold text-[19px] text-[#1a1a1a]"
                    style={{ borderLeft: `2px solid ${TEAL}` }}
                  >
                    {row.finalGrade}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
