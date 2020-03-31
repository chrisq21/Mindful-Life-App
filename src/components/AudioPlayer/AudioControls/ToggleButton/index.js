import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import pauseBtnImgSrc from './images/pause-btn.png'
import playBtnImgSrc from './images/play-btn.png'

/**
 * Play and Pause button
 */

const ToggleButton = ({ isPlayButton, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image resizeMode="contain" source={isPlayButton ? playBtnImgSrc : pauseBtnImgSrc} />
  </TouchableOpacity>
)

ToggleButton.propTypes = {
  isPlayButton: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default ToggleButton
