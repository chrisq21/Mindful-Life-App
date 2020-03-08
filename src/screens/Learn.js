import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import VideoPlayer from '../components/VideoPlayer'
import { ScreenContainerStyles } from '../styles/baseStyles'
import { spanishCopy, englishCopy } from '../constants/copy'
import Colors from '../constants/colors'
import animatedVideoSrc from '../assets/animation.mp4'
import animatedVideoSpanishSrc from '../assets/animation_spanish.mp4'
import meditationImgSrc from '../assets/meditating.png'
import cloudsImgSrc from '../assets/clouds.png'
import posterImgSrc from '../assets/poster.png'
import togetherImgSrc from '../assets/together.png'

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
    color: Colors.white,
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

function Learn({ route }) {
  const { language } = route.params
  const copyData = language === 'spanish' ? spanishCopy : englishCopy
  const { width } = Dimensions.get('window')
  const videoSource = language === 'spanish' ? animatedVideoSpanishSrc : animatedVideoSrc

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
          <Image style={styles.sectionImage} source={meditationImgSrc} />
          <View style={[styles.sectionContainer, styles.paddingContainer]}>
            <Text style={styles.sectionHeader}>Benefits</Text>
            <Text style={styles.sectionBodyText}>{copyData.learnScreen.benefitsBody1}</Text>
            <Text style={styles.sectionBodyText}>{copyData.learnScreen.benefitsBody2}</Text>
            <Image style={styles.sectionImage} source={cloudsImgSrc} />
          </View>
          <View style={[styles.sectionContainer, styles.paddingContainer]}>
            <Text style={styles.sectionHeader}>Posters</Text>
            <Image style={[styles.sectionImage, styles.posterImage]} source={posterImgSrc} />
            <Image style={[styles.sectionImage, styles.posterImage]} source={togetherImgSrc} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

Learn.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      language: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default Learn
