export const student = {
  name: 'Abdelrahman Sherif Mohamed Hassan Desouky',
  registrationNumber: '241016032',
  email: 'abdelrahman.sherif@aast.edu',
  college: 'College of Engineering and Technology',
  major: 'Construction & Building Engineering',
  gpa: 2.5,
  creditsAchieved: 54.0,
  avatar: '/avatar.svg',
}

export const credentials = {
  username: '241016032',
  password: '688433',
}

export const semesters = [
  { id: '2026-feb', label: 'فبراير 2026', active: true },
  { id: '2025-sep', label: 'سبتمبر 2025', active: false },
  { id: '2025-feb', label: 'فبراير 2025', active: false },
  { id: '2024-sep', label: 'سبتمبر 2024', active: false },
]

export const courses = [
  { code: 'EBA2202', name: 'Vector And Complex Analysis', passed: true },
  { code: 'ECB2402', name: 'Strength Of Materials', passed: true },
  { code: 'ECB2801', name: 'Hydraulics Fundamentals', passed: false },
  { code: 'ECB2202', name: 'Building Construction', passed: false },
  { code: 'ECB2702', name: 'Introduction To Transportation Engineeri', passed: false },
  { code: 'ECB2102', name: 'Introduction To Systems Analysis And Dec', passed: false },
  { code: 'EEE2404', name: 'Electrical Installations In Buildings', passed: false },
]

export const semesterResults = [
  {
    code: 'EBA2202',
    name: 'Vector And Complex Analysis',
    attendance: '3.3',
    week7: 'U',
    week12: 'U',
    semesterWork: 'U',
    finalGrade: 'U',
  },
  {
    code: 'ECB2402',
    name: 'Strength Of Materials',
    attendance: '8.9',
    week7: '29.00',
    week12: '12.00',
    semesterWork: '9.00',
    finalGrade: 'U',
  },
  {
    code: 'ECB2801',
    name: 'Hydraulics Fundamentals',
    attendance: '11',
    week7: '11.00',
    week12: '12.50',
    semesterWork: '5.50',
    finalGrade: 'U',
  },
  {
    code: 'ECB2202',
    name: 'Building Construction',
    attendance: '6.7',
    week7: 'U',
    week12: 'U',
    semesterWork: 'U',
    finalGrade: 'U',
  },
  {
    code: 'ECB2702',
    name: 'Introduction To Transportation Engineeri',
    attendance: '13',
    week7: 'U',
    week12: 'U',
    semesterWork: 'U',
    finalGrade: 'U',
  },
  {
    code: 'ECB2102',
    name: 'Introduction To Systems Analysis And Dec',
    attendance: '13',
    week7: 'U',
    week12: 'U',
    semesterWork: 'U',
    finalGrade: 'U',
  },
  {
    code: 'EEE2404',
    name: 'Electrical Installations In Buildings',
    attendance: '10',
    week7: 'U',
    week12: 'U',
    semesterWork: 'U',
    finalGrade: 'U',
  },
]

export const semesterAchievement = {
  semester: { credit: 0.0, gpa: 0.0 },
  total: { credit: 54.0, gpa: 2.5 },
}

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
