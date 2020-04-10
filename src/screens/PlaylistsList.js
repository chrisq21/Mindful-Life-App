import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import RowList from '../components/RowList'
import {
  getUserSlugByCategoryAndLanguage,
  getThemeColorByCategory,
  getLightThemeColorByCategory,
} from '../utils/categoryValues'
import { ScreenContainerStyles, ListStyles } from '../styles/baseStyles'
import CLIENT_ID from '../constants/SoundCloud'

const styles = StyleSheet.create({
  activityIndicator: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
  },
})

class PlaylistsList extends React.Component {
  // TODO: Add programatic options

  constructor(props) {
    super(props)
    this.state = { playlistData: [] }
    this.fetchUserData = this.fetchUserData.bind(this)
    this.getFetchUserEndpoint = this.getFetchUserEndpoint.bind(this)
  }

  componentDidMount() {
    this.fetchUserData()
  }

  onRowPressHandler(rowData) {
    const { navigation, route } = this.props
    const { category } = route.params
    const playlistData = rowData.item

    navigation.navigate('TracksList', {
      tracks: playlistData.tracks,
      playlistTitle: playlistData.title,
      category,
    })
  }

  getFetchUserEndpoint() {
    const { route } = this.props
    const { category, language } = route.params
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
    const { route } = this.props
    const { category } = route.params
    const { playlistData } = this.state

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
            <RowList
              listData={playlistData}
              onRowPressHandler={(rowData) => this.onRowPressHandler(rowData)}
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
    navigate: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      playlistTitle: PropTypes.string,
      category: PropTypes.string,
      language: PropTypes.string,
    }).isRequired,
  }).isRequired,
}

export default PlaylistsList
