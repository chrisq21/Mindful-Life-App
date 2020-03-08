import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image, Linking } from 'react-native'
import { ScreenContainerStyles } from '../styles/baseStyles'
import Colors from '../constants/colors'
import iconImgSrc from '../assets/icon.png'

const styles = StyleSheet.create({
  link: {
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 30,
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  linksContainer: {
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  logo: {
    flex: 1,
    marginBottom: 10,
    marginTop: 10,
    resizeMode: 'contain',
    width: null,
  },
  screenContainer: {
    backgroundColor: Colors.blue,
    padding: 18,
  },
  text: {
    color: Colors.white,
    fontSize: 20,
    lineHeight: 25,
  },
  textVerticalMargin: {
    marginBottom: 15,
    marginTop: 15,
  },
})

function About() {
  return (
    <View style={[styles.screenContainer, ScreenContainerStyles]}>
      <ScrollView>
        <Image resizeMode="contain" source={iconImgSrc} style={styles.logo} />
        <Text style={styles.text}>
          Mindful Life Project began teaching mindfulness in Richmond, CA elementary schools in
          October of 2012 working with 150 students. Now, Mindful Life Project works with thousands
          of students and teachers in underserved schools.
        </Text>
        <Text style={[styles.text, styles.textVerticalMargin]}>
          Mindful Life Project&apos;s mission is to empower children through mindfulness, yoga,
          expressive arts and performing arts to gain self-awareness, confidence, self-regulation
          and resilience, leading to lifelong success.
        </Text>
        <View style={styles.linksContainer}>
          <Text
            style={[styles.text, styles.link]}
            onPress={() => Linking.openURL('http://mindfullifeproject.org/our-board/')}
          >
            Our Team
          </Text>
          <Text
            style={[styles.text, styles.link]}
            onPress={() =>
              Linking.openURL('https://www.mightycause.com/organization/The-Mindful-Life-Project')
            }
          >
            Donate
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default About