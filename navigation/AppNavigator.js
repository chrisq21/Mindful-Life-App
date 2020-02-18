import React from 'react';
import { Button } from 'react-native';
import { createAppContainer, DrawerActions } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import About from '../components/About';
import HomeScreen from '../screens/Home';
import LanguageSelection from '../screens/LanguageSelection';
import PlaylistsList from '../screens/PlaylistsList';
import TracksList from '../screens/TracksList';
import AudioPlayerScreen from '../screens/AudioPlayer';
import LearnScreen from '../screens/Learn';
import CheckInScreen from '../screens/CheckIn';

const MainNavigator = createStackNavigator({
  LanguageSelection: {screen: LanguageSelection},
  Home: {screen: HomeScreen},
  PlaylistsList: {screen: PlaylistsList},
  TracksList: {screen: TracksList},
  AudioPlayer: {screen: AudioPlayerScreen},
  Learn: {screen: LearnScreen},
  CheckIn: {screen: CheckInScreen}
});

const DrawerNavigator = createDrawerNavigator(
{
  MainNavigator: { screen: MainNavigator }
},
{
  drawerPosition: 'right',
  contentComponent: About,
  drawerLockMode: 'locked-closed'
});

const App = createAppContainer(DrawerNavigator);

export default App;
