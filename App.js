import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppNavigator from './navigation/AppNavigator'

export default class App extends React.Component {
  render() {
    return <AppNavigator />
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    fontFamily: 'Aclonica',
    justifyContent: 'center',
  },
})
