import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import { View } from "react-native"
import { theme } from "../../global/styles/theme"
import { styles } from "./styles"


type Props = {
    children: React.ReactNode
}

export default function Background({children}: Props) {
    const {secondary_100, secondary_80} = theme.colors

  return (
    <LinearGradient 
        style={styles.container}
        colors={[secondary_80, secondary_100]}
    >
        {children}
    </LinearGradient>
  )
}