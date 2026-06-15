import { useSemester } from '../context/SemesterContext'

export default function SemesterAchievement() {
  const { achievement } = useSemester()
  const { semester, total } = achievement

  return (
    <div className="bg-white rounded shadow-card border border-portal-borderLight w-full max-w-[420px]">
      <div className="px-4 pt-3 pb-2">
        <h3 className="text-[18px] font-semibold text-[#1a1a1a] leading-tight">
          Semster Achievement
        </h3>
      </div>
      <div className="overflow-hidden px-4 pb-4">
        <table className="w-full text-[13px] border-collapse">
          <thead>
            <tr className="bg-[#147a9c] text-white">
              <th className="px-3 py-2 w-[40%]" />
              <th className="px-3 py-2 text-center font-bold border-l border-white/40">
                Credit Achieved
              </th>
              <th className="px-3 py-2 text-center font-bold border-l border-white/40">
                G.P.A
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-3 py-2.5 text-[#1a1a1a] bg-[#dee0e2] font-normal">
                Semester Achievement
              </td>
              <td className="px-3 py-2.5 text-center text-[#1a1a1a]">
                {semester.credit.toFixed(1)}
              </td>
              <td className="px-3 py-2.5 text-center text-[#1a1a1a]">
                {semester.gpa.toFixed(2)}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-3 py-2.5 text-[#1a1a1a] bg-[#cfd1d4] font-normal">
                Total Achievement
              </td>
              <td className="px-3 py-2.5 text-center text-[#1a1a1a]">
                {total.credit.toFixed(1)}
              </td>
              <td className="px-2 py-1.5 text-center">
                <span className="inline-block bg-[#f2a100] text-[#1a1a1a] font-bold rounded px-3 py-1 min-w-[60px] text-[14px]">
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
