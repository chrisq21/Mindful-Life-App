import React from 'react';
import { TouchableOpacity, View, Text, Button, StyleSheet, Image } from 'react-native';
import { ScreenContainerStyles } from '../styles/baseStyles';
import { Colors } from '../constants/colors'
export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: 'black',
      borderBottomWidth: 0
    },
    headerTintColor: Colors.lightBlue,
    headerTitleStyle: {
      color: Colors.lightBlue
    },
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ScreenContainerStyles}>
        <TouchableOpacity style={[styles.sectionButton, { backgroundColor: Colors.blue }]} onPress={() => navigate('Learn')}>
          <Image resizeMode='contain' style={styles.sectionImage} source={require('../assets/clouds-learn.png')}></Image>
          <Text style={[styles.sectionText, {color: Colors.lightBlue}]}>What Is {"\n"} Mindfulness?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.sectionButton, { backgroundColor: Colors.red }]} onPress={() => navigate('CheckIn')}>
          <Image resizeMode='contain' style={styles.sectionImage} source={require('../assets/anchor.png')}></Image>
          <Text style={[styles.sectionText, {color: Colors.lightRed}]}>Mindful {"\n"}Check In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.sectionButton, { backgroundColor: Colors.green }]} onPress={() => navigate('PlaylistsList', {category: 'sits'})}>
          <Image resizeMode='contain' style={styles.sectionImage} source={require('../assets/smile.png')}></Image>
          <Text style={[styles.sectionText, {color: Colors.lightGreen}]}>Mindful Sits</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.sectionButton, { backgroundColor: Colors.orange }]} onPress={() => navigate('PlaylistsList', {category: 'hip-hop'})}>
          <Image resizeMode='contain' style={styles.sectionImage} source={require('../assets/headphones.png')}></Image>
          <Text style={[styles.sectionText, {color: Colors.lightOrange}]}>Mindful {"\n"}Hip Hop</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingRight: 20,
    paddingLeft: 20
  },
  sectionText: {
    marginLeft: 20,
    flex: 2,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  sectionImage: {
    flex: 1,
    alignSelf: 'center',
    height: '50%',
    resizeMode: 'contain'
  }
});
