module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: 'class',
  corePlugins: {
    container: true
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({

        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1150px',
          },
          '@screen 2xl': {
            maxWidth: '1280px',
          },


        }

      })
    }
  ],
  theme: {

    extend: {
      container: {
        center: true,
        padding: '1rem',
      },

      colors: {
       
        blue: {
          700: '#003A96',
          600: '#010e30',
          500: '#010E30',
          400: '#038AE6',
          300: '#092f59',
        },

       
       
        
      },

      boxShadow: {
        'xl': '0px 4px 36px 0px #f89096;',
        '2xl': '0px 4px 36px 0px #59cbb7;',
        '3xl': '0 6px 12px 0 rgba(0,0,0,.05)',

       

      },

      backgroundImage: {
        "curved-blue-gradient": "url(/imagenes/precios/curved-blue-gradient-bg.svg)",
        "blue-cyan-gradient": "linear-gradient(90deg, #C84E89 0%, #F15F79 100%);",
        "border-gradient": "linear-gradient(90deg, #C84E89 0%, #F15F79 100%);",
        "instagram-gradient": "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);",

      },

      placeholderColor: theme => theme('colors'),
      placeholderColor: {
        "coolGray-600": "#4B5563",
      },
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),

      }),
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',

      },

     
     

      
 
    },
  },
  // Other stuff
};