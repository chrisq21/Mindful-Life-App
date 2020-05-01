import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { fetchUser, fetchPlaylists } from '../../lib/sound-cloud-services'

function Playlists({ route }) {
  const { category, language } = route.params

  useEffect(() => {
    /**
     * @description Fetch user data, then playlist data based off of the user id
     * @effect Call setPlaylists state hook with new playlist data
     */
    const fetchData = async () => {
      try {
        const user = await fetchUser(category, language)
        if (user && user.id) {
          const playlists = await fetchPlaylists(user.id)
          if (playlists) {
            console.log('playlists: ', playlists)
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
      <Text>Playlists</Text>
      <ActivityIndicator size="large" color="white" />
    </View>
  )
}

export default Playlists
