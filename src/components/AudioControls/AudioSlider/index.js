import React from 'react'
import { Slider } from 'react-native'
import PropTypes from 'prop-types'
import { getFormattedTime } from './helpers'
import { AudioSliderWrapper, SliderTimesWrapper, SliderTime } from './styles'
import Colors from '../../../styles/colors'

function AudioSlider({
  durationMillis,
  sliderPositionMillis,
  onSliderChange,
  onSlidingComplete,
  category,
}) {
  const formattedTrackPosition = getFormattedTime(sliderPositionMillis)
  const formattedTrackDuration = getFormattedTime(durationMillis)
  return (
    <AudioSliderWrapper>
      <Slider
        minimumValue={0}
        value={sliderPositionMillis}
        maximumValue={durationMillis}
        onValueChange={onSliderChange}
        onSlidingComplete={onSlidingComplete}
        minimumTrackTintColor={category === 'hip-hop' ? Colors.darkOrange : Colors.darkGreen}
        maximumTrackTintColor="white"
      />
      <SliderTimesWrapper>
        <SliderTime>{formattedTrackPosition}</SliderTime>
        <SliderTime>{formattedTrackDuration}</SliderTime>
      </SliderTimesWrapper>
    </AudioSliderWrapper>
  )
}

AudioSlider.propTypes = {
  category: PropTypes.string.isRequired,
  durationMillis: PropTypes.number.isRequired,
  sliderPositionMillis: PropTypes.number.isRequired,
  onSliderChange: PropTypes.func.isRequired,
  onSlidingComplete: PropTypes.func.isRequired,
}

export default AudioSlider
