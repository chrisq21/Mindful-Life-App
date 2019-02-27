import React from 'react';
import { View, Text, Button } from 'react-native';
export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          title='PlaylistsList'
          onPress={() => navigate('PlaylistsList')}
        />
        <Button
          title='Learn'
          onPress={() => navigate('Learn')}
        />
        <Button
          title='Check In'
          onPress={() => navigate('CheckIn')}
        />
      </View>
    );
  }
}
