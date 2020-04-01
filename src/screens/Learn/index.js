import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'
import VideoPlayer from '../../components/VideoPlayer'
import { spanishCopy, englishCopy } from '../../constants/copy'
import Colors from '../../styles/Colors'
import animatedVideoSrc from './assets/animation.mp4'
import animatedVideoSpanishSrc from './assets/animation_spanish.mp4'
import meditationImgSrc from './assets/meditating.png'
import cloudsImgSrc from './assets/clouds.png'
import posterImgSrc from './assets/poster.png'
import togetherImgSrc from './assets/together.png'
import ScreenWrapper from '../../components/Shared/ScreenWrapper'

import { SectionContainer, SectionHeader, SectionBody, ImageWrapper } from './styles'

function Learn({ route }) {
  const { language } = route.params
  const copyData = language === 'spanish' ? spanishCopy : englishCopy
  const videoSource = language === 'spanish' ? animatedVideoSpanishSrc : animatedVideoSrc

  return (
    <ScreenWrapper style={{ backgroundColor: Colors.blue }}>
      <ScrollView>
        <SectionContainer>
          <SectionHeader>{copyData.learnScreen.whatIsHeader}</SectionHeader>
          <VideoPlayer source={videoSource} />
          <SectionBody>{copyData.learnScreen.whatIsBody}</SectionBody>
        </SectionContainer>
        <ImageWrapper source={meditationImgSrc} />
        <SectionContainer>
          <SectionHeader>Benefits</SectionHeader>
          <SectionBody>{copyData.learnScreen.benefitsBody1}</SectionBody>
          <SectionBody>{copyData.learnScreen.benefitsBody2}</SectionBody>
          <ImageWrapper source={cloudsImgSrc} />
        </SectionContainer>
        <SectionContainer>
          <SectionHeader>Posters</SectionHeader>
          <ImageWrapper source={posterImgSrc} />
          <ImageWrapper source={togetherImgSrc} />
        </SectionContainer>
      </ScrollView>
    </ScreenWrapper>
  )
}

Learn.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      language: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default Learn
