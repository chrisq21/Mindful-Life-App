import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import Colors from '../../../styles/Colors'

const ControlBarWrapper = styled.View`
  width: 100%;
  background-color: ${Colors.blackHalfOpacity};
  flex-direction: row;
  justify-content: center;
`

function ControlBar({ isPlaying, toggleVideo }) {
  return (
    <ControlBarWrapper>
      <MaterialIcons
        name={isPlaying ? 'pause' : 'play-arrow'}
        size={45}
        color={Colors.white}
        onPress={toggleVideo}
      />
    </ControlBarWrapper>
  )
}

ControlBar.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  toggleVideo: PropTypes.func.isRequired,
}

export default ControlBar
