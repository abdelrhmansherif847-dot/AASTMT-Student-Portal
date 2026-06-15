# AASTMT Student Portal — Demo Clone

A React + Tailwind CSS UI clone of the AASTMT Student Portal, built for an
academic assignment. Only the **Student Results** page is functional; every
other sidebar item shows a *Coming Soon* placeholder.

## Stack
- React 18 + Vite
- Tailwind CSS 3
- React Router 6

## Run locally
```bash
npm install
npm run dev
```
Then open <http://localhost:5173/>.

## Login (demo credentials)
- Registration Number: `241016032`
- Password: `688433`

## Project structure
```
src/
├── App.jsx                # Routes + auth gate
├── main.jsx               # Entry point
├── index.css              # Tailwind directives
├── data/
│   └── mockData.js        # Student, courses, grades, sidebar items
├── components/
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── DashboardLayout.jsx
│   ├── ResultsTable.jsx
│   ├── SemesterAchievement.jsx
│   ├── SemesterTabs.jsx
│   ├── ComingSoon.jsx
│   └── icons.jsx
└── pages/
    ├── Login.jsx
    ├── Home.jsx
    └── StudentResults.jsx
```

## Editing grades / GPA
All mock values live in `src/data/mockData.js`. Change `semesterResults`,
`semesterAchievement`, or `student.gpa` to update the portal's display.

## Notes
- This is a UI-only demo. There is no backend.
- Logos and the campus banner are placeholder SVGs.
