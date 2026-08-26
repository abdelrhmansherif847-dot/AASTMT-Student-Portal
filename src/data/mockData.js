export const student = {
  name: 'Abdelrahman Sherif Mohamed Hassan Desouky',
  registrationNumber: '241016032',
  email: 'abdelrahman.sherif@aast.edu',
  college: 'College of Engineering and Technology',
  major: 'Construction & Building Engineering',
  avatar: '/profile.jpg',
}

export const credentials = {
  username: '241016032',
  password: '688433',
}

const passedFromGrade = (grade) =>
  grade && grade !== 'F' && grade !== 'U' && grade !== 'I'

export const gradeColor = (grade) => {
  if (!grade) return 'gray'
  const g = grade.toUpperCase()
  if (g === 'F' || g === 'D' || g === 'D-' || g === 'D+' || g === 'C-')
    return 'red'
  if (g === 'A+' || g === 'A' || g === 'A-' || g === 'B+') return 'green'
  if (g === 'B' || g === 'B-' || g === 'C+' || g === 'C') return 'yellow'
  return 'gray'
}

const buildCourses = (results) =>
  results.map((r) => ({
    code: r.code,
    name: r.name,
    passed: passedFromGrade(r.finalGrade),
    color: gradeColor(r.finalGrade),
  }))

export const notifications = [
  {
    id: 'n1',
    title: 'Final Exam Time/Date',
    body: 'ECB2202 Building Construction',
    time: '2h ago',
  },
  {
    id: 'n2',
    title: 'Final Exam Time/Date',
    body: 'ECB2402 Strength Of Materials',
    time: '4h ago',
  },
  {
    id: 'n3',
    title: 'Final Exam Time/Date',
    body: 'ECB2801 Hydraulics Fundamentals',
    time: '5h ago',
  },
  {
    id: 'n4',
    title: 'Final Exam Time/Date',
    body: 'EBA2202 Vector And Complex Analysis',
    time: '1d ago',
  },
  {
    id: 'n5',
    title: 'Final Exam Time/Date',
    body: 'EEE2404 Electrical Installations In Buildings',
    time: '2d ago',
  },
]

export const dashboardCards = [
  { id: 'student-results', label: 'Student Results', path: '/results', image: 'graduation' },
  { id: 'student-schedule', label: 'Student Schedule', image: 'calendar' },
  { id: 'unofficial-transcript', label: 'Unofficial Transcript', image: 'transcript' },
  { id: 'clinic-reservation', label: 'Clinic Reservation', image: 'medical' },
  { id: 'student-training', label: 'Student Training', image: 'graduation' },
  { id: 'old-moodle', label: 'Old Moodle', image: 'moodle' },
  { id: 'new-moodle', label: 'New Moodle', image: 'moodle' },
  { id: 'submitted-portfolio', label: 'حافظة مقدم', image: 'books', rtl: true },
  { id: 'student-appeal', label: 'Student Appeal', image: 'note' },
  { id: 'support', label: 'Support and inquiries', image: 'support' },
  { id: 'invoices', label: 'Invoices', image: 'tuition' },
  { id: 'e-payment', label: 'E-Payment', image: 'card' },
  { id: 'questionnaire', label: 'Questionnaire', image: 'sticky' },
  { id: 'minor-study', label: 'Minor Study', image: 'book' },
  { id: 'college-schedules', label: 'College Schedules', image: 'calendar' },
  { id: 'exam-schedule', label: 'Exam schedule', image: 'calendar' },
  { id: 'open-access', label: 'Open Access', image: 'access' },
  { id: 'mail-activation', label: 'Mail Activation', image: 'mail' },
  { id: 'student-update-data', label: 'Student Update Data', image: 'update' },
  { id: 'student-bank-account', label: 'Student Bank Account', image: 'bank' },
  { id: 'open-free-bank-account', label: 'Open free bank Account', image: 'qnb' },
  { id: 'statistics', label: 'Statistics', image: 'chart' },
  { id: 'final-exam-excuse', label: 'Final exam excuse', image: 'road' },
  { id: 'aast-card-request', label: 'AAST Card Request', image: 'card' },
  { id: 'protect-data', label: 'احمي بياناتك : البريد الإلكتروني', image: 'lock', rtl: true },
  { id: 'student-council-voting', label: 'Student Council Voting', image: 'vote' },
  { id: 'student-supplies', label: 'Student Supplies', image: 'supplies' },
]

