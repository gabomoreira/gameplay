import { StatusBar } from 'expo-status-bar';
import SignIn from './src/screens/SignIn';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if(!fontsLoaded) return null

  return (
    <>
      <StatusBar backgroundColor='transparent' style='light' translucent />
      <SignIn />
    </>
  );
}
