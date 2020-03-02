import React from 'react'
import { TouchableOpacity, View, Text, Button, StyleSheet, Image } from 'react-native'
import { ScreenContainerStyles } from '../styles/baseStyles'
import { Colors } from '../constants/colors'

export default class LanguageSelection extends React.Component {
  static navigationOptions = {
    title: 'Language',
    headerStyle: {
      backgroundColor: 'black',
      borderBottomWidth: 0,
    },
    headerTintColor: Colors.lightBlue,
    headerTitleStyle: {
      color: Colors.lightBlue,
    },
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={ScreenContainerStyles}>
        <TouchableOpacity
          style={[styles.sectionButton, { backgroundColor: Colors.blue }]}
          onPress={() => navigate('Home', { language: 'english' })}
        >
          <Text style={[styles.sectionText, { color: Colors.lightBlue }]}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sectionButton, { backgroundColor: Colors.red }]}
          onPress={() => navigate('Home', { language: 'spanish' })}
        >
          <Text style={[styles.sectionText, { color: Colors.lightRed }]}>Español</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sectionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingRight: 20,
    paddingLeft: 20,
  },
  sectionText: {
    color: 'white',
    flex: 2,
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 20,
  },
})
