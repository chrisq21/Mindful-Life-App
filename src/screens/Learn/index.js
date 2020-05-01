import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'
import VideoPlayer from '../../components/VideoPlayer'
import { spanishCopy, englishCopy } from '../../constants/copy'
import animatedVideoSrc from './assets/animation.mp4'
import animatedVideoSpanishSrc from './assets/animation_spanish.mp4'
import meditationImgSrc from './assets/meditating.png'
import cloudsImgSrc from './assets/clouds.png'
import posterImgSrc from './assets/poster.png'
import togetherImgSrc from './assets/together.png'

import {
  LearnScreenWrapper,
  SectionWrapper,
  SectionHeader,
  SectionBody,
  ImageWrapper,
} from './styles'

function Learn({ route }) {
  const { language } = route.params
  const copyData = language === 'spanish' ? spanishCopy : englishCopy
  const videoSource = language === 'spanish' ? animatedVideoSpanishSrc : animatedVideoSrc

  return (
    <LearnScreenWrapper>
      <ScrollView>
        <SectionWrapper>
          <SectionHeader>{copyData.learnScreen.whatIsHeader}</SectionHeader>
          <VideoPlayer source={videoSource} />
          <SectionBody>{copyData.learnScreen.whatIsBody}</SectionBody>
        </SectionWrapper>
        <ImageWrapper source={meditationImgSrc} />
        <SectionWrapper>
          {/* eslint-disable react-native/no-raw-text */}
          <SectionHeader>Benefits</SectionHeader>
          <SectionBody>{copyData.learnScreen.benefitsBody1}</SectionBody>
          <SectionBody>{copyData.learnScreen.benefitsBody2}</SectionBody>
          <ImageWrapper source={cloudsImgSrc} />
        </SectionWrapper>
        <SectionWrapper>
          {/* eslint-disable react-native/no-raw-text */}
          <SectionHeader>Posters</SectionHeader>
          <ImageWrapper source={posterImgSrc} />
          <ImageWrapper source={togetherImgSrc} />
        </SectionWrapper>
      </ScrollView>
    </LearnScreenWrapper>
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
