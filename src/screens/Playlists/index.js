import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components/native'
import LoadingSpinner from '../../components/shared/LoadingSpinner'
import List from '../../components/shared/List'
import { ListWrapper, Heading } from '../../components/shared/ListScreenStyles'
import { fetchUser, fetchPlaylists } from '../../lib/sound-cloud-services'
import themes from '../../styles/themes'

const LoadingSpinnerWrapper = styled(LoadingSpinner)`
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

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
        if (error) {
          Alert.alert(
            'Error',
            'Unable to retreive SoundCloud data. Please restart the app and try again.',
            [{ text: 'OK' }],
            { cancelable: true }
          )
        }
      }
    }

    fetchData()
  }, [])

  const { category } = route.params

  return (
    <ThemeProvider theme={themes[category]}>
      <ListWrapper>
        {!playlists && <LoadingSpinnerWrapper />}
        {playlists && (
          <>
            {/* eslint-disable react-native/no-raw-text */}
            <Heading>Playlists</Heading>
            <List category={category} listData={playlists} onRowPress={onRowPress} />
          </>
        )}
      </ListWrapper>
    </ThemeProvider>
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
