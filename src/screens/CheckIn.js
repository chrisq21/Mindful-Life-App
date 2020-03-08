import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import { ScreenContainerStyles } from '../styles/baseStyles'
import DrawerIcon from '../components/DrawerIcon'
import Colors from '../constants/colors'
import { spanishCopy, englishCopy } from '../constants/copy'
import checkInImgSrc from '../assets/checkin.png'

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: Colors.red,
    padding: 30,
  },
  sectionBodyContainer: {
    lineHeight: 30,
    marginBottom: 15,
    marginTop: 25,
  },
  sectionBodyText: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  sectionContainer: {
    marginBottom: 30,
    marginTop: 30,
  },
  sectionHeader: {
    color: Colors.lightRed,
    fontSize: 25,
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

function CheckIn({ route }) {
  const { language } = route.params
  const copyData = language === 'spanish' ? spanishCopy : englishCopy

  return (
    <View style={[styles.screenContainer, ScreenContainerStyles]}>
      <ScrollView>
        <Image resizeMode="contain" style={styles.sectionImage} source={checkInImgSrc} />
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
  )
}

CheckIn.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      language: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default CheckIn
