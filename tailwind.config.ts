import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,css,module.css,styles.module.css}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,css,module.css,styles.module.css}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css,module.css,styles.module.css}",
    "./src/**/*.{js,ts,jsx,tsx,mdx,css,module.css,styles.module.css}, './src/**/*.{html,js,ts,jsx,tsx,css,module.css,styles.module.css}'",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          "99": "#FFFAFA",
          "95": "#FFE5E5",
          "90": "#FFCCCC",
          "80": "#FF9999",
          "60": "#FF3333",
          "55": "#FF1919",
          "50": "#FF0000",
          "45": "#E50000",
        },
        black: {
          "30": "#4C4C4C",
          "25": "#404040",
          "20": "#333333",
          "15": "#262626",
          "12": "#1F1F1F",
          "10": "#1A1A1A",
          "08": "#141414",
          "06": "#0F0F0F",
        },
        grey: {
          "60": "#999999",
          "65": "#A6A6A6",
          "70": "#B3B3B3",
          "75": "#BFBFBF",
          "90": "#E4E4E7",
          "95": "#F1F1F3",
          "97": "#F7F7F8",
          "99": "#FCFCFD",
        },
      },
      backgroundImage: {
        heroBackground: 'url("/hero.png")',
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1921px",
      },
      fontFamily: {
        "font-manrope": ["var(--font-manrope)"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate, typography],
} satisfies Config;
