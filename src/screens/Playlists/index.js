import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components/native'
import { soundCloudUrlMap } from '../../lib/sound-cloud-services'
import { WebView } from 'react-native-webview'
import themes from '../../styles/themes'

const webViewStyles = {
  width: '100%',
  height: '100%',
}

function Playlists({ route }) {
  const { category, language } = route.params

  let soundCloudUrl = soundCloudUrlMap['sits']

  if (language === 'spanish' && category === 'sits') {
    soundCloudUrl = soundCloudUrlMap['sits-spanish']
  } else {
    soundCloudUrl = soundCloudUrlMap[category]
  }

  return (
    <ThemeProvider theme={themes[category]}>
      <WebView style={webViewStyles} source={{ uri: soundCloudUrl }} />
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
}

export default Playlists
