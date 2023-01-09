import styled from 'styled-components/native'
import Colors from '../../styles/colors'

const SectionButton = styled.TouchableOpacity`
  font-family: 'Inter-Black';
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const ButtonText = styled.Text`
  font-family: 'Inter-Black';
  flex: 1;
  color: ${Colors.black};
  font-size: 32px;
  font-weight: bold;
  margin-left: 25px;
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
  justify-self: flex-end;
  flex: 1;
  height: 56%;
  resize-mode: contain;
`
