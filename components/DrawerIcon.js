import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'

class DrawerIcon extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
          <Image style={styles.image} source={require('../assets/menu.png')} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    )
  }
}

DrawerIcon.propTypes = {
  navigation: PropTypes.shape({
    toggleDrawer: PropTypes.func.isRequired,
  }).isRequired,
}

export default DrawerIcon

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 25,
  },
})
