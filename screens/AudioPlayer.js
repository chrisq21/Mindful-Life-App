import React from 'react';
import { Alert, View, Text, Slider, Button, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { ScreenContainerStyles } from '../styles/baseStyles'
import { getThemeColorByCategory, getLightThemeColorByCategory, getDarkThemeColorByCategory } from '../utils/categoryValues'
import { Colors } from '../constants/colors'
import { CLIENT_ID } from '../constants/SoundCloud'

export default class AudioPlayer extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const category = navigation.getParam('category', '');
    return {
      title: '',
      drawerLabel: 'About',
      headerRight: <DrawerIcon navigation={navigation} />,
      headerStyle: {
        backgroundColor: getThemeColorByCategory(category),
        borderBottomWidth: 0
      },
      headerTintColor: getLightThemeColorByCategory(category),
      headerTitleStyle: {
        color: getLightThemeColorByCategory(category)
      },
    };
  };

  constructor(props) {
    super(props);
    this.pollAudioStatus = false;
    this.state = {
      isAudioReady: false,
      isAudioPlaying: false,
      currentAudioTime: 0,
      maxAudioTime: 1,
      isDraggingSlider: false
    };

    this.pauseAudioAsync = this.pauseAudioAsync.bind(this);
    this.playAudioAsync = this.playAudioAsync.bind(this);
    this.onPlaybackStatusUpdate = this.onPlaybackStatusUpdate.bind(this);
    this.onSlidingComplete = this.onSlidingComplete.bind(this);
    this.onSliderValueChange = this.onSliderValueChange.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.updateSlider = this.updateSlider.bind(this);
  }

  componentDidMount() {
    this.setupAudioData();
  }

  componentWillUnmount() {
    /*
      Expo's Audio object has a bug that continues to poll for audioStatus after unloadAsync is called.
      This forces the onPlaybackStatusUpdate function to stop polling for audioObject status
    */
    this.pollAudioStatus = false;
    this.audioObject.unloadAsync()
      .then(null, (error) => {
        this.showAlert();
      })
  }

  async setupAudioData() {
    Expo.Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Expo.Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: false,
      interruptionModeAndroid: Expo.Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: true
    });

    this.audioObject = new Expo.Audio.Sound();
    this.pollAudioStatus = true;
    this.audioObject.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);

    try {
      const audioPlayerData = this.props.navigation.getParam('audioPlayerData', null);
      // TODO throw alert error if trackUrl is null
      await this.audioObject.loadAsync({uri: `${audioPlayerData.trackUrl}?client_id=${CLIENT_ID}`}, { shouldPlay: true });
      await this.playAudioAsync();
    } catch (error) {
      console.log("Error loading: ", error);
      this.showAlert();
    }
  }

  async pauseAudioAsync() {
    this.audioObject.pauseAsync()
      .then(() => this.setState({ isAudioPlaying: false }),
        (error) => this.showAlert()
      )
  }

  async playAudioAsync() {
    this.audioObject.playAsync()
      .then(() => this.setState({ isAudioPlaying: true }),
        (error) => this.showAlert()
      )
  }

  showAlert() {
    Alert.alert("Uh oh! An error occured. You may need to restart the app or check your internet connection.");
  }

  updateSlider(maxAudioTime, currentAudioTime) {
    if(this.state.maxAudioTime != maxAudioTime) {
      this.setState({ maxAudioTime: maxAudioTime })
    }
    if(!this.state.isDraggingSlider) {
      this.setState({ currentAudioTime: currentAudioTime });
    }
  }

  onPlaybackStatusUpdate(playBackData) {
    if(this.pollAudioStatus) {
      if(playBackData.isLoaded && !playBackData.isBuffering) {
        // Song is ready
        if(!this.state.isAudioReady) {
          this.setState({ isAudioReady: true })
        }
        this.updateSlider(playBackData.durationMillis, playBackData.positionMillis)
      } else {
        // Song is loading or buffering
        if(this.state.isAudioReady) {
          this.setState({ isAudioReady: false })
        }
      }
    }
  }

  onSliderValueChange() {
    this.setState({ isDraggingSlider: true });
  }

  onSlidingComplete(value) {
    this.audioObject.setStatusAsync({ positionMillis: value })
      .then(null, (error) => {
        this.showAlert()
      })
    this.setState({ isDraggingSlider: false });
  }

  render() {
    const { navigation } = this.props
    const audioPlayerData = navigation.getParam('audioPlayerData', null);
    const category = navigation.getParam('category', '');
    const controlButtonImgSource = this.state.isAudioPlaying
      ? require('../assets/pause-btn.png')
      : require('../assets/play-btn.png')

    const controlButtonHandler = this.state.isAudioPlaying
      ? this.pauseAudioAsync
      : this.playAudioAsync
    return (
      <View style={[styles.screenContainer, ScreenContainerStyles, { backgroundColor: getThemeColorByCategory(category) }]}>
        {!this.state.isAudioReady && (
          <ActivityIndicator size='large' color='white' style={{justifyContent: 'center'}}/>
        )}
        {this.state.isAudioReady && (
          <View style={styles.innerContainer}>
            <Text style={[styles.playlistTitle, { color: getDarkThemeColorByCategory(category) }]}>{audioPlayerData.playlistTitle}</Text>
            <Text style={styles.trackTitle}>{audioPlayerData.trackTitle}</Text>
            <View style={styles.controlsContainer}>
                <TouchableOpacity onPress={controlButtonHandler} style={styles.controlButtonContainer}>
                  <Image resizeMode='contain' source={controlButtonImgSource}></Image>
                </TouchableOpacity>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={this.state.maxAudioTime}
                value={this.state.currentAudioTime}
                onSlidingComplete={this.onSlidingComplete}
                onValueChange={this.onSliderValueChange}
                minimumTrackTintColor={getDarkThemeColorByCategory(category)}
                maximumTrackTintColor='white'
                />
              </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  innerContainer: {
    alignItems: 'center',
    flexGrow: 1,
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
  controlsContainer: {
    paddingTop: 30,
    flexGrow: 1,
    width: '95%'
  },
  controlButtonContainer: {
    alignSelf: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  playlistTitle: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 10
  },
  trackTitle: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10
  },
  slider: {
    width: '100%'
  }
});
