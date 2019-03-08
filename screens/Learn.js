import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo'
import VideoPlayer from '../components/VideoPlayer'
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
    const { width } = Dimensions.get('window');

    return (
      <View style={{ backgroundColor: Colors.blue }}>
        <ScrollView>
          <View style={ScreenContainerStyles}>
            <View style={styles.sectionContainer}>
              <View style={styles.paddingContainer}>
                <Text style={styles.sectionHeader}>{copyData.learnScreen.whatIsHeader}</Text>
              </View>
              <VideoPlayer width={width} />
              <View style={styles.paddingContainer}>
                <Text style={styles.sectionBodyText}>
                  {copyData.learnScreen.whatIsBody}
                </Text>
              </View>
            </View>
            <Image style={[styles.sectionImage]} source={require('../assets/meditating.png')}></Image>
            <View style={[styles.sectionContainer, styles.paddingContainer]}>
              <Text style={styles.sectionHeader}>Benefits</Text>
              <Text style={styles.sectionBodyText}>
              {copyData.learnScreen.benefitsBody1}
              </Text>
              <Text style={styles.sectionBodyText}>
              {copyData.learnScreen.benefitsBody2}
              </Text>
              <Image style={styles.sectionImage} source={require('../assets/clouds.png')}></Image>
            </View>
            <View style={[styles.sectionContainer, styles.paddingContainer]}>
              <Text style={styles.sectionHeader}>Posters</Text>
              <Image style={[styles.sectionImage, styles.posterImage]} source={require('../assets/poster.png')}></Image>
              <Image style={[styles.sectionImage, styles.posterImage]} source={require('../assets/together.png')}></Image>
            </View>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  paddingContainer: {
    padding: 30
  },
  sectionContainer: {
    flex: 1,
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
  posterImage: {
    height: 450,
    width: null,
    resizeMode: 'contain'
  },
  sectionBodyText: {
    color: 'white',
    marginTop: 15,
    marginBottom: 15,
    fontSize: 25,
    lineHeight: 40
  }
});
