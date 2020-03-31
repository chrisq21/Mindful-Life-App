import React from 'react'
import Colors from '../../styles/Colors'
import { ActivityIndicator } from 'react-native'

function LoadingSpinner() {
  return <ActivityIndicator size="large" color={Colors.white} />
}

export default LoadingSpinner
