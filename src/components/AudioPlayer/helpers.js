/**
 * Returns data needed to setup Audio object
 * @param {string} interruptionModeiOS
 * @param {string} interruptionModeAndroid
 * @return AudioMode data
 */
export const getAudioModeData = (interruptionModeiOS, interruptionModeAndroid) => ({
  allowsRecordingIOS: false,
  interruptionModeIOS: interruptionModeiOS,
  interruptionModeAndroid: interruptionModeAndroid,
  playsInSilentModeIOS: true,
  playThroughEarpieceAndroid: false,
  shouldDuckAndroid: false,
  staysActiveInBackground: true,
})

/**
 * Accepts milliseconds and returns a 'm:s' string where m = minutes and s = seconds
 * @param {number} millis
 * @return {string} The millisecond value converted to a 'm:s' format
 */
export const millisToMinutesAndSeconds = (millis) => {
  const minutes = Math.floor(millis / 60000)
  const seconds = ((millis % 60000) / 1000).toFixed(0)
  return seconds === 60 ? `${minutes + 1}:00` : `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
