import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

import leeSin from '../../assets/leeSin.png'
import ButtonIcon from '../../components/ButtonIcon'
import Profile from '../../components/Profile'

export default function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Profile />
        </View>
    </View>
  )
}