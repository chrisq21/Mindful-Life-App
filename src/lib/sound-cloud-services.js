import CLIENT_ID from '../constants/sound-cloud-id'

const baseUserURL = `http://api.soundcloud.com/resolve?url=http://soundcloud.com`
export const userURL = {
  'hip-hop': `${baseUserURL}/mindful-life-hip-hop&client_id=${CLIENT_ID}`,
  sits: `${baseUserURL}/mindful-life-project&client_id=${CLIENT_ID}`,
  'sits-spanish': `${baseUserURL}/user-825440555&client_id=${CLIENT_ID}`,
}

export const soundCloudUrlMap = {
  'hip-hop': 'https://soundcloud.com/mindful-life-hip-hop/sets',
  sits: 'http://soundcloud.com/mindful-life-project/sets',
  'sits-spanish': 'http://soundcloud.com/user-825440555/sets',
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
    const response = await fetch(url)
    const userData = await response.json()
    return userData
  } catch (error) {
    throw new Error()
  }
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
    throw new Error()
  }
}
