import React from 'react';
import { ScrollView, View, Text, FlatList, Button, Image, TouchableHighlight, StyleSheet, ActivityIndicator } from 'react-native';
import MLPFlatList from '../components/MLPFlatList'
import { ScreenContainerStyles } from '../styles/baseStyles'
import { Colors } from '../constants/colors'
import { CLIENT_ID } from '../constants/SoundCloud'

export default class PlaylistsList extends React.Component {

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

  constructor(props) {
    super(props);
    this.state = { playlistData: [] };
    this.fetchUserData = this.fetchUserData.bind(this);
  }

  componentDidMount() {
    this.fetchUserData();
  }

  getFetchUserEndpoint() {
    return `http://api.soundcloud.com/resolve?url=http://soundcloud.com/mindful-life-project&client_id=${CLIENT_ID}`;
  }

  getFetchPlaylistsByUserEndpoint(userId) {
    return `http://api.soundcloud.com/users/${userId}/playlists?client_id=${CLIENT_ID}`;
  }

  async fetchUserData() {
    try {
      const response = await fetch(this.getFetchUserEndpoint());
      const userData = await response.json();
      this.fetchPlaylistData(userData.id);
    } catch(error) {
      console.log("FETCH DATA ERROR: ", error);
    }
  }

  async fetchPlaylistData(userId) {
    try {
      const response = await fetch(this.getFetchPlaylistsByUserEndpoint(userId));
      const playlistData = await response.json();
      this.setState({ playlistData });
      // console.log("Tracks Data: ", playlistData);
    } catch(error) {
      console.log("fetchPlaylistData ERROR_________: ", error);
    }
  }

  onRowPressHandler(rowData, navigation) {
    // TODO make sure rowData.track.stream_url exists
    const playlistData = rowData.item;
    navigation.navigate('TracksList', { tracks: playlistData.tracks, playlistTitle: playlistData.title });
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={[styles.screenContainer, ScreenContainerStyles]}>
        { this.state.playlistData.length <= 0 &&
          <ActivityIndicator size='large' color='white' style={{justifyContent: 'center', flexDirection: 'row', flexGrow: 1}}/>
        }
        {this.state.playlistData.length > 0 &&
          <View>
            <Text style={styles.header}>Playlists</Text>
            <MLPFlatList
              listData={this.state.playlistData}
              onRowPressHandler={(rowData) => this.onRowPressHandler(rowData, navigation)}
            />
          </View>
        }

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
