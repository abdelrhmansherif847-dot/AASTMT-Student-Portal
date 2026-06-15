import { semesterAchievement } from '../data/mockData'

export default function SemesterAchievement() {
  const { semester, total } = semesterAchievement
  return (
    <div className="bg-white rounded-md shadow-card border border-portal-border max-w-[520px]">
      <div className="px-5 py-4 border-b border-portal-border">
        <h3 className="text-[17px] font-semibold text-gray-800">Semster Achievement</h3>
      </div>
      <div className="overflow-hidden">
        <table className="w-full text-[14px] border-collapse">
          <thead>
            <tr className="bg-portal-tableHead text-white">
              <th className="px-4 py-2.5 text-left font-semibold border-r border-white/30 w-1/2" />
              <th className="px-4 py-2.5 text-center font-semibold border-r border-white/30">
                Credit Achieved
              </th>
              <th className="px-4 py-2.5 text-center font-semibold">G.P.A</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-portal-rowAlt">
              <td className="px-4 py-3 text-gray-800 border-r border-portal-border">
                Semester Achievement
              </td>
              <td className="px-4 py-3 text-center text-gray-800 border-r border-portal-border">
                {semester.credit.toFixed(1)}
              </td>
              <td className="px-4 py-3 text-center text-gray-800">
                {semester.gpa.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-gray-800 border-r border-portal-border bg-portal-rowAlt">
                Total Achievement
              </td>
              <td className="px-4 py-3 text-center text-gray-800 border-r border-portal-border">
                {total.credit.toFixed(1)}
              </td>
              <td className="px-4 py-3 text-center">
                <span className="inline-block bg-portal-accent text-white font-bold rounded px-3 py-1 min-w-[60px]">
                  {total.gpa.toFixed(2)}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
