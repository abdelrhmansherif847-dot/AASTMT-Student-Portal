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

export default function ResultsTable() {
  const { results: semesterResults } = useSemester()
  return (
    <div className="bg-white overflow-hidden rounded">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[15px]">
          <thead>
            <tr className="bg-[#1c8db0] text-white">
              {columns.map((c, i) => (
                <th
                  key={c.key}
                  className={`px-4 py-4 font-bold align-middle ${
                    c.align === 'left' ? 'text-left' : 'text-center'
                  } ${i < columns.length - 1 ? 'border-r border-white/30' : ''}`}
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
              const rowBg = stripe ? 'bg-[#eef0f2]' : 'bg-white'
              const codeBg = stripe ? 'bg-[#c8ced3]' : 'bg-[#dadde1]'
              return (
                <tr key={row.code} className={rowBg}>
                  <td
                    className={`${codeBg} px-5 py-5 font-bold text-[#222222] text-left whitespace-nowrap`}
                  >
                    {row.code}
                  </td>
                  <td className="px-5 py-5 text-[#222222] text-left">
                    {row.name}
                  </td>
                  <td className="px-5 py-5 text-[#222222] text-center">
                    {row.attendance}
                  </td>
                  <td className="px-5 py-5 text-[#222222] text-center">
                    {row.week7}
                  </td>
                  <td className="px-5 py-5 text-[#222222] text-center">
                    {row.week12}
                  </td>
                  <td className="px-5 py-5 text-[#222222] text-center">
                    {row.semesterWork}
                  </td>
                  <td className="px-5 py-5 text-center font-bold text-[22px] text-[#1a1a1a] border-l-[3px] border-[#1c8db0]">
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
