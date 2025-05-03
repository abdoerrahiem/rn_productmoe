/* eslint-disable quotes */
const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sf-regular': 'SfProDisplay-Regular',
        'sf-bold': 'SfProDisplay-Bold',
        'sf-light': 'SfProDisplay-Light',
        'sf-medium': 'SfProDisplay-Medium',
        'sf-semibold': 'SfProDisplay-Semibold',
      },
      colors: {
        primary: {
          100: '#FFE5E4',
          200: '#FFBAB9',
          300: '#FF908E',
          400: '#FF6563',
          500: '#FE3230',
        },
        secondary: {
          100: '#FDECD3',
          200: '#F4CA8D',
          300: '#EFB35C',
          400: '#E89317',
          500: '#BA7512',
        },
        alert: {
          success: '#02B15A',
          warning: '#F7C64F',
          error: '#ED544E',
        },
        grey: {
          100: '#FFFFFF',
          200: '#F7F7F8',
          300: '#E7E7E8',
          400: '#CCCDCE',
          500: '#AFAFB0',
          600: '#878788',
          700: '#5F6060',
          800: '#373839',
          900: '#0F1011',
          background: '#F5F5F5',
        },
      },
    },
  },
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({});
    }),
  ],
};
