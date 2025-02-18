import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		sm: '375px',
  		md: '768px',
  		lg: '1200px'
  	},
  	extend: {
  		container: {
  			center: true,
  			padding: {
  				DEFAULT: '20px',
  				lg: '80px'
  			}
  		},
  		keyframes: {
  			breath: {
  				'0%, 100%': {
  					transform: 'scale(0.95)'
  				},
  				'50%': {
  					transform: 'scale(1.1)'
  				}
  			},
  			glow: {
  				'0%': {
  					textShadow: '0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3)'
  				},
  				'50%': {
  					textShadow: '0 0 10px rgba(0, 255, 255, 1), 0 0 20px rgba(0, 255, 255, 1)'
  				},
  				'100%': {
  					textShadow: '0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3)'
  				}
  			}
  		},
  		animation: {
  			breath: 'breath 7s ease-in-out infinite',
  			glow: 'glow 1.5s ease-in-out infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;