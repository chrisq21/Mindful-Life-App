import React from 'react';
import { Alert, View, Text, Slider, Button } from 'react-native';
export default class Sits extends React.Component {
  static navigationOptions = {
    title: 'Sits',
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
      await this.audioObject.loadAsync({uri: "http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"}, { shouldPlay: true });
      await this.playAudioAsync();
    } catch (error) {
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
    return (
      <View>
        {!this.state.isAudioReady && (
          <Text>Loading...</Text>
        )}
        {this.state.isAudioReady && (
          <View>
            <Text>Sits</Text>
            { this.state.isAudioPlaying &&
              <Button
                title='Pause'
                onPress={this.pauseAudioAsync}
              />
            }
            { !this.state.isAudioPlaying &&
              <Button
                title='Play'
                onPress={this.playAudioAsync}
              />
            }
            <Slider
              minimumValue={0}
              maximumValue={this.state.maxAudioTime}
              value={this.state.currentAudioTime}
              onSlidingComplete={this.onSlidingComplete}
              onValueChange={this.onSliderValueChange}
              />
          </View>
        )}
      </View>
    );
  }
}
