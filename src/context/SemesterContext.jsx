import { createContext, useContext, useMemo, useState } from 'react'
import { DEFAULT_SEMESTER_ID, semesterData, semesters } from '../data/mockData'

const SemesterContext = createContext(null)

const emptyAchievement = {
  semester: { credit: 0.0, gpa: 0.0 },
  total: { credit: 0.0, gpa: 0.0 },
}

export function SemesterProvider({ children }) {
  const [selectedId, setSelectedId] = useState(DEFAULT_SEMESTER_ID)

  const value = useMemo(() => {
    const data = semesterData[selectedId] ?? {
      results: [],
      courses: [],
      achievement: emptyAchievement,
    }
    return {
      selectedId,
      setSelectedId,
      results: data.results,
      courses: data.courses,
      achievement: data.achievement ?? emptyAchievement,
      semesters,
    }
  }, [selectedId])

  return (
    <SemesterContext.Provider value={value}>{children}</SemesterContext.Provider>
  )
}

export function useSemester() {
  const ctx = useContext(SemesterContext)
  if (!ctx) {
    throw new Error('useSemester must be used inside <SemesterProvider>')
  }
  return ctx
}
