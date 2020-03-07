import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import menuImgSrc from '../assets/menu.png'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 25,
  },
})

function DrawerIcon(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image style={styles.image} source={menuImgSrc} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  )
}

DrawerIcon.propTypes = {
  navigation: PropTypes.shape({
    toggleDrawer: PropTypes.func,
  }).isRequired,
}

export default DrawerIcon
