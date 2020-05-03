import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native'
import Colors from '../../styles/colors'

export const AboutScreen = styled(View)`
  background-color: ${Colors.blue};
  padding: 18px;
`

export const AboutText = styled(Text)`
  color: ${Colors.white};
  font-size: 20px;
  line-height: 25px;
`

export const AboutTextWithVerticalMargins = styled(AboutText)`
  margin: 15px 0;
`

export const LogoImage = styled(Image)`
  width: 100%;
  margin: 10px 0;
  resize-mode: contain;
`

export const LinksWrapper = styled(View)`
  align-items: center;
  padding-bottom: 10px;
  padding-top: 10px;
`

export const Link = styled(AboutText)`
  font-size: 30px;
  font-weight: bold;
  line-height: 30px;
  margin-bottom: 20px;
  text-decoration-line: underline;
`
