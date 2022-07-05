
import {Platform } from 'react-native';

const theme = {
    colors: {
      textPrimary: 'white',
      textSecondary: '#586069',
      primary: '#0366d6',
    },
    fontSizes: {
      body: 30,
      subheading: 16,
    },
    fonts: {
      font: Platform.select({
        main: 'Sans-serif',
        android: 'Roboto',
        ios: 'Arial',
        default: 'System'
      }),

    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
  };
  
  export default theme;