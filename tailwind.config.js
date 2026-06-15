/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        portal: {
          // Brand
          primary: '#0095C8',
          navy: '#1A2F6B',
          light: '#58C5E6',
          tabSelected: '#0A95D1',
          // Table teal header
          teal: '#0a8bb2',
          tealLight: '#58c5e6',
          // Page
          pageBg: '#dce2e8',
          cardBg: '#ffffff',
          rowAlt: '#eef0f2',
          rowDarker: '#d9dcdf',
          // Sidebar
          sidebarBg: '#ffffff',
          sidebarHover: '#eaf4f9',
          sidebarActive: '#dbecf2',
          // Text
          textMain: '#222222',
          textMuted: '#666666',
          textLight: '#9aa0a6',
          // Tabs
          tabInactive: '#6f737a',
          // States
          success: '#a8c772',
          successBg: '#ddeac6',
          warning: '#f2a100',
          danger: '#e53935',
          // Notif
          notifBadge: '#5cc6e8',
          // Coral (Open Registration)
          coral: '#f17268',
          coralHover: '#df5a52',
          // GPA Orange
          gpaOrange: '#f2a100',
          // Borders
          borderSoft: '#c7ced6',
          borderLight: '#e3e6e8',
          borderInput: '#d1d5db',
        },
      },
      fontFamily: {
        sans: [
          '"Segoe UI"',
          'Tahoma',
          'Arial',
          'Helvetica',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
        cardHover: '0 4px 12px rgba(0,0,0,0.12)',
        sidebar: '1px 0 2px rgba(0,0,0,0.04)',
        panel: '0 8px 24px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
