import ScreenWrapper from '../../components/Shared/ScreenWrapper'
import styled from 'styled-components/native'
import Colors from '../../styles/Colors'

export const LearnScreenWrapper = styled(ScreenWrapper)`
  background-color: ${Colors.blue};
`

export const SectionWrapper = styled.View`
  width: 100%;
`

const BaseTextWrapper = styled.Text`
  padding: 0 30px;
`

export const SectionHeader = styled(BaseTextWrapper)`
  color: ${Colors.lightBlue};
  font-size: 40px;
  font-weight: bold;
  margin: 10px 0;
`

export const SectionBody = styled(BaseTextWrapper)`
  color: ${Colors.white};
  font-size: 25px;
  line-height: 40px;
  margin: 15px 0;
`

export const ImageWrapper = styled.Image`
  width: 80%;
  margin: 10px auto;
  resize-mode: contain;
`
