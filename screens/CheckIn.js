import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { ScreenContainerStyles } from '../styles/baseStyles';
import DrawerIcon from '../components/DrawerIcon'
import { Colors } from '../constants/colors';
import { spanishCopy, englishCopy } from '../constants/copy'

export default class CheckIn extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const category = navigation.getParam('category', '');
    return {
      title: 'Check In',
      drawerLabel: 'About',
      headerRight: <DrawerIcon navigation={navigation} />,
      headerStyle: {
        backgroundColor: Colors.red,
        borderBottomWidth: 0
      },
      headerTintColor: Colors.lightRed,
      headerTitleStyle: {
        color: Colors.lightRed
      },
    };
  };

  render() {
    const { navigation } = this.props;
    const language = navigation.getParam('language', 'english');
    const copyData = language === 'spanish' ? spanishCopy : englishCopy;

    return (
      <View style={[styles.screenContainer, ScreenContainerStyles]}>
        <ScrollView>
          <Image resizeMode='contain' style={styles.sectionImage} source={require('../assets/checkin.png')}></Image>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>{copyData.checkInScreen.step1.header}</Text>
            <View style={styles.sectionBodyContainer}>
              <Text style={styles.sectionBodyText}>{copyData.checkInScreen.step1.body1}</Text>
              <Text style={styles.sectionBodyText}>{copyData.checkInScreen.step1.body2}</Text>
              <Text style={styles.sectionBodyText}>{copyData.checkInScreen.step1.body3}</Text>
              <Text style={styles.sectionBodyText}>{copyData.checkInScreen.step1.body4}</Text>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>{copyData.checkInScreen.step2.header}</Text>
            <View style={styles.sectionBodyContainer}>
              <Text style={styles.sectionBodyText}>{copyData.checkInScreen.step2.body1}</Text>
              <Text style={styles.sectionBodyText}>{copyData.checkInScreen.step2.body2}</Text>
              <Text style={styles.sectionBodyText}>{copyData.checkInScreen.step2.body3}</Text>
              <Text style={styles.sectionBodyText}>{copyData.checkInScreen.step2.body4}</Text>
              <Text style={styles.sectionBodyText}>{copyData.checkInScreen.step2.body5}</Text>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>{copyData.checkInScreen.step3.header}</Text>
            <View style={styles.sectionBodyContainer}>
              <Text style={styles.sectionBodyText}>{copyData.checkInScreen.step3.body1}</Text>
              <Text style={styles.sectionBodyText}>{copyData.checkInScreen.step3.body2}</Text>
              <Text style={styles.sectionBodyText}>{copyData.checkInScreen.step3.body3}</Text>
              <Text style={styles.sectionBodyText}>{copyData.checkInScreen.step3.body4}</Text>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>{copyData.checkInScreen.step4.header}</Text>
            <View style={styles.sectionBodyContainer}>
              <Text style={styles.sectionBodyText}>{copyData.checkInScreen.step4.body1}</Text>
              <Text style={styles.sectionBodyText}>{copyData.checkInScreen.step4.body2}</Text>
              <Text style={styles.sectionBodyText}>{copyData.checkInScreen.step4.body3}</Text>
              <Text style={styles.sectionBodyText}>{copyData.checkInScreen.step4.body4}</Text>
              <Text style={styles.sectionBodyText}>{copyData.checkInScreen.step4.body5}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: Colors.red,
    padding: 30
  },
  sectionContainer: {
    marginTop: 30,
    marginBottom: 30
  },
  sectionHeader: {
    color: Colors.lightRed,
    fontWeight: 'bold',
    fontSize: 25
  },
  sectionImage: {
    flex: 1,
    width: null,
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 10
  },
  sectionBodyContainer: {
    marginTop: 25,
    marginBottom: 15,
    lineHeight: 30
  },
  sectionBodyText: {
    fontSize: 22,
    color: 'white',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold'
  }
});
