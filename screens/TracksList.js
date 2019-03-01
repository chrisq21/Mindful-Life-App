import React from 'react';
import { ScrollView, View, Text, FlatList, Button, Image, TouchableHighlight, StyleSheet } from 'react-native';
import MLPFlatList from '../components/MLPFlatList'
import { getTitleByCategory, getThemeColorByCategory, getLightThemeColorByCategory } from '../utils/categoryValues'
import { ScreenContainerStyles, ListStyles } from '../styles/baseStyles'
import { Colors } from '../constants/colors'
import DrawerIcon from '../components/DrawerIcon'
import { CLIENT_ID } from '../constants/SoundCloud'

export default class TracksList extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const category = navigation.getParam('category', '');
    return {
      title: getTitleByCategory(category),
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

  onRowPressHandler(rowData, navigation) {
    // TODO make sure rowData.track.stream_url exists
    const trackData = rowData.item;
    const playlistTitle = navigation.getParam('playlistTitle', '');
    const audioPlayerData = {
      trackTitle: trackData.title,
      trackUrl: trackData.stream_url,
      playlistTitle
    }
    const category = navigation.getParam('category', '');
    navigation.navigate('AudioPlayer', { audioPlayerData, category });
  }

  render() {
    const { navigation } = this.props
    const category = navigation.getParam('category', '');
    const tracksData = navigation.getParam('tracks', []);
    return (
      <View style={[ListStyles.screenContainer, ScreenContainerStyles, { backgroundColor: getThemeColorByCategory(category) }]}>
        <Text style={[ListStyles.header, { color: getLightThemeColorByCategory(category) }]}>Tracks</Text>
        <MLPFlatList
          listData={tracksData}
          onRowPressHandler={(rowData) => this.onRowPressHandler(rowData, navigation)}
          category={category}
        />
      </View>
    );
  }
}
