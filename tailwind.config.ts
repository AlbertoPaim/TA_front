import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-background': "url('/assets/background.jpg')",
        'propostas-backgound': "url('/assets/propostas.jpg')",
      },

    },
  },
  plugins: [],
};
export default config;

