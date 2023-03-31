import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: "row",
    alignSelf: "center"
  },
  content: {
    flex: 1
  },
  header: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12
  },
  title: {
    fontFamily: theme.fonts.title_700,
    color: theme.colors.heading,
    fontSize: 18
  },
  footer: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between"
  },
  dateInfo: {
    flexDirection: "row",
    alignItems: "center"
  },
  date: {
    fontFamily: theme.fonts.text_500,
    color: theme.colors.heading,
    fontSize: 13,
    marginLeft: 7
  },
  category: {
    fontFamily: theme.fonts.text_400,
    color: theme.colors.hightlight,
    fontSize: 13,
  },
  playersInfo: {
    flexDirection: "row",
    alignItems: "center"
  },
  players: {
    fontFamily: theme.fonts.text_500,
    color: theme.colors.heading,
    fontSize: 13,
    marginLeft: 7,
  },
})