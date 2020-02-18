import React from 'react'
import { Text } from 'react-native'
import { BaseTextStyles } from './styles/baseStyles'

export default class AppText extends React.Component {
  render() {
    return <Text style={[BaseTextStyles, this.props.style]}>{this.props.children}</Text>
  }
}
