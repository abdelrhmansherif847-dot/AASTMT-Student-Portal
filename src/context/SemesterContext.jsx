import { createContext, useContext, useMemo, useState } from 'react'
import { DEFAULT_SEMESTER_ID, semesterData, semesters } from '../data/mockData'

const SemesterContext = createContext(null)

export function SemesterProvider({ children }) {
  const [selectedId, setSelectedId] = useState(DEFAULT_SEMESTER_ID)

  const value = useMemo(() => {
    const data = semesterData[selectedId] ?? { results: [], courses: [] }
    return {
      selectedId,
      setSelectedId,
      results: data.results,
      courses: data.courses,
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
