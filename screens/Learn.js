import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { ScreenContainerStyles } from '../styles/baseStyles'
import { Colors } from '../constants/colors'
export default class Learn extends React.Component {

  static navigationOptions = {
    title: 'Learn',
    headerStyle: {
      backgroundColor: Colors.lightBlue,
      borderBottomWidth: 0
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      color: 'white'
    },
  };

  render() {
    return (
      <View style={[styles.screenContainer, ScreenContainerStyles]}>
        <ScrollView>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>What is Mindfulness?</Text>
            <Image></Image>
            <Text style={styles.sectionBody}>
            Mindfulness is paying attention on purpose to the present moment without judgment. Through focused and specific awareness, mindfulness builds skills to navigate ALL experiences by strategically living in the here and now.
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>Benefits</Text>
            <Text style={styles.sectionBody}>
            Mindfulness is a secular, science-based approach that takes advantage of our brain's plasticity (ability to change throughout life). Mindfulness is proven to strengthen physiological responses to stress, negative emotions, anxiety and depression, and improve happiness, openness and self-awareness.
            </Text>
            <Text style={styles.sectionBody}>
            Mindfulness enables us to be present, moment to moment, in our increasingly distracted lives. Mindfulness improves social relationships with people and family and can even strengthen the immune system. It cultivates an openness to one's life experience and a leads to a happier and more compassionate life.
            </Text>
            <Image></Image>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: Colors.lightBlue,
    padding: 30
  },
  sectionContainer: {
    marginTop: 30,
    marginBottom: 30
  },
  sectionHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40
  },
  sectionBody: {
    color: 'white',
    marginTop: 15,
    marginBottom: 15,
    fontSize: 25,
    lineHeight: 40
  }
});
