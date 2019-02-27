import React from 'react';
import { ScrollView, View, Text, FlatList, Button, Image, TouchableHighlight, StyleSheet } from 'react-native';
import MLPFlatList from '../components/MLPFlatList'
import { ScreenContainerStyles } from '../styles/baseStyles'
import { Colors } from '../constants/colors'
import { CLIENT_ID } from '../constants/SoundCloud'

export default class TracksList extends React.Component {

  static navigationOptions = {
    title: 'Mindful sits',
    headerStyle: {
      backgroundColor: Colors.green,
      borderBottomWidth: 0
    },
    headerTintColor: Colors.lightGreen,
    headerTitleStyle: {
      color: Colors.lightGreen
    },
  };

  onRowPressHandler(rowData, navigation) {
    // TODO make sure rowData.track.stream_url exists
    const trackData = rowData.item;
    const playlistTitle = navigation.getParam('playlistTitle', '');
    const audioPlayerData = {
      trackTitle: trackData.title,
      trackUrl: trackData.stream_url,
      playlistTitle
    }

    navigation.navigate('AudioPlayer', { audioPlayerData });
  }

  render() {
    const { navigation } = this.props
    const tracksData = navigation.getParam('tracks', []);
    return (
      <View style={[styles.screenContainer, ScreenContainerStyles]}>
        <Text style={styles.header}>Tracks</Text>
        <MLPFlatList
          listData={tracksData}
          onRowPressHandler={(rowData) => this.onRowPressHandler(rowData, navigation)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: Colors.green,
    padding: 10
  },
  header: {
    color: Colors.lightGreen,
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 25,
    paddingBottom: 25
  }
});
