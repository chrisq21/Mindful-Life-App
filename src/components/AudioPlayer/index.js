import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Slider, View, AppState } from 'react-native'
import PropTypes from 'prop-types'
import { Audio } from 'expo-av'
import CLIENT_ID from '../../constants/SoundCloud'
import { getAudioModeData } from './helpers'
import ControlButton from './ControlButton'
import Styled from './styles'

/* Audio Instance */
let audioInstance = null

function AudioPlayer({ route }) {
  const [isAppActive, setIsAppActive] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isDraggingSlider, setIsDraggingSlider] = useState(false)
  const [durationMillis, setDurationMillis] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(0)

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange)

    return () => {
      AppState.removeEventListener('change', handleAppStateChange)
    }
  })

  const handleAppStateChange = (nextAppState) => {
    if (!isAppActive && nextAppState === 'active') {
      setIsAppActive(setIsAppActive(true))
    }
    if (isAppActive && nextAppState.match(/inactive|background/)) {
      setIsAppActive(false)
    }
  }

  /* [start] Audio methods  */

  /**
   * Stop and 'unload' the audio instance object
   */
  const unsetAudioInstance = async () => {
    if (audioInstance) {
      await audioInstance.stopAsync()
      await audioInstance.unloadAsync()
    }
  }

  /**
   * Sets audio settings
   */
  const setAudioSettings = async () => {
    Audio.setAudioModeAsync(
      getAudioModeData(
        Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX
      )
    )
  }

  /* [start] Playback Status methods  */

  /**
   * This method is called repeatedly by the audio instance with an updated status object
   * @param {object} status
   */
  const onPlaybackStatusUpdate = (status) => {
    if (status.isPlaying && !isDraggingSlider && isAppActive) {
      setSliderPosition(status.positionMillis)
    }
  }

  /**
   * Tells the audio instance which method to call with status updates
   */
  const setOnPlaybackStatusUpdate = () => {
    if (audioInstance) {
      audioInstance.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)
    }
  }

  /**
   * The onPlaybackStatusUpdate contains a stale reference to the isDraggingSlider state variable.
   * This method re-assigns the playback status update function with an updated isDraggingSlider value.
   */
  useEffect(() => {
    setOnPlaybackStatusUpdate()
  }, [isDraggingSlider, isAppActive])

  /* [end] Playback Status Update  */

  /**
   * Loads audio from SoundCloud.
   * Builds the SoundCloud api endpoint from a given 'track url' and SoundCloud client id.
   * Calls setOnPlaybackStatusUpdate to retrieve track status updates.
   * Once the track is loaded, we know it's duration, so we update the durationMillis state variable.
   */
  const loadAudio = async () => {
    setIsLoading(true)
    const { trackUrl } = route.params
    if (!trackUrl) {
      // TODO Handle Error
      return
    }
    audioInstance = new Audio.Sound()

    try {
      const uri = `${trackUrl}?client_id=${CLIENT_ID}`
      const sourceData = { uri }
      const audioStatus = await audioInstance.loadAsync(sourceData)
      if (!audioStatus.isLoaded) throw new Error('Track could not be loaded')

      setIsLoading(false)
      setOnPlaybackStatusUpdate()

      /* Set the track duration to be used by UI */
      setDurationMillis(audioStatus.durationMillis)
    } catch (error) {
      console.log('Error load: ', error)
    }
  }

  /**
   * Sets the track position in milliseconds
   * @param {positionMillis} number
   */
  const setTrackPosition = async (positionMillis) => {
    if (audioInstance) {
      await audioInstance.setPositionAsync(positionMillis)
    }
  }

  /**
   * Play audio.
   * Sets isPlaying state variable to true
   */
  const play = async () => {
    if (audioInstance) {
      await audioInstance.playAsync()
      setIsPlaying(true)
    }
  }

  /**
   * Pause audio
   * Sets isPlaying state variable to false
   */
  const pause = async () => {
    if (audioInstance) {
      await audioInstance.pauseAsync()
      setIsPlaying(false)
    }
  }

  useEffect(() => {
    /**
     * Called only when the component mounts. Calls async methods to:
     *  set audio settings, load audio, and play the audio sequentially
     */
    const setupAudioAndPlay = async () => {
      try {
        await setAudioSettings()
        await loadAudio()
        await play()
      } catch (error) {
        console.log('Mount error: ', error)
      }
    }

    setupAudioAndPlay()

    return unsetAudioInstance
  }, [])

  /* [end] Audio methods  */

  /**
   * Slider callback for when the user stops sliding slider.
   * Sets the isDraggingSlider status variable to false.
   * Calls setTrackPosition with new sliderValue
   * @param {number} sliderValue
   */
  const onSlidingComplete = (sliderValue) => {
    if (isDraggingSlider) {
      setIsDraggingSlider(false)
    }
    setTrackPosition(sliderValue)
  }

  /**
   * Slider callback for when the user is sliding slider.
   * Sets the isDraggingSlider status variable to true (if not already true).
   */
  const onSliderChange = () => {
    if (!isDraggingSlider) {
      setIsDraggingSlider(true)
    }
  }

  return (
    <Styled.AudioPlayerWrapper>
      {isLoading && <ActivityIndicator size="large" color="black" />}
      {!isLoading && (
        <View>
          <ControlButton isPlayButton={!isPlaying} onPress={isPlaying ? pause : play} />
          <Slider
            minimumValue={0}
            value={sliderPosition}
            maximumValue={durationMillis}
            onValueChange={onSliderChange}
            onSlidingComplete={onSlidingComplete}
            minimumTrackTintColor="black"
            maximumTrackTintColor="white"
          />
        </View>
      )}
    </Styled.AudioPlayerWrapper>
  )
}

AudioPlayer.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      trackUrl: PropTypes.string,
    }),
  }).isRequired,
}

export default AudioPlayer
