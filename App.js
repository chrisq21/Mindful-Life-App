import { useCallback } from 'react'
import AppNavigator from './src/navigation/AppNavigator'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./fonts/Inter-Regular.otf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  onLayoutRootView()

  return <AppNavigator />
}

export default App
