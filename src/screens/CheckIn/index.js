import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'
import { spanishCopy, englishCopy } from '../../constants/copy'
import checkInImgSrc from './sit.png'
import {
  CheckinScreenWrapper,
  SectionWrapper,
  SectionHeader,
  SectionBodyWrapper,
  SectionBody,
  BodyWrapper,
  HeaderImage,
} from './styles'
// 1.316205533596838

function CheckIn({ route }) {
  const { language } = route.params
  const copyData = language === 'spanish' ? spanishCopy : englishCopy

  return (
    <CheckinScreenWrapper>
      <ScrollView>
        <HeaderImage source={checkInImgSrc} style={{ height: undefined, aspectRatio: 1.316 }} />
        <BodyWrapper>
          <SectionWrapper>
            <SectionHeader>{copyData.checkInScreen.step1.header}</SectionHeader>
            <SectionBodyWrapper>
              <SectionBody>{copyData.checkInScreen.step1.body1}</SectionBody>
              <SectionBody>{copyData.checkInScreen.step1.body2}</SectionBody>
              <SectionBody>{copyData.checkInScreen.step1.body3}</SectionBody>
              <SectionBody>{copyData.checkInScreen.step1.body4}</SectionBody>
            </SectionBodyWrapper>
          </SectionWrapper>
          <SectionWrapper>
            <SectionHeader>{copyData.checkInScreen.step2.header}</SectionHeader>
            <SectionBodyWrapper>
              <SectionBody>{copyData.checkInScreen.step2.body1}</SectionBody>
              <SectionBody>{copyData.checkInScreen.step2.body2}</SectionBody>
              <SectionBody>{copyData.checkInScreen.step2.body3}</SectionBody>
              <SectionBody>{copyData.checkInScreen.step2.body4}</SectionBody>
              <SectionBody>{copyData.checkInScreen.step2.body5}</SectionBody>
            </SectionBodyWrapper>
          </SectionWrapper>
          <SectionWrapper>
            <SectionHeader>{copyData.checkInScreen.step3.header}</SectionHeader>
            <SectionBodyWrapper>
              <SectionBody>{copyData.checkInScreen.step3.body1}</SectionBody>
              <SectionBody>{copyData.checkInScreen.step3.body2}</SectionBody>
              <SectionBody>{copyData.checkInScreen.step3.body3}</SectionBody>
              <SectionBody>{copyData.checkInScreen.step3.body4}</SectionBody>
            </SectionBodyWrapper>
          </SectionWrapper>
          <SectionWrapper>
            <SectionHeader>{copyData.checkInScreen.step4.header}</SectionHeader>
            <SectionBodyWrapper>
              <SectionBody>{copyData.checkInScreen.step4.body1}</SectionBody>
              <SectionBody>{copyData.checkInScreen.step4.body2}</SectionBody>
              <SectionBody>{copyData.checkInScreen.step4.body3}</SectionBody>
              <SectionBody>{copyData.checkInScreen.step4.body4}</SectionBody>
              <SectionBody>{copyData.checkInScreen.step4.body5}</SectionBody>
            </SectionBodyWrapper>
          </SectionWrapper>
        </BodyWrapper>
      </ScrollView>
    </CheckinScreenWrapper>
  )
}

CheckIn.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      language: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default CheckIn
