import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components/native'
import List from '../../components/List'
import { ListWrapper, Heading } from '../../components/Shared/ListStyles'
import themes from '../../styles/themes'

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
    <ThemeProvider theme={themes[category]}>
      <ListWrapper>
        <Heading>{playlistTitle}</Heading>
        <List category={category} listData={tracks} onRowPress={onRowPress} />
      </ListWrapper>
    </ThemeProvider>
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
