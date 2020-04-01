import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Video } from 'expo-av'

function VideoPlayer({ source }) {
  return (
    <View>
      <Video
        source={source}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay
        isLooping
        style={{ width: '100%', aspectRatio: 1.78 }}
      />
    </View>
  )
}

VideoPlayer.propTypes = {
  source: PropTypes.number.isRequired,
}

export default VideoPlayer
