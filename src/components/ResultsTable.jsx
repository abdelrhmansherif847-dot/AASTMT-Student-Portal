import { semesterResults } from '../data/mockData'

const columns = [
  { key: 'code', label: 'Course Code', width: 'w-[120px]' },
  { key: 'name', label: 'Course Name', width: 'min-w-[260px]' },
  { key: 'attendance', label: 'Attendance', width: 'w-[120px]' },
  { key: 'week7', label: '7th Week (30%)', width: 'w-[130px]' },
  { key: 'week12', label: '12th Week (20%)', width: 'w-[130px]' },
  { key: 'semesterWork', label: 'Semeter Work (10%)', width: 'w-[150px]' },
  { key: 'finalGrade', label: 'Final Grade', width: 'w-[120px]' },
]

export default function ResultsTable() {
  return (
    <div className="bg-white rounded-md shadow-card overflow-hidden border border-portal-border">
      <div className="overflow-x-auto">
        <table className="w-full text-[14px] border-collapse">
          <thead>
            <tr className="bg-portal-tableHead text-white">
              {columns.map((c, i) => (
                <th
                  key={c.key}
                  className={`px-4 py-3 text-center font-semibold align-middle ${c.width} ${
                    i < columns.length - 1 ? 'border-r border-white/30' : ''
                  }`}
                >
                  {c.label.includes('(') ? (
                    <span className="block leading-tight">
                      {c.label.split(' (')[0]}
                      <br />({c.label.split('(')[1]}
                    </span>
                  ) : (
                    c.label
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {semesterResults.map((row, idx) => (
              <tr
                key={row.code}
                className={idx % 2 === 0 ? 'bg-white' : 'bg-portal-rowAlt'}
              >
                <td className="px-4 py-4 text-gray-800 font-semibold border-r border-portal-border text-left">
                  {row.code}
                </td>
                <td className="px-4 py-4 text-gray-800 border-r border-portal-border text-left">
                  {row.name}
                </td>
                <td className="px-4 py-4 text-gray-800 text-center border-r border-portal-border">
                  {row.attendance}
                </td>
                <td className="px-4 py-4 text-gray-800 text-center border-r border-portal-border">
                  {row.week7}
                </td>
                <td className="px-4 py-4 text-gray-800 text-center border-r border-portal-border">
                  {row.week12}
                </td>
                <td className="px-4 py-4 text-gray-800 text-center border-r border-portal-border">
                  {row.semesterWork}
                </td>
                <td className="px-4 py-4 text-gray-800 font-bold text-center">
                  {row.finalGrade}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
