import { Text } from 'react-native'
import styled from 'styled-components/native'
import ScreenWrapper from './ScreenWrapper'

export const ListWrapper = styled(ScreenWrapper)`
  background-color: ${({ theme }) => theme.mediumColor};
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`

export const Heading = styled(Text)`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  padding-top: 25px;
  padding-bottom: 25px;
  color: ${({ theme }) => theme.lightColor};
`
