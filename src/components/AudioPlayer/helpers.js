/**
 * Returns data needed to setup Audio object
 * @param {string} interruptionModeiOS
 * @param {string} interruptionModeAndroid
 * @return AudioMode data
 */
export const getAudioModeData = (interruptionModeIOS, interruptionModeAndroid) => ({
  allowsRecordingIOS: false,
  playsInSilentModeIOS: true,
  interruptionModeIOS,
  staysActiveInBackground: true,
  interruptionModeAndroid,
  playThroughEarpieceAndroid: false,
  shouldDuckAndroid: false,
})
