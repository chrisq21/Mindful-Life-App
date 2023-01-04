import styled from 'styled-components/native'
import ScreenWrapper from '../../components/shared/ScreenWrapper'
import Colors from '../../styles/colors'

export const LearnScreenWrapper = styled(ScreenWrapper)`
  background-color: ${Colors.learn};
`

export const BodyWrapper = styled.View`
  padding: 30px;
`

export const SectionWrapper = styled.View`
  width: 100%;
`

export const SectionHeader = styled.Text`
  color: ${Colors.black};
  font-size: 40px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 5px;
`

export const MainHeader = styled(SectionHeader)`
  margin: 30px;
  margin-left: 30px;
`

export const SectionBody = styled.Text`
  color: ${Colors.black};
  font-size: 25px;
  line-height: 37px;
  margin-bottom: 30px;
  margin-top: 10px;
`

export const ImageWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Image = styled.Image`
  width: 100%;
  margin: 30px 0;
  border-radius: 10px;
`
