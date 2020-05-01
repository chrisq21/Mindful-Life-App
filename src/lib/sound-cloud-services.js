import CLIENT_ID from '../constants/sound-cloud-id'

const baseUserURL = `http://api.soundcloud.com/resolve?url=http://soundcloud.com`
export const userURL = {
  'hip-hop': `${baseUserURL}/mindful-life-hip-hop&client_id=${CLIENT_ID}`,
  sits: `${baseUserURL}/mindful-life-project&client_id=${CLIENT_ID}`,
  'sits-spanish': `${baseUserURL}/user-825440555&client_id=${CLIENT_ID}`,
}

/**
 *
 * @param {string} category
 * @param {string} language
 * @description Fetch SoundCloud user
 */

export const fetchUser = async (category, language) => {
  let url = ''
  if (language === 'spanish' && category === 'sits') {
    url = userURL['sits-spanish']
  } else {
    url = userURL[category]
  }
  try {
    console.log('URL: ', url)
    const response = await fetch(url)
    const userData = await response.json()
    return userData
  } catch (error) {
    // TODO Add error handling
    console.log('FETCH DATA ERROR: ', error)
  }
  return null
}

/**
 *
 * @param {string} userID
 * @description Fetch all SoundCloud playlists for the associated user
 */
export const fetchPlaylists = async (userID) => {
  const url = `http://api.soundcloud.com/users/${userID}/playlists?client_id=${CLIENT_ID}`
  try {
    const response = await fetch(url)
    const playlistsData = await response.json()
    return playlistsData
  } catch (error) {
    // TODO Add error handling
    console.log('fetchPlaylistData ERROR_________: ', error)
  }
  return null
}
