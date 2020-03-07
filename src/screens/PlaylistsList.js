import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import MLPFlatList from '../components/MLPFlatList'
import {
  getTitleByCategory,
  getUserSlugByCategoryAndLanguage,
  getThemeColorByCategory,
  getLightThemeColorByCategory,
} from '../utils/categoryValues'
import { ScreenContainerStyles, ListStyles } from '../styles/baseStyles'
import DrawerIcon from '../components/DrawerIcon'
import CLIENT_ID from '../constants/SoundCloud'

const styles = StyleSheet.create({
  activityIndicator: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
  },
})

class PlaylistsList extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const category = navigation.getParam('category', '')
    return {
      title: getTitleByCategory(category),
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
    this.state = { playlistData: [] }
    this.fetchUserData = this.fetchUserData.bind(this)
    this.getFetchUserEndpoint = this.getFetchUserEndpoint.bind(this)
  }

  componentDidMount() {
    this.fetchUserData()
  }

  onRowPressHandler(rowData, navigation) {
    // TODO make sure rowData.track.stream_url exists
    const playlistData = rowData.item
    const category = navigation.getParam('category', '')
    navigation.navigate('TracksList', {
      tracks: playlistData.tracks,
      playlistTitle: playlistData.title,
      category,
    })
  }

  getFetchUserEndpoint() {
    const { navigation } = this.props
    const category = navigation.getParam('category', '')
    const language = navigation.getParam('language', '')
    const slug = getUserSlugByCategoryAndLanguage(category, language)
    return `http://api.soundcloud.com/resolve?url=http://soundcloud.com/${slug}&client_id=${CLIENT_ID}`
  }

  getFetchPlaylistsByUserEndpoint(userId) {
    return `http://api.soundcloud.com/users/${userId}/playlists?client_id=${CLIENT_ID}`
  }

  async fetchUserData() {
    try {
      const response = await fetch(this.getFetchUserEndpoint())
      const userData = await response.json()
      this.fetchPlaylistData(userData.id)
    } catch (error) {
      console.log('FETCH DATA ERROR: ', error)
    }
  }

  async fetchPlaylistData(userId) {
    try {
      const response = await fetch(this.getFetchPlaylistsByUserEndpoint(userId))
      const playlistData = await response.json()
      this.setState({ playlistData })
    } catch (error) {
      console.log('fetchPlaylistData ERROR_________: ', error)
    }
  }

  render() {
    const { navigation } = this.props
    const { playlistData } = this.state
    const category = navigation.getParam('category', '')
    return (
      <View
        style={[
          ListStyles.screenContainer,
          ScreenContainerStyles,
          { backgroundColor: getThemeColorByCategory(category) },
        ]}
      >
        {playlistData.length <= 0 && (
          <ActivityIndicator size="large" color="white" style={styles.activityIndicator} />
        )}
        {playlistData.length > 0 && (
          <View>
            <Text style={[ListStyles.header, { color: getLightThemeColorByCategory(category) }]}>
              Playlists
            </Text>
            <MLPFlatList
              listData={playlistData}
              onRowPressHandler={(rowData) => this.onRowPressHandler(rowData, navigation)}
              category={category}
            />
          </View>
        )}
      </View>
    )
  }
}

PlaylistsList.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
}

export default PlaylistsList
