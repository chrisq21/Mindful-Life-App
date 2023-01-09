import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native'
import Colors from '../../styles/colors'

export const AboutScreen = styled(View)`
  background-color: ${Colors.white};
  padding: 20px 15px;
`

export const AboutText = styled(Text)`
  font-family: 'Inter-Black';
  color: ${Colors.black};
  font-size: 20px;
  line-height: 25px;
  margin: 20px 0;
`

export const LogoImage = styled(Image)`
  margin-top: 40px;
  maring-bottom: 30px;
  width: 100%;
  resize-mode: contain;
`

export const LinksWrapper = styled(View)`
  padding-bottom: 10px;
  text-align: left;
`

export const Link = styled(AboutText)`
  font-size: 30px;
  font-weight: bold;
  line-height: 30px;
  margin-bottom: 20px;
  text-decoration-line: underline;
  text-align: left;
`
