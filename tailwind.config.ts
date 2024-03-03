import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: "#000235",
            secondary: "#8080D7",
            accent: "#AAD9D9",
            dimWhite: "rgba(255, 255, 255, 0.7)",
            dimBlue: "rgba(9, 151, 124, 0.1)",
            featured: "rgba(99, 88, 189, 0.19)",
         },
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
      },
   },
   plugins: [],
};
export default config;
