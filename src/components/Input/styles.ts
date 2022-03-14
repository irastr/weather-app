import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { colors } from '../../styles/colors';


export const styles = StyleSheet.create<{
    inputContainer: ViewStyle;
    searchInput: ViewStyle;
    bottomDecoration: ViewStyle;
    searchIcon: TextStyle;
    searchIconTouchable: ViewStyle;
}>({
  inputContainer: {
    // flex: 1,
    height: 60,
    // backgroundColor: colors.primary,
    marginBottom: 50,
  },
  searchInput: {
    // flex: 1,
    height: 65,
    // margin: 12,
    padding: 10,
    borderRadius: 15,
    borderColor: colors.primary,
    borderWidth: 3,
    // position: 'absolute',
    backgroundColor: colors.light,
    fontSize: 26,
    paddingRight: 50,
  },
  bottomDecoration: {
    // flex: 1,
    height: 65,
    backgroundColor: colors.secondary,
    position: 'absolute',
    // alignSelf: 'center',
    top: '7%',
    borderRadius: 15,
    width: '100%',
  },
  searchIcon: {
    fontSize: 30,
  },
  searchIconTouchable: {
    position: 'absolute',
    top: 15,
    right: 20,
  },
});
