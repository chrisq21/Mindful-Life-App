import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import { createDrawerNavigator } from 'react-navigation-drawer'
import About from '../components/About'
import HomeScreen from '../screens/Home'
import LanguageSelection from '../screens/LanguageSelection'
import PlaylistsList from '../screens/PlaylistsList'
import TracksList from '../screens/TracksList'
import AudioPlayer from '../screens/AudioPlayer'
import Learn from '../screens/Learn'
import CheckIn from '../screens/CheckIn'
import * as HeaderStyles from '../styles/HeaderStyles'

// TODO: Bring back drawer navigator

// const DrawerNavigator = createDrawerNavigator(
//   {
//     MainNavigator: { screen: MainNavigator },
//   },
//   {
//     drawerPosition: 'right',
//     contentComponent: About,
//     drawerLockMode: 'locked-closed',
//   }
// )

const Stack = createStackNavigator()

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LanguageSelection">
        <Stack.Screen
          name="LanguageSelection"
          component={LanguageSelection}
          options={{
            title: 'Language',
            ...HeaderStyles.LanguageSelection,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            ...HeaderStyles.Home,
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            title: 'About',
            ...HeaderStyles.About,
          }}
        />
        <Stack.Screen
          name="Learn"
          component={Learn}
          options={{
            title: 'Learn',
            ...HeaderStyles.Learn,
          }}
        />
        <Stack.Screen
          name="CheckIn"
          component={CheckIn}
          options={{
            title: 'Check-in',
            ...HeaderStyles.CheckIn,
          }}
        />
        <Stack.Screen name="PlaylistsList" component={PlaylistsList} />
        <Stack.Screen name="TracksList" component={TracksList} />
        <Stack.Screen name="AudioPlayer" component={AudioPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
