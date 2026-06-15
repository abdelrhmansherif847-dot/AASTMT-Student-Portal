export const student = {
  name: 'Abdelrahman Sherif Mohamed Hassan Desouky',
  registrationNumber: '241016032',
  email: 'abdelrahman.sherif@aast.edu',
  college: 'College of Engineering and Technology',
  major: 'Construction & Building Engineering',
  avatar: '/avatar.svg',
}

export const credentials = {
  username: '241016032',
  password: '688433',
}

const passedFromGrade = (grade) =>
  grade && grade !== 'F' && grade !== 'U' && grade !== 'I'

const buildCourses = (results) =>
  results.map((r) => ({
    code: r.code,
    name: r.name,
    passed: passedFromGrade(r.finalGrade),
  }))

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
  { code: 'EBA1104', name: 'Physics II',                                  attendance: '17',  week7: '16.00', week12: '14.00', semesterWork: '10.00', finalGrade: 'C+' },
  { code: 'EBA1204', name: 'Calculus II',                                 attendance: '29',  week7: '20.00', week12: '16.00', semesterWork: '10.00', finalGrade: 'B'  },
  { code: 'EBA1402', name: 'Dynamics',                                    attendance: '6.7', week7: '24.00', week12: '17.00', semesterWork: '10.00', finalGrade: 'B+' },
  { code: 'ECE1101', name: 'Programming Fundamentals & Problem Solving',  attendance: '3.3', week7: '21.50', week12: '15.50', semesterWork: '8.00',  finalGrade: 'C+' },
  { code: 'EME1501', name: 'Engineering Drawing & Projection',            attendance: '6.7', week7: '22.00', week12: '18.00', semesterWork: '10.00', finalGrade: 'B'  },
  { code: 'UNR2101', name: 'Communication And Presentation Skills',       attendance: '10',  week7: '28.50', week12: '15.00', semesterWork: '10.00', finalGrade: 'B+' },
  { code: 'UNR1407', name: 'Academic Writing',                            attendance: '10',  week7: '23.00', week12: '16.00', semesterWork: '8.50',  finalGrade: 'C+' },
]

const sep2025Results = [
  { code: 'EBA2201', name: 'Differential Equations',                  attendance: '', week7: '29.00', week12: '15.00', semesterWork: '10.00', finalGrade: 'B+' },
  { code: 'ECB2701', name: 'Construction Surveying 1',                attendance: '', week7: '23.50', week12: '14.50', semesterWork: '9.00',  finalGrade: 'B-' },
  { code: 'ECB2401', name: 'Structural Analysis 1',                   attendance: '', week7: '19.50', week12: '14.50', semesterWork: '10.00', finalGrade: 'B-' },
  { code: 'UNR4304', name: 'Introduction To Leadership',              attendance: '', week7: '30.00', week12: '20.00', semesterWork: '9.00',  finalGrade: 'A+' },
  { code: 'ECB2101', name: 'Introduction To Construction Management', attendance: '', week7: '20.00', week12: '13.50', semesterWork: '10.00', finalGrade: 'B-' },
  { code: 'EEE2308', name: 'Electrical Engineering Fundamentals',     attendance: '', week7: '23.00', week12: '15.00', semesterWork: '10.00', finalGrade: 'B+' },
  { code: 'ECB2501', name: 'Material Science & Properties',           attendance: '', week7: '17.00', week12: '17.00', semesterWork: '8.00',  finalGrade: 'B-' },
]

const feb2026Results = [
  { code: 'ECB2202', name: 'Building Construction',                       attendance: '6.7', week7: '28.00', week12: '18.00', semesterWork: '9.00',  finalGrade: 'A'  },
  { code: 'ECB2801', name: 'Hydraulics Fundamentals',                     attendance: '11',  week7: '29.00', week12: '19.00', semesterWork: '7.00',  finalGrade: 'F'  },
  { code: 'ECB2402', name: 'Strength Of Materials',                       attendance: '8.9', week7: '30.00', week12: '20.00', semesterWork: '10.00', finalGrade: 'A+' },
  { code: 'EEE2404', name: 'Electrical Installations In Buildings',       attendance: '10',  week7: '30.00', week12: '20.00', semesterWork: '10.00', finalGrade: 'A+' },
  { code: 'ECB2102', name: 'Introduction To Systems Analysis And Design', attendance: '13',  week7: '30.00', week12: '20.00', semesterWork: '10.00', finalGrade: 'A+' },
  { code: 'ECB2702', name: 'Introduction To Transportation Engineering',  attendance: '13',  week7: '30.00', week12: '20.00', semesterWork: '10.00', finalGrade: 'A+' },
  { code: 'EBA2202', name: 'Vector And Complex Analysis',                 attendance: '3.3', week7: '29.00', week12: '18.00', semesterWork: '8.00',  finalGrade: 'A'  },
]

export const semesters = [
  { id: 'feb-2026', label: 'فبراير 2026' },
  { id: 'sep-2025', label: 'سبتمبر 2025' },
  { id: 'feb-2025', label: 'فبراير 2025' },
  { id: 'sep-2024', label: 'سبتمبر 2024' },
]

export const semesterData = {
  'sep-2024': {
    results: sep2024Results,
    courses: buildCourses(sep2024Results),
    achievement: {
      semester: { credit: 0.0, gpa: 0.0 },
      total: { credit: 0.0, gpa: 0.0 },
    },
  },
  'feb-2025': {
    results: feb2025Results,
    courses: buildCourses(feb2025Results),
    achievement: {
      semester: { credit: 0.0, gpa: 0.0 },
      total: { credit: 0.0, gpa: 0.0 },
    },
  },
  'sep-2025': {
    results: sep2025Results,
    courses: buildCourses(sep2025Results),
    achievement: {
      semester: { credit: 0.0, gpa: 0.0 },
      total: { credit: 54.0, gpa: 2.9 },
    },
  },
  'feb-2026': {
    results: feb2026Results,
    courses: buildCourses(feb2026Results),
    achievement: {
      semester: { credit: 15.0, gpa: 3.3 },
      total: { credit: 69.0, gpa: 3.1 },
    },
  },
}

export const DEFAULT_SEMESTER_ID = 'feb-2026'

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
