import React from 'react'
import MainNavigator from './MainNavigator'
import { createDrawerNavigator } from '@react-navigation/drawer'
import About from '../components/About'

const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={About} drawerPosition="right">
      <Drawer.Screen name="Main" component={MainNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
