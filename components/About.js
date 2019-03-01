import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { ScreenContainerStyles } from '../styles/baseStyles';
import { Colors } from '../constants/colors';
import { spanishCopy, englishCopy } from '../constants/copy'

export default class About extends React.Component {

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
