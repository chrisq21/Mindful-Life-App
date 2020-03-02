import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { Video } from 'expo'
import VideoPlayer from '../components/VideoPlayer'
import { ScreenContainerStyles } from '../styles/baseStyles'
import { spanishCopy, englishCopy } from '../constants/copy'
import { Colors } from '../constants/colors'
import DrawerIcon from '../components/DrawerIcon'

export default class Learn extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const category = navigation.getParam('category', '')
    return {
      title: 'Learn',
      drawerLabel: 'About',
      headerRight: <DrawerIcon navigation={navigation} />,
      headerStyle: {
        backgroundColor: Colors.blue,
        borderBottomWidth: 0,
      },
      headerTintColor: Colors.lightBlue,
      headerTitleStyle: {
        color: Colors.lightBlue,
      },
    }
  }

  render() {
    const { navigation } = this.props
    const language = navigation.getParam('language', 'english')
    const copyData = language === 'spanish' ? spanishCopy : englishCopy
    const { width } = Dimensions.get('window')
    const videoSource =
      language === 'spanish'
        ? require('../assets/animation_spanish.mp4')
        : require('../assets/animation.mp4')

    return (
      <View style={{ backgroundColor: Colors.blue }}>
        <ScrollView>
          <View style={ScreenContainerStyles}>
            <View style={styles.sectionContainer}>
              <View style={styles.paddingContainer}>
                <Text style={styles.sectionHeader}>{copyData.learnScreen.whatIsHeader}</Text>
              </View>
              <VideoPlayer source={videoSource} width={width} />
              <View style={styles.paddingContainer}>
                <Text style={styles.sectionBodyText}>{copyData.learnScreen.whatIsBody}</Text>
              </View>
            </View>
            <Image style={styles.sectionImage} source={require('../assets/meditating.png')} />
            <View style={[styles.sectionContainer, styles.paddingContainer]}>
              <Text style={styles.sectionHeader}>Benefits</Text>
              <Text style={styles.sectionBodyText}>{copyData.learnScreen.benefitsBody1}</Text>
              <Text style={styles.sectionBodyText}>{copyData.learnScreen.benefitsBody2}</Text>
              <Image style={styles.sectionImage} source={require('../assets/clouds.png')} />
            </View>
            <View style={[styles.sectionContainer, styles.paddingContainer]}>
              <Text style={styles.sectionHeader}>Posters</Text>
              <Image
                style={[styles.sectionImage, styles.posterImage]}
                source={require('../assets/poster.png')}
              />
              <Image
                style={[styles.sectionImage, styles.posterImage]}
                source={require('../assets/together.png')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  paddingContainer: {
    padding: 30,
  },
  posterImage: {
    height: 450,
    resizeMode: 'contain',
    width: null,
  },
  sectionBodyText: {
    color: 'white',
    fontSize: 25,
    lineHeight: 40,
    marginBottom: 15,
    marginTop: 15,
  },
  sectionContainer: {
    flex: 1,
    marginBottom: 30,
    marginTop: 30,
  },
  sectionHeader: {
    color: Colors.lightBlue,
    fontSize: 40,
    fontWeight: 'bold',
  },
  sectionImage: {
    flex: 1,
    marginBottom: 10,
    marginTop: 10,
    resizeMode: 'contain',
    width: null,
  },
})
