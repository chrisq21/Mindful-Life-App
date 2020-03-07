import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { ScreenContainerStyles } from '../styles/baseStyles'
import Colors from '../constants/colors'

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
    color: Colors.white,
    flex: 2,
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 20,
  },
})

// TODO: What to do with navigationOptions?
// static navigationOptions = {
//   title: 'Language',
//   headerStyle: {
//     backgroundColor: 'black',
//     borderBottomWidth: 0,
//   },
//   headerTintColor: Colors.lightBlue,
//   headerTitleStyle: {
//     color: Colors.lightBlue,
//   },
// }

function LanguageSelection({ navigation }) {
  return (
    <View style={ScreenContainerStyles}>
      <TouchableOpacity
        style={[styles.sectionButton, { backgroundColor: Colors.blue }]}
        onPress={() => navigation.navigate('Home', { language: 'english' })}
      >
        <Text style={[styles.sectionText, { color: Colors.lightBlue }]}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.sectionButton, { backgroundColor: Colors.red }]}
        onPress={() => navigation.navigate('Home', { language: 'spanish' })}
      >
        <Text style={[styles.sectionText, { color: Colors.lightRed }]}>Español</Text>
      </TouchableOpacity>
    </View>
  )
}

LanguageSelection.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
}

export default LanguageSelection
