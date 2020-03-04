import React from 'react'
import PropTypes from 'prop-types'
import {
  Alert,
  View,
  Text,
  Slider,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { Audio } from 'expo-av'
import { KeepAwake } from 'expo'
import { ScreenContainerStyles } from '../styles/baseStyles'
import {
  getThemeColorByCategory,
  getLightThemeColorByCategory,
  getDarkThemeColorByCategory,
} from '../utils/categoryValues'
import DrawerIcon from '../components/DrawerIcon'
import { Colors } from '../constants/colors'
import { CLIENT_ID } from '../constants/SoundCloud'
import pauseBtnImgSrc from '../assets/pause-btn.png'
import playBtnImgSrc from '../assets/play-btn.png'

const styles = StyleSheet.create({
  activityIndicator: {
    justifyContent: 'center',
  },
  audioDescriptionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  audioText: {
    color: Colors.white,
  },
  controlButtonContainer: {
    alignSelf: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  },
  controlsContainer: {
    flexGrow: 1,
    paddingTop: 30,
    width: '95%',
  },
  innerContainer: {
    alignItems: 'center',
    flexGrow: 1,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
  },
  playlistTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: 10,
    textAlign: 'center',
  },
  screenContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  slider: {
    width: '100%',
  },
  trackTitle: {
    color: Colors.white,
    fontSize: 35,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: 'center',
  },
})

class AudioPlayer extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const category = navigation.getParam('category', '')
    return {
      title: '',
      drawerLabel: 'About',
      headerRight: <DrawerIcon navigation={navigation} />,
      headerStyle: {
        backgroundColor: getThemeColorByCategory(category),
        borderBottomWidth: 0,
      },
      headerTintColor: getLightThemeColorByCategory(category),
      headerTitleStyle: {
        color: getLightThemeColorByCategory(category),
      },
    }
  }

  constructor(props) {
    super(props)
    this.pollAudioStatus = false
    this.state = {
      isAudioReady: false,
      isAudioPlaying: false,
      currentAudioTime: 0,
      maxAudioTime: 1,
      isDraggingSlider: false,
    }

    this.pauseAudioAsync = this.pauseAudioAsync.bind(this)
    this.playAudioAsync = this.playAudioAsync.bind(this)
    this.onPlaybackStatusUpdate = this.onPlaybackStatusUpdate.bind(this)
    this.onSlidingComplete = this.onSlidingComplete.bind(this)
    this.onSliderValueChange = this.onSliderValueChange.bind(this)
    this.showAlert = this.showAlert.bind(this)
    this.updateSlider = this.updateSlider.bind(this)
  }

  componentDidMount() {
    this.setupAudioData()
  }

  componentWillUnmount() {
    /*
      Expo's Audio object has a bug that continues to poll for audioStatus after unloadAsync is called.
      This forces the onPlaybackStatusUpdate function to stop polling for audioObject status
    */
    this.pollAudioStatus = false
    this.audioObject.unloadAsync().then(null, () => {
      this.showAlert()
    })
  }

  onPlaybackStatusUpdate(playBackData) {
    const { isAudioReady } = this.state
    if (this.pollAudioStatus) {
      if (playBackData.isLoaded && !playBackData.isBuffering) {
        // Song is ready
        if (!isAudioReady) {
          this.setState({ isAudioReady: true })
        }
        this.updateSlider(playBackData.durationMillis, playBackData.positionMillis)
      } else if (isAudioReady) {
        this.setState({ isAudioReady: false })
      }
    }
  }

  onSliderValueChange() {
    this.setState({ isDraggingSlider: true })
  }

  onSlidingComplete(value) {
    this.audioObject.setStatusAsync({ positionMillis: value }).then(null, () => {
      this.showAlert()
    })
    this.setState({ isDraggingSlider: false })
  }

  async setupAudioData() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: false,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
    })

    this.audioObject = new Audio.Sound()
    this.pollAudioStatus = true
    this.audioObject.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)

    try {
      const { navigation } = this.props
      const audioPlayerData = navigation.getParam('audioPlayerData', null)
      await this.audioObject.loadAsync(
        { uri: `${audioPlayerData.trackUrl}?client_id=${CLIENT_ID}` },
        { shouldPlay: true }
      )
      await this.playAudioAsync()
    } catch (error) {
      console.log('Error loading: ', error)
      this.showAlert()
    }
  }

  async pauseAudioAsync() {
    this.audioObject.pauseAsync().then(
      () => this.setState({ isAudioPlaying: false }),
      () => this.showAlert()
    )
  }

  async playAudioAsync() {
    this.audioObject.playAsync().then(
      () => this.setState({ isAudioPlaying: true }),
      () => this.showAlert()
    )
  }

  showAlert() {
    Alert.alert(
      'Uh oh! An error occured. You may need to restart the app or check your internet connection.'
    )
  }

  updateSlider(newMaxAudioTime, currentAudioTime) {
    const { maxAudioTime, isDraggingSlider } = this.state
    if (maxAudioTime !== newMaxAudioTime) {
      this.setState({ maxAudioTime: newMaxAudioTime })
    }
    if (!isDraggingSlider) {
      this.setState({ currentAudioTime })
    }
  }

  millisToMinutesAndSeconds(millis) {
    const minutes = Math.floor(millis / 60000)
    const seconds = ((millis % 60000) / 1000).toFixed(0)
    return seconds === 60 ? `${minutes + 1}:00` : `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  render() {
    const { navigation } = this.props
    const { isAudioPlaying, isAudioReady, maxAudioTime, currentAudioTime } = this.state
    const audioPlayerData = navigation.getParam('audioPlayerData', null)
    const category = navigation.getParam('category', '')
    const controlButtonImgSource = isAudioPlaying ? pauseBtnImgSrc : playBtnImgSrc

    const controlButtonHandler = isAudioPlaying ? this.pauseAudioAsync : this.playAudioAsync
    return (
      <View
        style={[
          styles.screenContainer,
          ScreenContainerStyles,
          { backgroundColor: getThemeColorByCategory(category) },
        ]}
      >
        {!isAudioReady && (
          <ActivityIndicator size="large" color="white" style={styles.activityIndicator} />
        )}
        {isAudioReady && (
          <View style={styles.innerContainer}>
            <KeepAwake />
            <Text style={[styles.playlistTitle, { color: getDarkThemeColorByCategory(category) }]}>
              {audioPlayerData.playlistTitle}
            </Text>
            <Text style={styles.trackTitle}>{audioPlayerData.trackTitle}</Text>
            <View style={styles.controlsContainer}>
              <TouchableOpacity
                onPress={controlButtonHandler}
                style={styles.controlButtonContainer}
              >
                <Text>&gt;</Text>
                <Image resizeMode="contain" source={controlButtonImgSource} />
              </TouchableOpacity>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={maxAudioTime}
                value={currentAudioTime}
                onSlidingComplete={this.onSlidingComplete}
                onValueChange={this.onSliderValueChange}
                minimumTrackTintColor={getDarkThemeColorByCategory(category)}
                maximumTrackTintColor="white"
              />
              <View style={styles.audioDescriptionWrapper}>
                <Text style={styles.audioText}>
                  {this.millisToMinutesAndSeconds(currentAudioTime)}
                </Text>
                <Text style={styles.audioText}>{this.millisToMinutesAndSeconds(maxAudioTime)}</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    )
  }
}

AudioPlayer.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
}

export default AudioPlayer
