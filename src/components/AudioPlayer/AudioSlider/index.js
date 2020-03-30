import React from 'react'
import { Slider, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { getFormattedTime } from './helpers'
import { AudioSliderWrapper, SliderTimesWrapper } from './styles'

function AudioSlider({ durationMillis, sliderPositionMillis, onSliderChange, onSlidingComplete }) {
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
        minimumTrackTintColor="black"
        maximumTrackTintColor="white"
      />
      <SliderTimesWrapper>
        <Text>{formattedTrackPosition}</Text>
        <Text>{formattedTrackDuration}</Text>
      </SliderTimesWrapper>
    </AudioSliderWrapper>
  )
}

AudioSlider.propTypes = {
  durationMillis: PropTypes.number.isRequired,
  sliderPositionMillis: PropTypes.number.isRequired,
  onSliderChange: PropTypes.func.isRequired,
  onSlidingComplete: PropTypes.func.isRequired,
}

export default AudioSlider
