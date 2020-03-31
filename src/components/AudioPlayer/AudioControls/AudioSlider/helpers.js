/**
 * Accepts milliseconds and returns a 'mm:ss' string where m = minutes and s = seconds
 * @param {number} millis
 * @return {string} The millisecond value converted to a 'mm:ss' format
 */
export const getFormattedTime = (millis) => {
  const minutes = Math.floor(millis / 60000)
  const seconds = ((millis % 60000) / 1000).toFixed(0)
  return seconds === 60 ? `${minutes + 1}:00` : `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
