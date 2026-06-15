/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        portal: {
          // Table & accent teal — matched from screenshot table header
          teal: '#2596be',
          tealDark: '#1f7a9c',
          tealDarker: '#0f5b78',
          // Sidebar
          sidebarBg: '#ffffff',
          sidebarHover: '#eaf4f9',
          sidebarActive: '#dbecf2',
          // Body / page
          pageBg: '#ffffff',
          rowAlt: '#eef0f2',
          rowHeadCell: '#d9dcdf',
          // Text
          textMain: '#2b2b2b',
          textMuted: '#6b7280',
          link: '#2596be',
          // Buttons / pills
          pill: '#9aa0a6',
          pillActive: '#3f4347',
          // Login Open Registration button
          coral: '#f17268',
          coralHover: '#df5a52',
          // GPA highlight orange
          gpaOrange: '#f5a623',
          // Borders
          borderSoft: '#e3e6e8',
          borderInput: '#d1d5db',
        },
      },
      fontFamily: {
        sans: [
          '"Segoe UI"',
          'Tahoma',
          'Geneva',
          'Verdana',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.06), 0 1px 1px rgba(0,0,0,0.04)',
        sidebar: '1px 0 2px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
}
