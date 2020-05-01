import { Text } from 'react-native'
import ScreenWrapper from './ScreenWrapper'
import styled from 'styled-components/native'

// TODO use styled components theme
export const ListWrapper = styled(ScreenWrapper)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`
// TODO use styled components theme
export const Heading = styled(Text)`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  padding-top: 25px;
  padding-bottom: 25px;
  color: ${({ color }) => color};
`
