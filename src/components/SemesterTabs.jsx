import { useSemester } from '../context/SemesterContext'

export default function SemesterTabs() {
  const { semesters, selectedId, setSelectedId } = useSemester()

  return (
    <div className="inline-flex flex-wrap gap-1.5 bg-[#5f6368] p-1 rounded">
      {semesters.map((s) => (
        <button
          key={s.id}
          type="button"
          onClick={() => setSelectedId(s.id)}
          dir="rtl"
          className={`px-7 py-2 rounded text-[14px] font-medium transition-colors min-w-[110px] text-center ${
            selectedId === s.id
              ? 'bg-[#3f4347] text-white'
              : 'bg-[#9aa0a6] text-white hover:bg-[#7e848a]'
          }`}
        >
          {s.label}
        </button>
      ))}
    </div>
  )
}
