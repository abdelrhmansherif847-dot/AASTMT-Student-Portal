import ResultsTable from '../components/ResultsTable'
import SemesterAchievement from '../components/SemesterAchievement'
import SemesterTabs from '../components/SemesterTabs'
import { student } from '../data/mockData'

export default function StudentResults() {
  return (
    <div className="p-5 lg:p-7 space-y-5">
      <div className="bg-white rounded-md shadow-card border border-portal-border p-5">
        <h1 className="text-[22px] font-semibold text-gray-800">Student Results</h1>
        <p className="text-[14px] text-gray-500 mt-1">
          View the results and the attendance of the current and previous semesters
        </p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <InfoCard label="Student Name" value={student.name} />
          <InfoCard label="Registration Number" value={student.registrationNumber} />
          <InfoCard label="GPA" value={student.gpa.toFixed(2)} highlight />
          <InfoCard label="Credits Achieved" value={student.creditsAchieved.toFixed(1)} />
        </div>
      </div>

      <SemesterTabs />

      <div className="bg-white rounded-md shadow-card border border-portal-border p-5">
        <h2 className="text-[20px] font-semibold text-gray-800 mb-4">Semester Results</h2>
        <ResultsTable />
      </div>

      <div className="flex justify-end">
        <SemesterAchievement />
      </div>
    </div>
  )
}

function InfoCard({ label, value, highlight }) {
  return (
    <div className="rounded-md border border-portal-border bg-portal-rowAlt p-3">
      <div className="text-[12px] uppercase tracking-wide text-gray-500">{label}</div>
      <div
        className={`mt-1 text-[15px] font-semibold truncate ${
          highlight ? 'text-portal-accent' : 'text-gray-800'
        }`}
        title={value}
      >
        {value}
      </div>
    </div>
  )
}
