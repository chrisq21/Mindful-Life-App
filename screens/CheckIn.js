import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { ScreenContainerStyles } from '../styles/baseStyles';
import { Colors } from '../constants/colors';

export default class CheckIn extends React.Component {

  static navigationOptions = {
    title: 'Check In',
    headerStyle: {
      backgroundColor: Colors.red,
      borderBottomWidth: 0
    },
    headerTintColor: Colors.lightRed,
    headerTitleStyle: {
      color: Colors.lightRed
    },
  };

  render() {
    return (
      <View style={[styles.screenContainer, ScreenContainerStyles]}>
        <ScrollView>
          <Image resizeMode='contain' style={styles.sectionImage} source={require('../assets/checkin.png')}></Image>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>1. Sitting in a chair or a comfortable place, take a moment to feel...</Text>
            <View style={styles.sectionBodyContainer}>
              <Text style={styles.sectionBodyText}>Contact with the floor</Text>
              <Text style={styles.sectionBodyText}>Your spine in a line</Text>
              <Text style={styles.sectionBodyText}>Your hands in your lap</Text>
              <Text style={styles.sectionBodyText}>Your heart to the sky</Text>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>2. Check into your body</Text>
            <View style={styles.sectionBodyContainer}>
              <Text style={styles.sectionBodyText}>Are you feeling tight or relaxed?</Text>
              <Text style={styles.sectionBodyText}>Any tingling or pain?</Text>
              <Text style={styles.sectionBodyText}>Feeling comfortable or uneasy?</Text>
              <Text style={styles.sectionBodyText}>Any tightness in your face or shoulders?</Text>
              <Text style={styles.sectionBodyText}>Close your eyes and monitor how you are feeling physically and breathe</Text>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>3. Check into your thoughts</Text>
            <View style={styles.sectionBodyContainer}>
              <Text style={styles.sectionBodyText}>Do you notice many thoughts?</Text>
              <Text style={styles.sectionBodyText}>Do you feel space and calmness?</Text>
              <Text style={styles.sectionBodyText}>Are they past, present, or future?</Text>
              <Text style={styles.sectionBodyText}>Close your eyes and place your attention on your breath</Text>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>4. Check in to how you are feeling emotionally</Text>
            <View style={styles.sectionBodyContainer}>
              <Text style={styles.sectionBodyText}>Do you feel joy, anger, or content?</Text>
              <Text style={styles.sectionBodyText}>Feeling anxious, nervous, or excited?</Text>
              <Text style={styles.sectionBodyText}>Bored or enthusiastic?</Text>
              <Text style={styles.sectionBodyText}>Grateful or worried?</Text>
              <Text style={styles.sectionBodyText}>Close your eyes, name the emotion (for example "happy, happy, happy")</Text>
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
