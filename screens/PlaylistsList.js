import React from 'react';
import { ScrollView, View, Text, FlatList, Button, Image, TouchableHighlight, StyleSheet, ActivityIndicator } from 'react-native';
import MLPFlatList from '../components/MLPFlatList'
import { getTitleByCategory, getUserSlugByCategory, getThemeColorByCategory, getLightThemeColorByCategory } from '../utils/categoryValues'
import { ScreenContainerStyles, ListStyles } from '../styles/baseStyles'
import { Colors } from '../constants/colors'
import { CLIENT_ID } from '../constants/SoundCloud'

export default class PlaylistsList extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const category = navigation.getParam('category', '');
    return {
      title: getTitleByCategory(category),
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
    this.state = { playlistData: [] };
    this.fetchUserData = this.fetchUserData.bind(this);
    this.getFetchUserEndpoint = this.getFetchUserEndpoint.bind(this);
  }

  componentDidMount() {
    this.fetchUserData();
  }

  getFetchUserEndpoint() {
    const category = this.props.navigation.getParam('category', '');
    const slug = getUserSlugByCategory(category);
    console.log('Slug: ', slug)
    console.log(`http://api.soundcloud.com/resolve?url=http://soundcloud.com/${slug}&client_id=${CLIENT_ID}`)
    return `http://api.soundcloud.com/resolve?url=http://soundcloud.com/${slug}&client_id=${CLIENT_ID}`;
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
    } catch(error) {
      console.log("fetchPlaylistData ERROR_________: ", error);
    }
  }

  onRowPressHandler(rowData, navigation) {
    // TODO make sure rowData.track.stream_url exists
    const playlistData = rowData.item;
    const category = navigation.getParam('category', '');
    navigation.navigate('TracksList', { tracks: playlistData.tracks, playlistTitle: playlistData.title, category });
  }

  render() {
    const { navigation } = this.props
    const category = navigation.getParam('category', '');
    return (
      <View style={[ListStyles.screenContainer, ScreenContainerStyles, { backgroundColor: getThemeColorByCategory(category) }]}>
        { this.state.playlistData.length <= 0 &&
          <ActivityIndicator size='large' color='white' style={{justifyContent: 'center', flexDirection: 'row', flexGrow: 1}}/>
        }
        {this.state.playlistData.length > 0 &&
          <View>
            <Text style={[ListStyles.header, { color: getLightThemeColorByCategory(category) }]}>Playlists</Text>
            <MLPFlatList
              listData={this.state.playlistData}
              onRowPressHandler={(rowData) => this.onRowPressHandler(rowData, navigation)}
              category={category}
            />
          </View>
        }

      </View>
    );
  }
}
