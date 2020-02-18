import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native'
import { ScreenContainerStyles } from '../styles/baseStyles'
import { Colors } from '../constants/colors'

export default class About extends React.Component {
  render() {
    return (
      <View style={[styles.screenContainer, ScreenContainerStyles]}>
        <ScrollView>
          <Image resizeMode="contain" source={require('../assets/icon.png')} style={styles.logo} />
          <Text style={[styles.text]}>
            Mindful Life Project began teaching mindfulness in Richmond, CA elementary schools in
            October of 2012 working with 150 students. Now, Mindful Life Project works with
            thousands of students and teachers in underserved schools.
          </Text>
          <Text style={[styles.text, { marginTop: 15, marginBottom: 15 }]}>
            Mindful Life Project's mission is to empower children through mindfulness, yoga,
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
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: Colors.blue,
    padding: 18,
  },
  logo: {
    flex: 1,
    width: null,
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
    lineHeight: 25,
  },
  linksContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  link: {
    fontWeight: 'bold',
    lineHeight: 30,
    marginBottom: 20,
    fontSize: 30,
    textDecorationLine: 'underline',
  },
})
