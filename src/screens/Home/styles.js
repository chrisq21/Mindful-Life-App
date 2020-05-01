import styled from 'styled-components/native'
import Colors from '../../constants/colors'

const SectionButton = styled.TouchableOpacity`
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
  font-size: 30px;
  font-weight: bold;
  margin-left: 20px;
`

export const LearnButton = styled(SectionButton)`
  background-color: ${Colors.blue};
`

export const LearnButtonText = styled(ButtonText)`
  color: ${Colors.lightBlue};
`

export const CheckInButton = styled(SectionButton)`
  background-color: ${Colors.red};
`

export const CheckInButtonText = styled(ButtonText)`
  color: ${Colors.lightRed};
`

export const SitsButton = styled(SectionButton)`
  background-color: ${Colors.green};
`

export const SitsButtonText = styled(ButtonText)`
  color: ${Colors.lightGreen};
`

export const HipHopButton = styled(SectionButton)`
  background-color: ${Colors.orange};
`

export const HipHopButtonText = styled(ButtonText)`
  color: ${Colors.lightOrange};
`
export const ImageWrapper = styled.Image`
  align-self: center;
  flex: 1;
  height: 50%;
  resize-mode: contain;
`
