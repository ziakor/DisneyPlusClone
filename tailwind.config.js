module.exports = {
  // purge: [], // use this during development state
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ], // use this during production state
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {},
    extend: {
      colors: {
        blackPearl: '#040714',
        scienceBlue: '#0063E5',
        blueRibbon: '#016cf9',
      },
      width: {
        34: '8.5rem',
      },
      borderRadius: {
        ssm: '0.225rem',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
      },
      borderWidth: {
        1: '1px',
      },
      lineHeight: {
        11: '3rem',
        11.5: '3.25rem',
        12: '3.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
