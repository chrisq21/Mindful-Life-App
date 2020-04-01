import React from 'react'
import { ActivityIndicator } from 'react-native'
import Colors from '../../styles/Colors'

function LoadingSpinner() {
  return <ActivityIndicator size="large" color={Colors.white} />
}

export default LoadingSpinner
