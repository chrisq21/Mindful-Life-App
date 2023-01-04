import styled from 'styled-components/native'
import Colors from '../../styles/colors'

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
  color: ${Colors.black};
  flex: 2;
  font-size: 30px;
  font-weight: bold;
  margin-left: 20px;
`

export const LearnButton = styled(SectionButton)`
  background-color: ${Colors.learn};
`

export const LearnButtonText = styled(ButtonText)`
  color: ${Colors.black};
`

export const CheckInButton = styled(SectionButton)`
  background-color: ${Colors.checkIn};
`

export const CheckInButtonText = styled(ButtonText)`
  color: ${Colors.black};
`

export const SitsButton = styled(SectionButton)`
  background-color: ${Colors.sits};
`

export const SitsButtonText = styled(ButtonText)`
  color: ${Colors.black};
`

export const HipHopButton = styled(SectionButton)`
  background-color: ${Colors.hipHop};
`

export const HipHopButtonText = styled(ButtonText)`
  color: ${Colors.black};
`
export const ImageWrapper = styled.Image`
  align-self: center;
  flex: 1;
  height: 50%;
  resize-mode: contain;
`
