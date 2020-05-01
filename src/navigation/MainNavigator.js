import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/Home'
import LanguageSelection from '../screens/LanguageSelection'
import Playlists from '../screens/Playlists'
import Tracks from '../screens/Tracks'
import AudioPlayer from '../components/AudioPlayer'
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
        name="Playlists"
        component={Playlists}
        options={({ route, navigation }) => ({
          title: '',
          headerRight: () => <DrawerIcon navigation={navigation} />,
          ...(route.params.category === 'hip-hop' ? HeaderStyles.HipHop : HeaderStyles.Sits),
        })}
      />
      <Stack.Screen
        name="Tracks"
        component={Tracks}
        options={({ route, navigation }) => ({
          title: '',
          headerRight: () => <DrawerIcon navigation={navigation} />,
          ...(route.params.category === 'hip-hop' ? HeaderStyles.HipHop : HeaderStyles.Sits),
        })}
      />
      <Stack.Screen
        name="AudioPlayer"
        component={AudioPlayer}
        options={({ route, navigation }) => ({
          title: '',
          headerRight: () => <DrawerIcon navigation={navigation} />,
          ...(route.params.category === 'hip-hop' ? HeaderStyles.HipHop : HeaderStyles.Sits),
        })}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator
