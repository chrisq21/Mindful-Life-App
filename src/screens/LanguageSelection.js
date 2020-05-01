import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import Colors from '../constants/colors'
import ScreenWrapper from '../components/Shared/ScreenWrapper'

const LanguageButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  padding-right: 20px;
  padding-left: 20px;
`

const ButtonText = styled.Text`
  color: ${Colors.white};
  flex: 2;
  font-size: 35px;
  font-weight: bold;
  margin-left: 2px;
`

const EnglishButton = styled(LanguageButton)`
  background-color: ${Colors.blue};
`

const SpanishButton = styled(LanguageButton)`
  background-color: ${Colors.red};
`

function LanguageSelection({ navigation }) {
  return (
    <ScreenWrapper>
      <EnglishButton onPress={() => navigation.navigate('Home', { language: 'english' })}>
        {/* eslint-disable react-native/no-raw-text */}
        <ButtonText>English</ButtonText>
      </EnglishButton>
      <SpanishButton onPress={() => navigation.navigate('Home', { language: 'spanish' })}>
        {/* eslint-disable react-native/no-raw-text */}
        <ButtonText>Español</ButtonText>
      </SpanishButton>
    </ScreenWrapper>
  )
}

LanguageSelection.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
}

export default LanguageSelection
