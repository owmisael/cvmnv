/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      backgroundColor: {
        'mirage': {
                  '50': '#f0f7fe',
                  '100': '#deecfb',
                  '200': '#c4e0f9',
                  '300': '#9cccf4',
                  '400': '#6dafed',
                  '500': '#4b90e6',
                  '600': '#3v674da',
                  '700': '#2d60c8',
                  '800': '#2a4fa3',
                  '900': '#274481',
                  '950': '#0f172a',
          },
      
      },
    },
	},
	plugins: [],
}