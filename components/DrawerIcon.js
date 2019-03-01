import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

export default class DrawerIcon extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
          <Image
            style={{ width: 25 }}
            source={require("../assets/menu.png")}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    alignItems: 'center'
  }
});