const sep2024Results = [
  { code: 'EBA1103', name: 'Physics I',                  attendance: '5',   week7: '29.00', week12: '19.00', semesterWork: '9.00',  finalGrade: 'B+' },
  { code: 'EBA1203', name: 'Calculus I',                 attendance: '0',   week7: '30.00', week12: '20.00', semesterWork: '10.00', finalGrade: 'A-' },
  { code: 'EBA1401', name: 'Statics',                    attendance: '0',   week7: '24.00', week12: '7.00',  semesterWork: '10.00', finalGrade: 'C-' },
  { code: 'EIM1101', name: 'Manufacturing Technology',   attendance: '3.3', week7: '24.00', week12: '12.00', semesterWork: '10.00', finalGrade: 'B-' },
  { code: 'EBA1308', name: 'Chemistry',                  attendance: '0',   week7: '16.00', week12: '15.00', semesterWork: '10.00', finalGrade: 'C+' },
  { code: 'UNR1102', name: 'Creativity And Innovation',  attendance: '13',  week7: '22.00', week12: '17.00', semesterWork: '10.00', finalGrade: 'B+' },
  { code: 'UNR1403', name: 'Academic English',           attendance: '3.3', week7: '25.00', week12: '19.00', semesterWork: '10.00', finalGrade: 'B'  },
]

const feb2025Results = [
  { code: 'EBA1104', name: 'Physics Ii',                                  attendance: '17',  week7: '16.00', week12: '14.00', semesterWork: '10.00', finalGrade: 'C+' },
  { code: 'EBA1204', name: 'Calculus Ii',                                 attendance: '29',  week7: '20.00', week12: '16.00', semesterWork: '10.00', finalGrade: 'B'  },
  { code: 'EBA1402', name: 'Dynamics',                                    attendance: '6.7', week7: '24.00', week12: '17.00', semesterWork: '10.00', finalGrade: 'B+' },
  { code: 'ECE1101', name: 'Programming Fundamentals&Problem Solving',    attendance: '3.3', week7: '21.50', week12: '15.50', semesterWork: '8.00',  finalGrade: 'C+' },
  { code: 'EME1501', name: 'Engineering Drawing & Projection',            attendance: '6.7', week7: '22.00', week12: '18.00', semesterWork: '10.00', finalGrade: 'B'  },
  { code: 'UNR2101', name: 'Communication And Presentation Skills',       attendance: '10',  week7: '28.50', week12: '15.00', semesterWork: '10.00', finalGrade: 'B+' },
  { code: 'UNR1407', name: 'Academic Writing',                            attendance: '10',  week7: '23.00', week12: '16.00', semesterWork: '8.50',  finalGrade: 'C+' },
]

const sep2025Results = [
  { code: 'EBA2201', name: 'Differential Equations',                  attendance: '6.7', week7: '29.00', week12: '15.00', semesterWork: '10.00', finalGrade: 'B+' },
  { code: 'ECB2701', name: 'Construction Surveying 1',                attendance: '4.4', week7: '23.50', week12: '14.50', semesterWork: '9.00',  finalGrade: 'B-' },
  { code: 'ECB2401', name: 'Structural Analysis 1',                   attendance: '4.4', week7: '19.50', week12: '14.50', semesterWork: '10.00', finalGrade: 'B-' },
  { code: 'UNR4304', name: 'Introduction To Leadership',              attendance: '20',  week7: '30.00', week12: '20.00', semesterWork: '9.00',  finalGrade: 'A+' },
  { code: 'ECB2101', name: 'Introduction To Construction Management', attendance: '4.4', week7: '20.00', week12: '13.50', semesterWork: '10.00', finalGrade: 'B-' },
  { code: 'EEE2308', name: 'Electrical Engineering Fundementals',     attendance: '20',  week7: '23.00', week12: '15.00', semesterWork: '10.00', finalGrade: 'B+' },
  { code: 'ECB2501', name: 'Material Science & Properties',           attendance: '3.3', week7: '17.00', week12: '17.00', semesterWork: '8.00',  finalGrade: 'B-' },
]

const feb2026Results = [
  { code: 'ECB2202', name: 'Building Construction',                       attendance: '6.7', week7: '28.00', week12: '18.00', semesterWork: '9.00',  finalGrade: 'F'  },
  { code: 'ECB2801', name: 'Hydraulics Fundamentals',                     attendance: '11',  week7: '29.00', week12: '19.00', semesterWork: '7.00',  finalGrade: 'F'  },
  { code: 'ECB2402', name: 'Strength Of Materials',                       attendance: '8.9', week7: '30.00', week12: '20.00', semesterWork: '10.00', finalGrade: 'A+' },
  { code: 'EEE2404', name: 'Electrical Installations In Buildings',       attendance: '10',  week7: '29.00', week12: '19.00', semesterWork: '10.00', finalGrade: 'A' },
  { code: 'ECB2102', name: 'Introduction To Systems Analysis And Dec',    attendance: '13',  week7: '30.00', week12: '20.00', semesterWork: '10.00', finalGrade: 'A+' },
  { code: 'ECB2702', name: 'Introduction To Transportation Engineeri',    attendance: '13',  week7: '30.00', week12: '20.00', semesterWork: '9.00', finalGrade: 'A+' },
  { code: 'EBA2202', name: 'Vector And Complex Analysis',                 attendance: '3.3', week7: '29.00', week12: '20.00', semesterWork: '10.00',  finalGrade: 'A+'  },
]

