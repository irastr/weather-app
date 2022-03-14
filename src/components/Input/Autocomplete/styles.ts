import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { colors } from '../../../styles/colors';


export const styles = StyleSheet.create<{
  historyContainer: ViewStyle;
  historyTitle: TextStyle;
  historyOption: TextStyle;
}>({
  historyContainer: {
    backgroundColor: colors.secondary,
    padding: 5,
    borderRadius: 15,
    position: 'absolute',
    width: '100%',
    top: 75,
    zIndex: 0,
    maxHeight: 500,
  },
  historyTitle: {
    marginBottom: 20,
    color: colors.light,
    fontWeight: '700',
    fontSize: 12,
  },
  historyOption: {
    fontSize: 20,
    marginBottom: 20,
    color: colors.light,
  },
});
