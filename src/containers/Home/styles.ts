import {
  StyleSheet, TextStyle, ViewStyle, ImageStyle
} from 'react-native';

import { colors } from '../../styles/colors';


export const styles = StyleSheet.create<{
    container: ViewStyle;
    contentContainer: ViewStyle;
    image: ImageStyle;
    description: TextStyle;
    temp: TextStyle;
    range: TextStyle;
}>({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
    backgroundColor: colors.background,
    paddingHorizontal: 10,
    flex: 1,
  },
  image: {
    resizeMode: 'contain',
    height: 200,
    zIndex: -1,
  },
  description: {
    marginBottom: 30,
    fontSize: 26,
    textAlign: 'center',
    zIndex: -1,
  },
  temp: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 5,
    zIndex: -1,
  },
  range: {
    textAlign: 'center',
    zIndex: -1,
  },

});
