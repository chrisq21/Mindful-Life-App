import styled from 'styled-components/native'
import Colors from '../../styles/colors'

export const AudioPlayerWrapper = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.mediumColor};
`

export const AudioPlayerInnerWrapper = styled.View`
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const DescriptionWrapper = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const PlaylistTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.darkColor};
`

export const TrackTitle = styled.Text`
  font-size: 35px;
  font-weight: bold;
  padding-bottom: 10px;
  padding-top: 10px;
  text-align: center;
  color: ${Colors.white};
`
