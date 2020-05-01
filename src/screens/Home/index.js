import React from 'react'
import PropTypes from 'prop-types'
import { spanishCopy, englishCopy } from '../../constants/copy'
import questionMarkSrc from '../../assets/question-mark.png'
import anchorImgSrc from '../../assets/anchor.png'
import smileImgSrc from '../../assets/smile.png'
import headphoneImgSrc from '../../assets/headphones.png'
import ScreenWrapper from '../../components/Shared/ScreenWrapper'
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
        <ImageWrapper source={questionMarkSrc} />
      </LearnButton>
      <CheckInButton onPress={() => navigation.navigate('CheckIn', { language })}>
        <CheckInButtonText>{copyData.homeScreen.checkIn}</CheckInButtonText>
        <ImageWrapper source={anchorImgSrc} />
      </CheckInButton>
      <SitsButton
        onPress={() => navigation.navigate('Playlists', { category: 'sits', language })}
      >
        <SitsButtonText>{copyData.homeScreen.sits}</SitsButtonText>
        <ImageWrapper source={smileImgSrc} />
      </SitsButton>
      <HipHopButton
        onPress={() => navigation.navigate('Playlists', { category: 'hip-hop', language })}
      >
        <HipHopButtonText>{copyData.homeScreen.hipHop}</HipHopButtonText>
        <ImageWrapper source={headphoneImgSrc} />
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
