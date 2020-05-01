import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { View, ActivityIndicator } from 'react-native'
import List from '../../components/List'
import { fetchUser, fetchPlaylists } from '../../lib/sound-cloud-services'

function Playlists({ route }) {
  const { category, language } = route.params
  const [playlists, setPlaylists] = useState(null)

  const onRowPress = (param) => {
    console.log('Param: ', param)
  }

  useEffect(() => {
    /**
     * @description Fetch user data, then playlist data based off of the user id
     * @effect Call setPlaylists state hook with new playlist data
     */
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
}

export default Playlists
