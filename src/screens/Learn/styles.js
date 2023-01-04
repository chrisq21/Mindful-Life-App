import styled from 'styled-components/native'
import ScreenWrapper from '../../components/shared/ScreenWrapper'
import Colors from '../../styles/colors'

export const LearnScreenWrapper = styled(ScreenWrapper)`
  background-color: ${Colors.learn};
`

export const SectionWrapper = styled.View`
  width: 100%;
`

const BaseTextWrapper = styled.Text`
  padding: 0 30px;
`

export const SectionHeader = styled(BaseTextWrapper)`
  color: ${Colors.black};
  font-size: 40px;
  font-weight: bold;
  margin: 25px 0;
`

export const SectionBody = styled(BaseTextWrapper)`
  color: ${Colors.black};
  font-size: 25px;
  line-height: 40px;
  margin: 15px 0;
`

export const ImageWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Image = styled.Image`
  width: 85%;
  margin: 20px 0;
  border-radius: 10px;
`
