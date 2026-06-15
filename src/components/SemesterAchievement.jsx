import { useSemester } from '../context/SemesterContext'

export default function SemesterAchievement() {
  const { achievement } = useSemester()
  const { semester, total } = achievement

  return (
    <div className="bg-white rounded shadow-card w-full max-w-[560px]">
      <div className="px-6 pt-5 pb-4">
        <h3 className="text-[26px] font-bold text-[#1a1a1a] leading-tight">
          Semster Achievement
        </h3>
      </div>
      <div className="overflow-hidden">
        <table className="w-full text-[15px] border-collapse">
          <thead>
            <tr className="bg-[#147a9c] text-white">
              <th className="px-4 py-4 w-[44%]" />
              <th className="px-4 py-4 text-center font-bold text-[16px] border-l border-white/40">
                Credit Achieved
              </th>
              <th className="px-4 py-4 text-center font-bold text-[16px] border-l border-white/40">
                G.P.A
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-5 py-5 text-[#1a1a1a] bg-[#e6e8eb] font-medium border-r-[3px] border-[#147a9c]">
                Semester Achievement
              </td>
              <td className="px-5 py-5 text-center text-[#1a1a1a]">
                {semester.credit.toFixed(1)}
              </td>
              <td className="px-5 py-5 text-center text-[#1a1a1a]">
                {semester.gpa.toFixed(2)}
              </td>
            </tr>
            <tr className="bg-[#eef0f2]">
              <td className="px-5 py-5 text-[#1a1a1a] bg-[#c8ced3] font-medium border-r-[3px] border-[#147a9c]">
                Total Achievement
              </td>
              <td className="px-5 py-5 text-center text-[#1a1a1a]">
                {total.credit.toFixed(1)}
              </td>
              <td className="px-3 py-3 text-center">
                <span className="inline-block bg-[#f2a100] text-[#1a1a1a] font-bold rounded px-5 py-2 min-w-[88px] text-[22px]">
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
