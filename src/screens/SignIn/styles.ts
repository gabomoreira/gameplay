import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background
  },
  image: {
    width: '90%',
    height: 360,
    resizeMode: 'contain'
  },
  title: {
    color: theme.colors.heading,
    textAlign: "center",
    fontSize: 40,
    marginBottom: 16
  },
  subtitle: {
    color: theme.colors.heading,
    textAlign: "center",
    fontSize: 15,
    marginBottom: 64
  },
  content: {
    marginTop: -40,
    marginHorizontal: 50
  }
})