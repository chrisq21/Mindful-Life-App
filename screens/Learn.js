import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { ScreenContainerStyles } from '../styles/baseStyles'
import { spanishCopy, englishCopy } from '../constants/copy'
import { Colors } from '../constants/colors'
import DrawerIcon from '../components/DrawerIcon'

export default class Learn extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const category = navigation.getParam('category', '');
    return {
      title: 'Learn',
      drawerLabel: 'About',
      headerRight: <DrawerIcon navigation={navigation} />,
      headerStyle: {
        backgroundColor: Colors.blue,
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
      <View style={{ backgroundColor: Colors.blue }}>
        <ScrollView>
          <View style={[styles.screenContainer, ScreenContainerStyles]}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionHeader}>{copyData.learnScreen.whatIsHeader}</Text>
              <Image resizeMode='contain' style={styles.sectionImage} source={require('../assets/meditating.png')}></Image>
              <Text style={styles.sectionBodyText}>
              {copyData.learnScreen.whatIsBody}
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionHeader}>Benefits</Text>
              <Text style={styles.sectionBodyText}>
              {copyData.learnScreen.benefitsBody1}
              </Text>
              <Text style={styles.sectionBodyText}>
              {copyData.learnScreen.benefitsBody2}
              </Text>
              <Image resizeMode='contain' style={styles.sectionImage} source={require('../assets/clouds.png')}></Image>
            </View>
          </View>
          <Image resizeMode='contain' style={styles.sectionImage} source={require('../assets/poster.png')}></Image>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    padding: 30
  },
  sectionContainer: {
    marginTop: 30,
    marginBottom: 30
  },
  sectionHeader: {
    color: Colors.lightBlue,
    fontWeight: 'bold',
    fontSize: 40
  },
  sectionImage: {
    flex: 1,
    width: null,
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 10
  },
  sectionBodyText: {
    color: 'white',
    marginTop: 15,
    marginBottom: 15,
    fontSize: 25,
    lineHeight: 40
  }
});
