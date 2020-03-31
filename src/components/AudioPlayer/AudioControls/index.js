import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import AudioSlider from './AudioSlider'
import ToggleButton from './ToggleButton'

const ControlsWrapper = styled.View`
  display: flex;
  flex-direction: column;
  flex: 2;
  align-items: center;
  width: 100%;
`

function AudioControls({
  isPlaying,
  pause,
  play,
  category,
  durationMillis,
  sliderPositionMillis,
  onSliderChange,
  onSlidingComplete,
}) {
  return (
    <ControlsWrapper>
      <ToggleButton isPlayButton={!isPlaying} onPress={isPlaying ? pause : play} />
      <AudioSlider
        category={category}
        durationMillis={durationMillis}
        sliderPositionMillis={sliderPositionMillis}
        onSliderChange={onSliderChange}
        onSlidingComplete={onSlidingComplete}
      />
    </ControlsWrapper>
  )
}

AudioControls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  pause: PropTypes.func.isRequired,
  play: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  durationMillis: PropTypes.number.isRequired,
  sliderPositionMillis: PropTypes.number.isRequired,
  onSliderChange: PropTypes.func.isRequired,
  onSlidingComplete: PropTypes.func.isRequired,
}

export default AudioControls
