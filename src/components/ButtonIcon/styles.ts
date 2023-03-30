import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 20

  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: theme.colors.line
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: "center"
  },
})