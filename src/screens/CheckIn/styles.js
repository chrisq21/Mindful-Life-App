import styled from 'styled-components'
import Colors from '../../styles/colors'
import ScreenWrapper from '../../components/shared/ScreenWrapper'

export const CheckinScreenWrapper = styled(ScreenWrapper)`
  background-color: ${Colors.checkIn};
`

export const BodyWrapper = styled.View`
  padding: 30px;
`

export const SectionWrapper = styled.View`
  margin-bottom: 30px;
`

export const SectionHeader = styled.Text`
  font-family: 'Inter-Black';
  color: ${Colors.text};
  font-size: 32px;
  font-weight: bold;
`

export const SectionBodyWrapper = styled.View`
  margin: 40px 0;
`

export const SectionBody = styled.Text`
  font-family: 'Inter-Black';
  color: ${Colors.black};
  font-size: 22px;
  font-weight: 600;
  margin: 12px 0;
`

export const HeaderImage = styled.Image`
  resize-mode: contain;
  margin-bottom: 10px;
  width: 100%;
`
