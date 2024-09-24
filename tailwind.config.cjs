/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "change-bg": "changebg 8s ease infinite",
        "change-radius": "animateImg 8s ease infinite alternate",
        "rotate": "rotate 8s ease infinite alternate-reverse"
      },
      screens: {
        'xsm': '405px',
        'xxsm': '320px',
      },
      keyframes: {
        changebg: {
          "0%": {
            // backgroundImage: "linear-gradient(to left bottom, #6830d4, #873ccf, #9e4acc, #b059c9, #bf6ac7, #b57ed7, #ab8fe2, #a49fea, #82b2f3, #6ec2f0, #72cee4, #8ad7d7)",

            backgroundPosition: "0% 50%",
          },
          "50%": {
            // backgroundImage: "linear-gradient(to top, #6830d4, #873ccf, #9e4acc, #b059c9, #bf6ac7, #b57ed7, #ab8fe2, #a49fea, #82b2f3, #6ec2f0, #72cee4, #8ad7d7)",
            backgroundPosition: "100% 50%",
          },
          "100%": {
            // backgroundImage: "linear-gradient(to left bottom, #e987df, #d693e9, #c39eef, #b3a7f1, #a6afee, #98b4ed, #8db8e9, #86bbe4, #76bddf, #6abfd7, #64c0cc, #64c0c0)",
            backgroundPosition: "0% 50%",
          },
        },
        animateImg: {
          "0%, 100%": {
            borderRadius: "50%",
          },
          "25%": {
            borderRadius: "30% 70% 50% 50% / 60% 60% 40% 40%",
          },
          "50%": {
            borderRadius: "50% 50% 70% 30% / 40% 40% 60% 60%"
          },
          "75%": {
            borderRadius: "70% 30% 50% 50% / 60% 60% 40% 40%"
          }
        },
        rotate: {
          "to": {
            transform: "rotate(360deg)",
          }
        }
      }
    },
  },
  plugins: [],
}
