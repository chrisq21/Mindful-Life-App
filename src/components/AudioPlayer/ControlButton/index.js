import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import pauseBtnImgSrc from './images/pause-btn.png'
import playBtnImgSrc from './images/play-btn.png'

const ControlButton = ({ isPlayButton, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image resizeMode="contain" source={isPlayButton ? playBtnImgSrc : pauseBtnImgSrc} />
  </TouchableOpacity>
)

export default ControlButton
