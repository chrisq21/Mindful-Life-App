import {createStackNavigator, createAppContainer} from 'react-navigation';

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

const App = createAppContainer(MainNavigator);

export default App;
