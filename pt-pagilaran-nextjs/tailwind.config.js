/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Modern, smooth typefaces with enhanced readability
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Primary Colors (2-3 main colors)
        primary: {
          50: '#f0f9f4',
          100: '#dcf2e4',
          200: '#bce5cc',
          300: '#8dd1a7',
          400: '#57b76d',
          500: '#2d7738', // Main primary
          600: '#236030',
          700: '#1d4d28',
          800: '#1a3f23',
          900: '#16331e',
          950: '#0a1a0f',
        },
        // Secondary Colors (2-3 complementary colors)
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b', // Main secondary
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373', // Main neutral
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Accent Colors (1-2 highlight colors)
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308', // Main accent
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Success color
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        // Tea-inspired colors
        tea: {
          green: '#2d7738',
          gold: '#eab308',
          earth: '#92400e',
          cream: '#fef7ed',
          sage: '#84cc16',
        },
        pearl: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
        }
      },
      // Enhanced spacing system following 8px grid
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
        '2.5': '0.625rem',
      },
      // Grid system for layout alignment
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      // Enhanced animations with tea-inspired movements
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'leaf-float': 'leafFloat 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'scale-in': 'scaleIn 0.5s ease-out',
        'tea-leaf-dance': 'teaLeafDance 4s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        leafFloat: {
          '0%': { 
            transform: 'translateY(0px) rotate(0deg) scale(0.8)',
            opacity: '0.4'
          },
          '33%': { 
            transform: 'translateY(-15px) rotate(5deg) scale(1.0)',
            opacity: '0.6'
          },
          '66%': { 
            transform: 'translateY(-5px) rotate(-3deg) scale(1.2)',
            opacity: '0.5'
          },
          '100%': { 
            transform: 'translateY(0px) rotate(0deg) scale(0.8)',
            opacity: '0.4'
          },
        },
        teaLeafDance: {
          '0%': { 
            transform: 'rotate(0deg) scale(1)',
            filter: 'brightness(1)'
          },
          '25%': { 
            transform: 'rotate(2deg) scale(1.02)',
            filter: 'brightness(1.1)'
          },
          '50%': { 
            transform: 'rotate(0deg) scale(1.05)',
            filter: 'brightness(1.2)'
          },
          '75%': { 
            transform: 'rotate(-2deg) scale(1.02)',
            filter: 'brightness(1.1)'
          },
          '100%': { 
            transform: 'rotate(0deg) scale(1)',
            filter: 'brightness(1)'
          },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px) scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
      },
      // Enhanced shadows with 15-25% opacity and card shadows
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'large': '0 8px 32px rgba(0, 0, 0, 0.15)',
        'xl-soft': '0 12px 48px rgba(0, 0, 0, 0.18)',
        '2xl-soft': '0 16px 64px rgba(0, 0, 0, 0.20)',
        '3xl-soft': '0 24px 80px rgba(0, 0, 0, 0.25)',
        // Colored shadows
        'primary': '0 8px 32px rgba(45, 119, 56, 0.15)',
        'accent': '0 8px 32px rgba(234, 179, 8, 0.15)',
        'success': '0 8px 32px rgba(34, 197, 94, 0.15)',
        'gold': '0 8px 32px rgba(234, 179, 8, 0.15)',
        // Depth shadows
        'depth-1': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)',
        'depth-2': '0 4px 6px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)',
        'custom-hover': '0 10px 20px rgba(0, 0, 0, 0.2)',
        'depth-3': '0 10px 15px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.10)',
        'depth-4': '0 20px 25px rgba(0, 0, 0, 0.18), 0 10px 10px rgba(0, 0, 0, 0.12)',
        'depth-5': '0 25px 50px rgba(0, 0, 0, 0.25), 0 12px 24px rgba(0, 0, 0, 0.15)',
        '3d': '0 10px 15px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.10)',
        'tea': '0 20px 25px rgba(0, 0, 0, 0.18), 0 10px 10px rgba(0, 0, 0, 0.12)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        // Tea leaf specific shadows
        'tea-leaf': '0 8px 25px rgba(234, 179, 8, 0.3), 0 4px 12px rgba(45, 119, 56, 0.2)',
      },
      // Background gradients with 15-30% intensity
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, rgba(45, 119, 56, 0.15) 0%, rgba(234, 179, 8, 0.15) 100%)',
        'gradient-primary': 'linear-gradient(135deg, rgba(45, 119, 56, 0.20) 0%, rgba(35, 96, 48, 0.25) 100%)',
        'gradient-accent': 'linear-gradient(135deg, rgba(234, 179, 8, 0.20) 0%, rgba(202, 138, 4, 0.25) 100%)',
        'gradient-neutral': 'linear-gradient(135deg, rgba(248, 250, 252, 0.30) 0%, rgba(241, 245, 249, 0.20) 100%)',
        'gradient-depth': 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(0, 0, 0, 0.05) 100%)',
        // Tea leaf gradient
        'tea-leaf-gradient': 'linear-gradient(45deg, #eab308 0%, #ca8a04 30%, #a16207 70%, #2d7738 100%)',
        // High-resolution SVG Batik patterns
        'batik-pattern-1': "url('data:image/svg+xml,%3Csvg width=\"120\" height=\"120\" viewBox=\"0 0 120 120\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%232d7738\" fill-opacity=\"1\"%3E%3Cpath d=\"M60 60c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30zm-30-24c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm0 4c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20zm0 8c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12z\"%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'batik-pattern-2': "url('data:image/svg+xml,%3Csvg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23eab308\" fill-opacity=\"1\"%3E%3Cpath d=\"M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-16c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zm0 2c7.732 0 14 6.268 14 14s-6.268 14-14 14-14-6.268-14-14 6.268-14 14-14zm0 4c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10z\"%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'tea-pattern': "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M50 0C22.386 0 0 22.386 0 50c0 27.614 22.386 50 50 50s50-22.386 50-50C100 22.386 77.614 0 50 0zM50 10c22.091 0 40 17.909 40 40s-17.909 40-40 40-40-17.909-40-40 17.909-40 40-40zM50 20c16.569 0 30 13.431 30 30s-13.431 30-30 30-30-13.431-30-30 13.431-30 30-30zM50 30c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20zM50 40c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10z\" fill=\"%232d7738\" fill-opacity=\"0.1\"/%3E%3C/svg%3E')",
      },
      // Typography enhancements with proper contrast ratios
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.6', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.7', letterSpacing: '0.015em' }], // Minimum 16px
        'lg': ['1.125rem', { lineHeight: '1.7', letterSpacing: '0.015em' }],
        'xl': ['1.25rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.5', letterSpacing: '0.005em' }],
        '3xl': ['1.875rem', { lineHeight: '1.4', letterSpacing: '0' }],
        '4xl': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },
      fontWeight: {
        'light': '300',
        'normal': '400', // Body text
        'medium': '500',
        'semibold': '600', // Subheadings
        'bold': '700', // Headings
        'extrabold': '800',
        'black': '900',
      },
      // Responsive breakpoints for symmetry
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px', // Custom breakpoint for 1920x1080
      },
      // Border radius for consistent design
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        'DEFAULT': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        'full': '9999px',
        // Tea leaf shape
        'leaf': '50% 0% 50% 100%',
      },
      // Backdrop blur for depth
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      transitionProperty: {
        'transform-shadow': 'transform, box-shadow',
      },
      transitionTimingFunction: {
        'in-out': 'ease-in-out',
      },
    },
  },
  plugins: [],
};