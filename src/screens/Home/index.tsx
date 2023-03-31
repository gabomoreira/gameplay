import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'

import leeSin from '../../assets/leeSin.png'
import ButtonIcon from '../../components/ButtonIcon'
import Profile from '../../components/Profile'
import ButtonAdd from '../../components/ButtonAdd'
import CategorySelect from '../../components/CategorySelect'

export default function Home() {
  const [categorySelected, setCategorySelected] = useState('1')

  function handleCategorySelect(id: string) {
    categorySelected === id ? setCategorySelected('') : setCategorySelected(id)
    
  }

  return (
    <View style={styles.container}>
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
    </View>
  )
}