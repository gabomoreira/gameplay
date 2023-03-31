import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { cateogries } from '../../utils/categories'
import GuildIcon from '../GuildIcon'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme'
import { AntDesign } from '@expo/vector-icons';

export type AppointmentProps = {
  id: string
  guild: {
    id: string
    name: string
    icon: null,
    owner: boolean
  },
  category: string
  date: string
  description: string
}

type Props = TouchableOpacityProps & {
  data: AppointmentProps
}

export default function Appointment({data, ...rest}: Props) {
  const [category] = cateogries.filter(item => item.id === data.category)
  const {owner} = data.guild
  const {primary, on} = theme.colors

  return (
   <TouchableOpacity {...rest}>
     <View style={styles.container}>
        <GuildIcon uri='https://github.com/gabomoreira.png' /> 

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {data.guild.name}
            </Text>

            <Text style={styles.category}>
              {category.title}
            </Text>
          </View>

          <View style={styles.footer}>
            
            <View style={styles.dateInfo}>
              <AntDesign name="calendar" size={16} color={primary} />

              <Text style={styles.date}>
                {data.date}
              </Text>
            </View>

            <View style={styles.playersInfo}>
              <Ionicons name='person' size={16} color={`${owner ? primary : on}`} />

              <Text style={
                [styles.players,
                {color: owner ? primary : on}
              ]}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>

          </View>
        </View>
      </View>
   </TouchableOpacity>
  )
}