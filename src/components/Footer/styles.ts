import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { colors } from '../../styles/colors';


export const styles = StyleSheet.create<{
    bottomBar: ViewStyle;
    homeIcon: TextStyle;
    homeIconContainer: ViewStyle;
    bottomDecoration: ViewStyle;
}>({
  bottomBar: {
    height: 50,
    backgroundColor: colors.primary,
  },
  homeIconContainer: {
    height: 60,
    width: 60,
    backgroundColor: '#fff',
    position: 'absolute',
    alignSelf: 'center',
    borderWidth: 3,
    bottom: '50%',
    borderRadius: 20,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeIcon: {
    fontSize: 30,
  },
  bottomDecoration: {
    height: 60,
    width: 60,
    backgroundColor: colors.secondary,
    position: 'absolute',
    alignSelf: 'center',
    bottom: '40%',
    borderRadius: 20,
  },
});
