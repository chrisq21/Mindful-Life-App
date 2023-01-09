import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'
import VideoPlayer from '../../components/VideoPlayer'
import { spanishCopy, englishCopy } from '../../constants/copy'
import animatedVideoSrc from './assets/animation.mp4'
import animatedVideoSpanishSrc from './assets/animation_spanish.mp4'
import withoutSrc from './assets/without.png'
import withSrc from './assets/with.png'
import skillsSrc from './assets/skills.png'
import villageSrc from './assets/village.png'

import {
  LearnScreenWrapper,
  SectionWrapper,
  SectionHeader,
  SectionBody,
  ImageWrapper,
  Image,
  BodyWrapper,
  MainHeader,
} from './styles'

function Learn({ route }) {
  const { language } = route.params
  const copyData = language === 'spanish' ? spanishCopy : englishCopy
  const videoSource = language === 'spanish' ? animatedVideoSpanishSrc : animatedVideoSrc

  return (
    <LearnScreenWrapper>
      <ScrollView>
        <MainHeader>{copyData.learnScreen.whatIsHeader}</MainHeader>
        <VideoPlayer source={videoSource} />
        <BodyWrapper>
          <SectionWrapper>
            <SectionBody>{copyData.learnScreen.whatIsBody}</SectionBody>
            <ImageWrapper>
              <Image source={withoutSrc} style={{ height: undefined, aspectRatio: 1 }} />
              <Image source={withSrc} style={{ height: undefined, aspectRatio: 1 }} />
            </ImageWrapper>
          </SectionWrapper>
          <SectionWrapper>
            {/* eslint-disable react-native/no-raw-text */}
            <SectionHeader>Benefits</SectionHeader>
            <SectionBody>{copyData.learnScreen.benefitsBody1}</SectionBody>
            <SectionBody>{copyData.learnScreen.benefitsBody2}</SectionBody>
          </SectionWrapper>
          <SectionWrapper>
            {/* eslint-disable react-native/no-raw-text */}
            <SectionHeader>Posters</SectionHeader>
            <ImageWrapper>
              <Image source={skillsSrc} style={{ height: undefined, aspectRatio: 0.833 }} />
              <Image source={villageSrc} style={{ height: undefined, aspectRatio: 0.833 }} />
            </ImageWrapper>
          </SectionWrapper>
        </BodyWrapper>
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
