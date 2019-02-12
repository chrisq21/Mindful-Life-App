import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from '../screens/Home';
import SitsScreen from '../screens/Sits';
import LearnScreen from '../screens/Learn';
import CheckInScreen from '../screens/CheckIn';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Sits: {screen: SitsScreen},
  Learn: {screen: LearnScreen},
  CheckIn: {screen: CheckInScreen}
});

const App = createAppContainer(MainNavigator);

export default App;
