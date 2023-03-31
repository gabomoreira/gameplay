import { View, Text, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'

import leeSin from '../../assets/leeSin.png'
import ButtonIcon from '../../components/ButtonIcon'
import Profile from '../../components/Profile'
import ButtonAdd from '../../components/ButtonAdd'
import CategorySelect from '../../components/CategorySelect'
import ListHeader from '../../components/ListHeader'
import Appointment from '../../components/Appointment'
import Line from '../../components/Line'
import Background from '../../components/Background'

const mockedAppointments = [
  {
    id: '1',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    category: '1',
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida na md10'
  },
  {
    id: '2',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    category: '1',
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida na md10'
  },
  {
    id: '3',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    category: '1',
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida na md10'
  },
  {
    id: '4',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    category: '1',
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida na md10'
  },
  {
    id: '5',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    category: '1',
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida na md10'
  },
  {
    id: '6',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    category: '1',
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida na md10'
  },
]

export default function Home() {
  const [categorySelected, setCategorySelected] = useState('1')

  function handleCategorySelect(id: string) {
    categorySelected === id ? setCategorySelected('') : setCategorySelected(id)
    
  }

  return (
    <Background>
        <View style={styles.header}>
            <Profile />

            <ButtonAdd />
        </View>

        <View>
          <CategorySelect 
            categorySelected={categorySelected}
            handleCategorySelect={handleCategorySelect}
          />
        </View>

        <View style={styles.content}>
          <ListHeader title='Partidas agendadas' subtitle='Total 6' />

          <FlatList 
            data={mockedAppointments}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Appointment data={item} />
            )}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <Line />}
          />
        </View>
    </Background>
  )
}