import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native'
import { ScreenContainerStyles } from '../styles/baseStyles'
import { spanishCopy, englishCopy } from '../constants/copy'
import Colors from '../constants/colors'
import DrawerIcon from '../components/DrawerIcon'
import questionMarkSrc from '../assets/question-mark.png'
import anchorImgSrc from '../assets/anchor.png'
import smileImgSrc from '../assets/smile.png'
import headphoneImgSrc from '../assets/headphones.png'

const styles = StyleSheet.create({
  sectionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingRight: 20,
    paddingLeft: 20,
  },
  sectionImage: {
    alignSelf: 'center',
    flex: 1,
    height: '50%',
    resizeMode: 'contain',
  },
  sectionText: {
    color: Colors.white,
    flex: 2,
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
  },
})

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      drawerLabel: 'About',
      headerRight: <DrawerIcon navigation={navigation} />,
      headerStyle: {
        backgroundColor: 'black',
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

    return (
      <View style={ScreenContainerStyles}>
        <TouchableOpacity
          style={[styles.sectionButton, { backgroundColor: Colors.blue }]}
          onPress={() => navigation.navigate('Learn', { language })}
        >
          <Text style={[styles.sectionText, { color: Colors.lightBlue }]}>
            {copyData.homeScreen.learn}
          </Text>
          <Image resizeMode="contain" style={styles.sectionImage} source={questionMarkSrc} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sectionButton, { backgroundColor: Colors.red }]}
          onPress={() => navigation.navigate('CheckIn', { language })}
        >
          <Text style={[styles.sectionText, { color: Colors.lightRed }]}>
            {copyData.homeScreen.checkIn}
          </Text>
          <Image resizeMode="contain" style={styles.sectionImage} source={anchorImgSrc} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sectionButton, { backgroundColor: Colors.green }]}
          onPress={() => navigation.navigate('PlaylistsList', { category: 'sits', language })}
        >
          <Text style={[styles.sectionText, { color: Colors.lightGreen }]}>
            {copyData.homeScreen.sits}
          </Text>
          <Image resizeMode="contain" style={styles.sectionImage} source={smileImgSrc} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sectionButton, { backgroundColor: Colors.orange }]}
          onPress={() => navigation.navigate('PlaylistsList', { category: 'hip-hop', language })}
        >
          <Text style={[styles.sectionText, { color: Colors.lightOrange }]}>
            {copyData.homeScreen.hipHop}
          </Text>
          <Image resizeMode="contain" style={styles.sectionImage} source={headphoneImgSrc} />
        </TouchableOpacity>
      </View>
    )
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
}

export default Home
