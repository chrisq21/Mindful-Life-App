import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import List from '../../components/List'

function Tracks({ route, navigation }) {
  const onRowPress = (selectedTrack) => {
    const { playlistTitle, category } = route.params
    const audioPlayerData = {
      trackTitle: selectedTrack.title,
      trackUrl: selectedTrack.stream_url,
      playlistTitle,
    }
    navigation.navigate('AudioPlayer', { ...audioPlayerData, category })
  }

  const { tracks, category, playlistTitle } = route.params

  return (
    <View>
      <View>
        <Text>{playlistTitle}</Text>
        <List category={category} listData={tracks} onRowPress={onRowPress} />
      </View>
    </View>
  )
}

Tracks.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string,
      playlistTitle: PropTypes.string,
      tracks: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
}

export default Tracks
