import React from 'react'
import PropTypes from 'prop-types'
import { spanishCopy, englishCopy } from '../../constants/copy'
import joySrc from '../../assets/home/joy.png'
import mehSrc from '../../assets/home/meh.png'
import contentSrc from '../../assets/home/content.png'
import crazy from '../../assets/home/crazy.png'
import ScreenWrapper from '../../components/shared/ScreenWrapper'
import {
  LearnButton,
  LearnButtonText,
  CheckInButton,
  CheckInButtonText,
  SitsButton,
  SitsButtonText,
  HipHopButton,
  HipHopButtonText,
  ImageWrapper,
} from './styles'

function Home({ navigation, route }) {
  const { language } = route.params
  const copyData = language === 'spanish' ? spanishCopy : englishCopy

  return (
    <ScreenWrapper>
      <LearnButton onPress={() => navigation.navigate('Learn', { language })}>
        <LearnButtonText>{copyData.homeScreen.learn}</LearnButtonText>
        <ImageWrapper source={joySrc} />
      </LearnButton>
      <CheckInButton onPress={() => navigation.navigate('CheckIn', { language })}>
        <CheckInButtonText>{copyData.homeScreen.checkIn}</CheckInButtonText>
        <ImageWrapper source={mehSrc} />
      </CheckInButton>
      <SitsButton onPress={() => navigation.navigate('Playlists', { category: 'sits', language })}>
        <SitsButtonText>{copyData.homeScreen.sits}</SitsButtonText>
        <ImageWrapper source={contentSrc} />
      </SitsButton>
      <HipHopButton
        onPress={() => navigation.navigate('Playlists', { category: 'hip-hop', language })}
      >
        <HipHopButtonText>{copyData.homeScreen.hipHop}</HipHopButtonText>
        <ImageWrapper source={crazy} />
      </HipHopButton>
    </ScreenWrapper>
  )
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      language: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default Home
