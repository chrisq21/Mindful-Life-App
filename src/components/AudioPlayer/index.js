import React, { useState, useEffect, useCallback } from 'react'
import { View, Slider, Text, Button } from 'react-native'
import PropTypes from 'prop-types'
import CLIENT_ID from '../../constants/SoundCloud'
import { Audio } from 'expo-av'
import { getAudioModeData } from './helpers'
import ControlButton from './ControlButton'

/* Audio Instance */
let audioInstance = null

function AudioPlayer({ route }) {
  const [sliderPosition, setSliderPosition] = useState(0)
  const [durationMillis, setDurationMillis] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isDraggingSlider, setIsDraggingSlider] = useState(false)

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
      if (!audioStatus.isLoaded) throw 'Track could not be loaded'

      setOnPlaybackStatusUpdate()

      /* Set the track duration to be used by UI */
      setDurationMillis(audioStatus.durationMillis)
    } catch (error) {
      console.log('Error load: ', error)
    }
  }

  /* [start] Playback Status methods  */

  /**
   * This method is called repeatedly by the audio instance with an updated status object
   * @param {object} status
   */
  const onPlaybackStatusUpdate = (status) => {
    if (status.isPlaying && !isDraggingSlider) {
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
  }, [isDraggingSlider])

  /* [end] Playback Status Update  */

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
   * Play audio
   */
  const play = async () => {
    if (audioInstance) {
      await audioInstance.playAsync()
      setIsPlaying(true)
    }
  }

  /**
   * Pause audio
   */
  const pause = async () => {
    if (audioInstance) {
      await audioInstance.pauseAsync()
      setIsPlaying(false)
    }
  }

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
  )
}

export default AudioPlayer
