import ResultsTable from '../components/ResultsTable'
import SemesterAchievement from '../components/SemesterAchievement'
import SemesterTabs from '../components/SemesterTabs'

export default function StudentResults() {
  return (
    <div className="px-6 lg:px-8 py-6 space-y-5">
      {/* Title */}
      <section>
        <h1 className="text-[28px] font-bold text-[#1a1a1a] leading-tight">
          Student Results
        </h1>
        <p className="text-[14px] text-[#6b7280] mt-1">
          View the results and the attendance of the current and previous semesters
        </p>
      </section>

      {/* Semesters */}
      <section>
        <h2 className="text-[24px] font-bold text-[#1a1a1a] leading-tight">
          Semesters
        </h2>
        <p className="text-[13px] text-[#9aa0a6] mt-1">
          Semesters that the student registered.
        </p>
        <div className="mt-4">
          <SemesterTabs />
        </div>
      </section>

      {/* Semester Results */}
      <section>
        <h2 className="text-[26px] font-bold text-[#1a1a1a] mb-3">
          Semester Results
        </h2>
        <ResultsTable />
      </section>

      {/* Semester Achievement (note: original spells it "Semster") */}
      <section className="flex justify-center pt-2">
        <SemesterAchievement />
      </section>
    </div>
  )
}
