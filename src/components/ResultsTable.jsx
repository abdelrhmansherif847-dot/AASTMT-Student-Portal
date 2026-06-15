import { useSemester } from '../context/SemesterContext'

const columns = [
  { key: 'code', label: 'Course Code', align: 'left' },
  { key: 'name', label: 'Course Name', align: 'left' },
  { key: 'attendance', label: 'Attendance', align: 'center' },
  { key: 'week7', label: '7th Week', sub: '(30%)', align: 'center' },
  { key: 'week12', label: '12th Week', sub: '(20%)', align: 'center' },
  { key: 'semesterWork', label: 'Semeter Work', sub: '(10%)', align: 'center' },
  { key: 'finalGrade', label: 'Final Grade', twoLine: true, align: 'center' },
]

export default function ResultsTable() {
  const { results: semesterResults } = useSemester()
  return (
    <div className="bg-white overflow-hidden border border-portal-borderSoft rounded">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[14px]">
          <thead>
            <tr className="bg-portal-teal text-white">
              {columns.map((c, i) => (
                <th
                  key={c.key}
                  className={`px-4 py-4 font-semibold align-middle ${
                    c.align === 'left' ? 'text-left' : 'text-center'
                  } ${i < columns.length - 1 ? 'border-r border-white/40' : ''}`}
                >
                  {c.twoLine ? (
                    <span className="block leading-tight">
                      Final<br />Grade
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
              const rowBg = idx % 2 === 1 ? 'bg-[#f3f4f6]' : 'bg-white'
              const codeBg = idx % 2 === 1 ? 'bg-[#d9dcdf]' : 'bg-[#e8eaed]'
              return (
                <tr key={row.code} className={rowBg}>
                  <td
                    className={`${codeBg} px-5 py-5 font-bold text-[#3b3b3b] text-left whitespace-nowrap`}
                  >
                    {row.code}
                  </td>
                  <td className="px-5 py-5 text-[#3b3b3b] text-left">
                    {row.name}
                  </td>
                  <td className="px-5 py-5 text-[#3b3b3b] text-center">
                    {row.attendance}
                  </td>
                  <td className="px-5 py-5 text-[#3b3b3b] text-center">
                    {row.week7}
                  </td>
                  <td className="px-5 py-5 text-[#3b3b3b] text-center">
                    {row.week12}
                  </td>
                  <td className="px-5 py-5 text-[#3b3b3b] text-center">
                    {row.semesterWork}
                  </td>
                  <td className="px-5 py-5 text-center font-bold text-[18px] text-[#1e1e1e] border-l border-portal-teal/70">
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
