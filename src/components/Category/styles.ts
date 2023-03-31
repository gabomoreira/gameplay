import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 8,
    marginRight: 8
  },
  content: {
    width: 100,
    height: 116,
    backgroundColor: theme.colors.secondary_40,
    justifyContent: 'space-between',
    alignItems:  'center',
    paddingVertical: 7
  },
  check: {
    width: 12,
    height: 12,
    backgroundColor: theme.colors.secondary_100,
    alignSelf: 'flex-end',
    marginRight: 7,
    borderColor: theme.colors.secondary_50,
    borderWidth: 2,
    borderRadius: 3
  },
  checked: {
    width: 10,
    height: 10,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-end',
    marginRight: 7,
    borderRadius: 3
  },
  icon: {
    height: 48,
    width: 48,
    resizeMode: 'contain'
  },
  title: {
    fontFamily: theme.fonts.title_500,
    color: theme.colors.heading,
    fontSize: 15
  },
})