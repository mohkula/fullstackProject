import { Text as NativeText, StyleSheet } from 'react-native';


import theme from '../../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.font,   
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: 'black',
  },
  colorError:{
    color: 'red'
  },
  
  
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ color, fontSize, fontWeight, style,  ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' ? styles.colorTextSecondary : null,
    color === 'primary' ? styles.colorPrimary : null,
    color ==='error' ? styles.colorError: null,
    fontSize === 'subheading' ? styles.fontSizeSubheading : null,
    fontWeight === 'bold' ? styles.fontWeightBold : null,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;