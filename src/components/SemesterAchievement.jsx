import { useSemester } from '../context/SemesterContext'

export default function SemesterAchievement() {
  const { achievement } = useSemester()
  const { semester, total } = achievement

  return (
    <div className="bg-white border border-portal-borderSoft rounded shadow-card w-full max-w-[520px]">
      <div className="px-5 py-4">
        <h3 className="text-[18px] font-semibold text-[#1e1e1e]">
          Semster Achievement
        </h3>
      </div>
      <div className="overflow-hidden">
        <table className="w-full text-[14px] border-collapse">
          <thead>
            <tr className="bg-portal-teal text-white">
              <th className="px-4 py-3 w-[42%]" />
              <th className="px-4 py-3 text-center font-semibold border-l border-white/40">
                Credit Achieved
              </th>
              <th className="px-4 py-3 text-center font-semibold border-l border-white/40">
                G.P.A
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-4 py-4 text-[#3b3b3b] bg-[#e8eaed] font-medium">
                Semester Achievement
              </td>
              <td className="px-4 py-4 text-center text-[#3b3b3b] border-l border-portal-borderSoft">
                {semester.credit.toFixed(1)}
              </td>
              <td className="px-4 py-4 text-center text-[#3b3b3b] border-l border-portal-borderSoft">
                {semester.gpa.toFixed(2)}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-4 text-[#3b3b3b] bg-[#d9dcdf] font-medium">
                Total Achievement
              </td>
              <td className="px-4 py-4 text-center text-[#3b3b3b] border-l border-portal-borderSoft">
                {total.credit.toFixed(1)}
              </td>
              <td className="px-4 py-4 text-center border-l border-portal-borderSoft">
                <span className="inline-block bg-portal-gpaOrange text-[#1e1e1e] font-bold rounded-sm px-4 py-1.5 min-w-[64px] text-[15px]">
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
