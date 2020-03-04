import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { Video } from 'expo'
import { Audio } from 'expo-av'
import { MaterialIcons } from '@expo/vector-icons' // eslint-disable-line import/no-extraneous-dependencies
import Colors from '../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  controlBar: {
    alignItems: 'center',
    backgroundColor: Colors.blackHalfOpacity,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
  },
})

class VideoPlayer extends React.Component {
  state = {
    mute: false,
    shouldPlay: false,
  }

  componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: false,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
    })
  }

  handlePlayAndPause = () => {
    this.setState((prevState) => ({
      shouldPlay: !prevState.shouldPlay,
    }))
  }

  handleVolume = () => {
    this.setState((prevState) => ({
      mute: !prevState.mute,
    }))
  }

  render() {
    const { width, source } = this.props
    const { shouldPlay, mute } = this.state
    return (
      <View style={styles.container}>
        <View>
          <Video
            source={source}
            shouldPlay={shouldPlay}
            resizeMode="contain"
            style={{ width, aspectRatio: 1.78 }} // eslint-disable-line react-native/no-inline-styles
            isMuted={mute}
          />
          <View style={styles.controlBar}>
            <MaterialIcons
              name={shouldPlay ? 'pause' : 'play-arrow'}
              size={45}
              color="white"
              onPress={this.handlePlayAndPause}
            />
          </View>
        </View>
      </View>
    )
  }
}

VideoPlayer.propTypes = {
  width: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired,
}

export default VideoPlayer
