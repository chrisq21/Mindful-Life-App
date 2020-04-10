import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import RowList from '../components/RowList'
import { getThemeColorByCategory, getLightThemeColorByCategory } from '../utils/categoryValues'
import { ScreenContainerStyles, ListStyles } from '../styles/baseStyles'

class TracksList extends React.Component {
  // TODO: Add programatic options

  constructor(props) {
    super(props)

    this.onRowPressHandler = this.onRowPressHandler.bind(this)
    this.getStreamableTracks = this.getStreamableTracks.bind(this)
  }

  onRowPressHandler(rowData) {
    const { navigation, route } = this.props
    // TODO make sure rowData.track.stream_url exists
    const { playlistTitle, category } = route.params
    const trackData = rowData.item
    const audioPlayerData = {
      trackTitle: trackData.title,
      trackUrl: trackData.stream_url,
      playlistTitle,
    }
    navigation.navigate('AudioPlayer', { ...audioPlayerData, category })
  }

  getStreamableTracks(tracks) {
    const streamableTracks = []
    tracks.forEach((track) => {
      if (track.streamable) {
        streamableTracks.push(track)
      }
    })

    return streamableTracks
  }

  render() {
    const { route } = this.props
    const { category, tracks } = route.params
    const streamableTracks = this.getStreamableTracks(tracks)

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
        <RowList
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
    navigate: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      playlistTitle: PropTypes.string,
      category: PropTypes.string,
      tracks: PropTypes.array,
    }).isRequired,
  }).isRequired,
}

export default TracksList
