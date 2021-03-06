import React, { useState, useEffect, Fragment } from 'react'
import { AppState, Alert } from 'react-native'
import PropTypes from 'prop-types'
import { Audio } from 'expo-av'
import { ThemeProvider } from 'styled-components/native'
import AudioControls from '../../components/AudioControls'
import CLIENT_ID from '../../constants/sound-cloud-id'
import LoadingSpinner from '../../components/shared/LoadingSpinner'
import themes from '../../styles/themes'

import {
  AudioPlayerWrapper,
  AudioPlayerInnerWrapper,
  DescriptionWrapper,
  PlaylistTitle,
  TrackTitle,
} from './styles'

/* Audio Instance */
let audioInstance = null

function AudioPlayer({ route }) {
  const [isAppActive, setIsAppActive] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isDraggingSlider, setIsDraggingSlider] = useState(false)
  const [durationMillis, setDurationMillis] = useState(0)
  const [sliderPositionMillis, setSliderPositionMillis] = useState(0)

  const handleAppStateChange = (nextAppState) => {
    if (!isAppActive && nextAppState === 'active') {
      setIsAppActive(setIsAppActive(true))
    }
    if (isAppActive && nextAppState.match(/inactive|background/)) {
      setIsAppActive(false)
    }
  }

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange)

    return () => {
      AppState.removeEventListener('change', handleAppStateChange)
    }
  })

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
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      playsInSilentModeIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      staysActiveInBackground: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
      shouldDuckAndroid: false,
    })
  }

  /* [start] Playback Status methods  */

  /**
   * This method is called repeatedly by the audio instance with an updated status object
   * @param {object} status
   */
  const onPlaybackStatusUpdate = (status) => {
    if (status.isPlaying && !isDraggingSlider && isAppActive) {
      setSliderPositionMillis(status.positionMillis)
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
    audioInstance = new Audio.Sound()

    try {
      const uri = `${trackUrl}?client_id=${CLIENT_ID}`
      const sourceData = { uri }
      const audioStatus = await audioInstance.loadAsync(sourceData)
      if (!audioStatus.isLoaded) throw new Error()

      setIsLoading(false)
      setOnPlaybackStatusUpdate()

      /* Set the track duration to be used by UI */
      setDurationMillis(audioStatus.durationMillis)
    } catch (error) {
      if (error) {
        Alert.alert(
          'Error',
          'Unable to retreive SoundCloud data. Please restart the app and try again.',
          [{ text: 'OK' }],
          { cancelable: true }
        )
      }
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
        if (error) {
          Alert.alert(
            'Error',
            'Unable to retreive SoundCloud data. Please restart the app and try again.',
            [{ text: 'OK' }],
            { cancelable: true }
          )
        }
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

  const { trackTitle, playlistTitle, category } = route.params

  return (
    <ThemeProvider theme={themes[category]}>
      <AudioPlayerWrapper>
        <AudioPlayerInnerWrapper>
          {isLoading && <LoadingSpinner />}
          {!isLoading && (
            <Fragment>
              <DescriptionWrapper>
                <PlaylistTitle>{playlistTitle}</PlaylistTitle>
                <TrackTitle>{trackTitle}</TrackTitle>
              </DescriptionWrapper>
              <AudioControls
                play={play}
                pause={pause}
                isPlaying={isPlaying}
                category={category}
                durationMillis={durationMillis}
                sliderPositionMillis={sliderPositionMillis}
                onSliderChange={onSliderChange}
                onSlidingComplete={onSlidingComplete}
              />
            </Fragment>
          )}
        </AudioPlayerInnerWrapper>
      </AudioPlayerWrapper>
    </ThemeProvider>
  )
}

AudioPlayer.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string,
      trackUrl: PropTypes.string,
      trackTitle: PropTypes.string,
      playlistTitle: PropTypes.string,
    }),
  }).isRequired,
}

export default AudioPlayer
