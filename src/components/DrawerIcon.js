import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Image } from 'react-native'
import menuImgSrc from '../assets/menu.png'

import styled from 'styled-components'

const DrawerIconWrapper = styled(View)`
  align-items: center;
  margin-right: 10px;
`

const DrawerIcon = styled(Image)`
  width: 25px;
`

function DrawerIcon(props) {
  const { navigation } = props
  return (
    <DrawerIconWrapper>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <ImaDrawerIconge source={menuImgSrc} resizeMode="contain" />
      </TouchableOpacity>
    </DrawerIconWrapper>
  )
}

DrawerIcon.propTypes = {
  navigation: PropTypes.shape({
    toggleDrawer: PropTypes.func.isRequired,
  }).isRequired,
}

export default DrawerIcon
