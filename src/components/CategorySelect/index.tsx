import React, { useState } from 'react'
import  {ScrollView} from 'react-native'
import { styles } from './styles'
import {MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'
import { cateogries } from '../../utils/categories'
import Category from '../Category'


type Props = {
  categorySelected: string
  handleCategorySelect: (id: string) => void
  hasCheckBox?: boolean
}

export default function CategorySelect({
  categorySelected, 
  handleCategorySelect,
  hasCheckBox = false
}: Props) {
  return (
    <ScrollView 
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingRight: 40
      }}
    >
      {
        cateogries.map(category => (
          <Category 
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
            onPress={() => handleCategorySelect(category.id)}
            hasCheckedBox={hasCheckBox}
          />
        ))
      }
    </ScrollView>
  )
}