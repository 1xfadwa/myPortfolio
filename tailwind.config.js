/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#153440",
        dark2: "#1D4259",
        accent: "#7B92A6",
        light: "#F0F0F2",
        neutral: "#BFBFBF",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
        arabic: ["Tajawal", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        pulse2: {
          "0%, 100%": { opacity: 0.3 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatSlow: "float 7s ease-in-out infinite",
        pulse2: "pulse2 2.2s ease-in-out infinite",
      },
      maxWidth: {
        container: "1180px",
      },
    },
  },
  plugins: [],
};
