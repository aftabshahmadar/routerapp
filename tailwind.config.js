/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ,
  ],
  theme: {
    
    container: {
      center: true,
      padding: '2rem',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {
      margine: {
        '-ms-0.5': '-0.125rem',        // Equivalent to margin-start: -0.125rem; /* -2px */
        '-ms-1': '-0.25rem',           // Equivalent to margin-start: -0.25rem; /* -4px */
        '-ms-1.5': '-0.375rem',         // Equivalent to margin-start: -0.375rem; /* -6px */
        '-ms-2': '-0.5rem',            // Equivalent to margin-start: -0.5rem; /* -8px */
        '-ms-2.5': '-0.625rem',        // Equivalent to margin-start: -0.625rem; /* -10px */
        '-ms-3': '-0.75rem',           // Equivalent to margin-start: -0.75rem; /* -12px */
        '-ms-3.5': '-0.875rem',        // Equivalent to margin-start: -0.875rem; /* -14px */
        '-ms-4': '-1rem',              // Equivalent to margin-start: -1rem; /* -16px */
        '-ms-5': '-1.25rem',           // Equivalent to margin-start: -1.25rem; /* -20px */
        '-ms-6': '-1.5rem',            // Equivalent to margin-start: -1.5rem; /* -24px */
        '-ms-7': '-1.75rem',           // Equivalent to margin-start: -1.75rem; /* -28px */
        '-ms-8': '-2rem',              // Equivalent to margin-start: -2rem; /* -32px */
        '-ms-9': '-2.25rem',           // Equivalent to margin-start: -2.25rem; /* -36px */
        '-ms-10': '-2.5rem',           // Equivalent to margin-start: -2.5rem; /* -40px */
        '-ms-11': '-2.75rem',          // Equivalent to margin-start: -2.75rem; /* -44px */
        '-ms-12': '-3rem',             // Equivalent to margin-start: -3rem; /* -48px */
        '-ms-14': '-3.5rem',           // Equivalent to margin-start: -3.5rem; /* -56px */
        '-ms-16': '-4rem',             // Equivalent to margin-start: -4rem; /* -64px */
        '-ms-20': '-5rem',             // Equivalent to margin-start: -5rem; /* -80px */
        '-ms-24': '-6rem',             // Equivalent to margin-start: -6rem; /* -96px */
        '-ms-28': '-7rem',             // Equivalent to margin-start: -7rem; /* -112px */
        '-ms-32': '-8rem',             // Equivalent to margin-start: -8rem; /* -128px */
        '-ms-36': '-9rem',             // Equivalent to margin-start: -9rem; /* -144px */
        '-ms-40': '-10rem',            // Equivalent to margin-start: -10rem; /* -160px */
        '-ms-44': '-11rem',            // Equivalent to margin-start: -11rem; /* -176px */
        '-ms-48': '-12rem',            // Equivalent to margin-start: -12rem; /* -192px */
        '-ms-52': '-13rem',            // Equivalent to margin-start: -13rem; /* -208px */
        '-ms-56': '-14rem',            // Equivalent to margin-start: -14rem; /* -224px */
        '-ms-60': '-15rem',            // Equivalent to margin-start: -15rem; /* -240px */
        '-ms-64': '-16rem',            // Equivalent to margin-start: -16rem; /* -256px */
        '-ms-72': '-18rem',            // Equivalent to margin-start: -18rem; /* -288px */
        '-ms-80': '-20rem',            // Equivalent to margin-start: -20rem; /* -320px */
        '-ms-96': '-24rem', 
      },
      spacing: {
        '112': '28rem',
        '128': '32rem',
      },
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      flex: {
        '2': '2 2 0%'
      },
      width: {
        '128': '32rem',
      },
      colors: {
        'regal-blue': '#243c5a',
      },

    },
  },
  plugins: [],
}

