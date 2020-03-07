import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import MLPFlatList from '../components/MLPFlatList'
import {
  getTitleByCategory,
  getThemeColorByCategory,
  getLightThemeColorByCategory,
} from '../utils/categoryValues'
import { ScreenContainerStyles, ListStyles } from '../styles/baseStyles'
import DrawerIcon from '../components/DrawerIcon'

class TracksList extends React.Component {
  // TODO: Add programatic options

  constructor() {
    super()

    this.onRowPressHandler = this.onRowPressHandler.bind(this)
    this.getStreamableTracks = this.getStreamableTracks.bind(this)
  }

  onRowPressHandler(rowData) {
    const { navigation } = this.props
    // TODO make sure rowData.track.stream_url exists
    const trackData = rowData.item
    const playlistTitle = navigation.getParam('playlistTitle', '')
    const audioPlayerData = {
      trackTitle: trackData.title,
      trackUrl: trackData.stream_url,
      playlistTitle,
    }
    const category = navigation.getParam('category', '')
    navigation.navigate('AudioPlayer', { audioPlayerData, category })
  }

  getStreamableTracks(tracksData) {
    const streamableTracks = []
    tracksData.forEach((track) => {
      if (track.streamable) {
        streamableTracks.push(track)
      }
    })

    return streamableTracks
  }

  render() {
    const { navigation } = this.props
    const category = navigation.getParam('category', '')
    const tracksData = navigation.getParam('tracks', [])
    const streamableTracks = this.getStreamableTracks(tracksData)

    return (
      <View
        style={[
          ListStyles.screenContainer,
          ScreenContainerStyles,
          { backgroundColor: getThemeColorByCategory(category) },
        ]}
      >
        <Text style={[ListStyles.header, { color: getLightThemeColorByCategory(category) }]}>
          Tracks
        </Text>
        <MLPFlatList
          listData={streamableTracks}
          onRowPressHandler={this.onRowPressHandler}
          category={category}
        />
      </View>
    )
  }
}

TracksList.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
}

export default TracksList
