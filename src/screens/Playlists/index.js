import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { View, ActivityIndicator, Text } from 'react-native'
import List from '../../components/List'
import { fetchUser, fetchPlaylists } from '../../lib/sound-cloud-services'

function Playlists({ route, navigation }) {
  const [playlists, setPlaylists] = useState(null)

  const onRowPress = (selectedPlaylist) => {
    const { category } = route.params
    // Filter out non-streamable tracks
    const streamableTracks = selectedPlaylist.tracks.filter((track) => track.streamable)
    navigation.navigate('Tracks', {
      tracks: streamableTracks,
      playlistTitle: selectedPlaylist.title,
      category,
    })
  }

  useEffect(() => {
    /**
     * @description Fetch user data, then playlist data based off of the user id
     * @effect Call setPlaylists state hook with new playlist data
     */
    const { category, language } = route.params
    const fetchData = async () => {
      try {
        const user = await fetchUser(category, language)
        if (user && user.id) {
          const playlistsData = await fetchPlaylists(user.id)
          if (playlistsData) {
            setPlaylists(playlistsData)
          }
        }
      } catch (error) {
        console.log('fetchData error')
      }
    }

    fetchData()
  }, [])

  const { category } = route.params

  return (
    <View>
      {!playlists && <ActivityIndicator size="large" color="white" />}
      {playlists && (
        <View>
          <Text>Playlists</Text>
          <List category={category} listData={playlists} onRowPress={onRowPress} />
        </View>
      )}
    </View>
  )
}

Playlists.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string,
      language: PropTypes.string,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
}

export default Playlists
