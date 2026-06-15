/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        portal: {
          header: '#1c8db0',
          headerDark: '#0f6f8c',
          tableHead: '#1c8db0',
          sidebar: '#ffffff',
          sidebarHover: '#e8f4f9',
          sidebarActive: '#d8edf4',
          accent: '#f5a623',
          accentOrange: '#f5a623',
          textPrimary: '#333333',
          textSecondary: '#6b7280',
          link: '#1c8db0',
          border: '#e5e7eb',
          rowAlt: '#f4f6f8',
          pageBg: '#f7fafc',
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
}
