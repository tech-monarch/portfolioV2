/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [import("daisyui")],
  daisyui: {
    themes: [
      {
        black: {
          primary: "oklch(35% 0 0)",
          "primary-content": "oklch(100% 0 0)",
          secondary: "oklch(35% 0 0)",
          "secondary-content": "oklch(100% 0 0)",
          accent: "oklch(35% 0 0)",
          "accent-content": "oklch(100% 0 0)",
          neutral: "oklch(35% 0 0)",
          "neutral-content": "oklch(100% 0 0)",
          "base-100": "oklch(0% 0 0)",
          "base-200": "oklch(19% 0 0)",
          "base-300": "oklch(22% 0 0)",
          "base-content": "oklch(87.609% 0 0)",
          info: "oklch(45.201% 0.313 264.052)",
          "info-content": "oklch(89.04% 0.062 264.052)",
          success: "oklch(51.975% 0.176 142.495)",
          "success-content": "oklch(90.395% 0.035 142.495)",
          warning: "oklch(96.798% 0.211 109.769)",
          "warning-content": "oklch(19.359% 0.042 109.769)",
          error: "oklch(62.795% 0.257 29.233)",
          "error-content": "oklch(12.559% 0.051 29.233)",
        },
      },
    ],
    darkTheme: "black",
  },
};