const summer2026Results = [
  { code: 'ECB3602*', name: 'Soil Mechanics',        attendance: '0', week7: '26.00', week12: '17.00', semesterWork: '10.00', finalGrade: 'B+' },
  { code: 'ECB2202',  name: 'Building Construction', attendance: '0', week7: '24.00', week12: '20.00', semesterWork: '10.00', finalGrade: 'B+' },
]

export const semesters = [
  { id: 'sep-2024', label: 'سبتمبر 2024' },
  { id: 'feb-2025', label: 'فبراير 2025' },
  { id: 'sep-2025', label: 'سبتمبر 2025' },
  { id: 'feb-2026', label: 'فبراير 2026' },
  { id: 'summer-2026', label: 'صيف 2026' },
]

// Cumulative standing across every semester. The portal shows the same
// Total Achievement no matter which semester tab is selected, so it lives in
// one place and every semester references it.
const totalAchievement = { credit: 72.0, gpa: 3.0 }

export const semesterData = {
  'sep-2024': {
    results: sep2024Results,
    courses: buildCourses(sep2024Results),
    achievement: {
      semester: { credit: 18.0, gpa: 2.8 },
      total: { ...totalAchievement },
    },
  },
  'feb-2025': {
    results: feb2025Results,
    courses: buildCourses(feb2025Results),
    achievement: {
      semester: { credit: 18.0, gpa: 2.6 },
      total: { ...totalAchievement },
    },
  },
  'sep-2025': {
    results: sep2025Results,
    courses: buildCourses(sep2025Results),
    achievement: {
      semester: { credit: 18.0, gpa: 2.9 },
      total: { ...totalAchievement },
    },
  },
  'feb-2026': {
    results: feb2026Results,
    courses: buildCourses(feb2026Results),
    achievement: {
      semester: { credit: 12.0, gpa: 2.6 },
      total: { ...totalAchievement },
    },
  },
  'summer-2026': {
    results: summer2026Results,
    courses: buildCourses(summer2026Results),
    achievement: {
      semester: { credit: 6.0, gpa: 3.3 },
      total: { ...totalAchievement },
    },
  },
}

export const DEFAULT_SEMESTER_ID = 'summer-2026'

export const sidebarServices = [
  { id: 'student-results', label: 'Student Results', icon: 'graduation' },
  { id: 'student-schedule', label: 'Student Schedule', icon: 'list' },
  { id: 'clinic-reservation', label: 'Clinic Reservation', icon: 'medical' },
  { id: 'student-training', label: 'Student Training', icon: 'list' },
  { id: 'old-moodle', label: 'Old Moodle', icon: 'book' },
  { id: 'new-moodle', label: 'New Moodle', icon: 'book' },
  { id: 'submitted-portfolio', label: 'حافظة مقدم', icon: null, rtl: true },
  { id: 'unofficial-transcript', label: 'Unofficial Transcript', icon: null },
  { id: 'gpa-calculator', label: 'GPA Calculator', icon: null },
  { id: 'guidance-transcript', label: 'Guidance Transcript', icon: null },
  { id: 'clinic-reservation-2', label: 'Clinic Reservation', icon: null },
  { id: 'student-appeal', label: 'Student Appeal', icon: 'list' },
  { id: 'support', label: 'Support and inquiries', icon: null },
  { id: 'invoices', label: 'Invoices', icon: null },
  { id: 'e-payment', label: 'E-Payment', icon: 'card' },
  { id: 'questionnaire', label: 'Questionnaire', icon: 'check' },
  { id: 'minor-study', label: 'Minor Study', icon: null },
  { id: 'college-schedules', label: 'College Schedules', icon: null },
  { id: 'exam-schedule', label: 'Exam schedule', icon: null },
  { id: 'open-access', label: 'Open Access', icon: 'book' },
  { id: 'mail-activation', label: 'Mail Activation', icon: null },
  { id: 'student-update-data', label: 'Student Update Data', icon: 'list' },
  { id: 'student-bank-account', label: 'Student Bank Account', icon: 'list' },
  { id: 'open-free-bank-account', label: 'Open free bank Account', icon: 'card' },
  { id: 'statistics', label: 'Statistics', icon: 'chart' },
  { id: 'final-exam-excuse', label: 'Final exam excuse', icon: null },
  { id: 'aast-card-request', label: 'AAST Card Request', icon: null },
  { id: 'protect-data', label: 'احمي بياناتك : البريد الإلكتروني', icon: null, rtl: true },
  { id: 'student-council-voting', label: 'Student Council Voting', icon: null },
  { id: 'student-supplies', label: 'Student Supplies', icon: null },
]
