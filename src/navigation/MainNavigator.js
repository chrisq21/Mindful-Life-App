import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/Home'
import LanguageSelection from '../screens/LanguageSelection'
import PlaylistsList from '../screens/PlaylistsList'
import TracksList from '../screens/TracksList'
import AudioPlayer from '../screens/AudioPlayer'
import Learn from '../screens/Learn'
import CheckIn from '../screens/CheckIn'
import * as HeaderStyles from '../styles/HeaderStyles'
import DrawerIcon from '../components/DrawerIcon'

const Stack = createStackNavigator()

function MainNavigator() {
  return (
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
        options={({ navigation }) => ({
          title: 'Home',
          headerRight: () => <DrawerIcon navigation={navigation} />,
          ...HeaderStyles.Home,
        })}
      />
      <Stack.Screen
        name="Learn"
        component={Learn}
        options={({ navigation }) => ({
          title: 'Learn',
          headerRight: () => <DrawerIcon navigation={navigation} />,
          ...HeaderStyles.Learn,
        })}
      />
      <Stack.Screen
        name="CheckIn"
        component={CheckIn}
        options={({ navigation }) => ({
          title: 'Check In',
          headerRight: () => <DrawerIcon navigation={navigation} />,
          ...HeaderStyles.CheckIn,
        })}
      />
      <Stack.Screen
        name="PlaylistsList"
        component={PlaylistsList}
        options={({ navigation }) => ({
          headerRight: () => <DrawerIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="TracksList"
        component={TracksList}
        options={({ navigation }) => ({
          headerRight: () => <DrawerIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="AudioPlayer"
        component={AudioPlayer}
        options={({ navigation }) => ({
          headerRight: () => <DrawerIcon navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator
