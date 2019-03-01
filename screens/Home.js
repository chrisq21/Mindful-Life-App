import React from 'react';
import { TouchableOpacity, View, Text, Button, StyleSheet, Image } from 'react-native';
import { ScreenContainerStyles } from '../styles/baseStyles';
import { spanishCopy, englishCopy } from '../constants/copy'
import { Colors } from '../constants/colors'
import DrawerIcon from '../components/DrawerIcon'

export default class Home extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const category = navigation.getParam('category', '');
    return {
      title: 'Home',
      drawerLabel: 'About',
      headerRight: <DrawerIcon navigation={navigation} />,
      headerStyle: {
        backgroundColor: 'black',
        borderBottomWidth: 0
      },
      headerTintColor: Colors.lightBlue,
      headerTitleStyle: {
        color: Colors.lightBlue
      },
    };
  };

  render() {
    const { navigation } = this.props;
    const language = navigation.getParam('language', 'english');
    const copyData = language === 'spanish' ? spanishCopy : englishCopy;

    return (
      <View style={ScreenContainerStyles}>
        <TouchableOpacity style={[styles.sectionButton, { backgroundColor: Colors.blue }]} onPress={() => navigation.navigate('Learn', { language })}>
          <Text style={[styles.sectionText, {color: Colors.lightBlue}]}>{copyData.homeScreen.learn}</Text>
          <Image resizeMode='contain' style={styles.sectionImage} source={require('../assets/question-mark.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.sectionButton, { backgroundColor: Colors.red }]} onPress={() => navigation.navigate('CheckIn', { language })}>
        <Text style={[styles.sectionText, {color: Colors.lightRed}]}>{copyData.homeScreen.checkIn}</Text>
          <Image resizeMode='contain' style={styles.sectionImage} source={require('../assets/anchor.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.sectionButton, { backgroundColor: Colors.green }]} onPress={() => navigation.navigate('PlaylistsList', {category: 'sits', language})}>
        <Text style={[styles.sectionText, {color: Colors.lightGreen}]}>{copyData.homeScreen.sits}</Text>
          <Image resizeMode='contain' style={styles.sectionImage} source={require('../assets/smile.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.sectionButton, { backgroundColor: Colors.orange }]} onPress={() => navigation.navigate('PlaylistsList', {category: 'hip-hop', language})}>
        <Text style={[styles.sectionText, {color: Colors.lightOrange}]}>{copyData.homeScreen.hipHop}</Text>
          <Image resizeMode='contain' style={styles.sectionImage} source={require('../assets/headphones.png')}></Image>
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
