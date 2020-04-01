import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Video } from 'expo-av'
import ControlBar from './ControlBar'
import LoadingImageSrc from './assets/loading-image.png'

function VideoPlayer({ source }) {
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleVideo = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <View>
      <Video
        source={source}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay={isPlaying}
        isLooping
        style={{ width: '100%', aspectRatio: 1.78 }}
        usePoster={true}
        posterSource={LoadingImageSrc}
        posterStyle={{ height: '100%', width: '100%' }}
      />
      <ControlBar isPlaying={isPlaying} toggleVideo={toggleVideo} />
    </View>
  )
}

VideoPlayer.propTypes = {
  source: PropTypes.number.isRequired,
}

export default VideoPlayer
