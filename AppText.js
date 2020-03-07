import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { BaseTextStyles } from './styles/baseStyles'

function AppText(props) {
  const { style, children } = props
  return <Text style={[BaseTextStyles, style]}>{children}</Text>
}

AppText.propTypes = {
  style: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
}

export default AppText
