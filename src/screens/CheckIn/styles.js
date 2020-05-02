import styled from 'styled-components'
import Colors from '../../styles/colors'
import ScreenWrapper from '../../components/shared/ScreenWrapper'

export const CheckinScreenWrapper = styled(ScreenWrapper)`
  background-color: ${Colors.red};
  padding: 30px;
`

export const SectionWrapper = styled.View`
  margin: 30px 0;
`

export const SectionHeader = styled.Text`
  color: ${Colors.lightRed};
  font-size: 25px;
  font-weight: bold;
`

export const SectionBodyWrapper = styled.View`
  line-height: 30px;
  margin-bottom: 15px;
  margin-top: 25px;
`

export const SectionBody = styled.Text`
  color: ${Colors.white};
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const ImageWrapper = styled.Image`
  resize-mode: contain;
  margin: 10px auto;
  width: 100%;
`
