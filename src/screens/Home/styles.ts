import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import {getStatusBarHeight} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42
  },
  content: {
    flex: 1,
    marginTop: 42,
    paddingHorizontal: 24
  },
  matches: {
    marginTop: 24,
  }
})