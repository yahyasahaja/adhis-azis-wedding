module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.vue',
    ],
    options: {
      safelist: ['bg-indigo-300', 'bg-pink-300', 'bg-green-300', 'bg-red-300'],
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    }
  },
  variants: {
    extend: {
      padding: ['hover'],
    }
  },
  plugins: [],
}
