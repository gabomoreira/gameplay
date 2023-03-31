import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  user: {
    flexDirection: "row",
  },
  greeting: {
    fontFamily: theme.fonts.title_500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6
  },
  username: {
    fontFamily: theme.fonts.title_700,
    fontSize: 24,
    color: theme.colors.heading
  },
  message: {
    fontFamily: theme.fonts.text_400,
    color: theme.colors.hightlight
  }
})