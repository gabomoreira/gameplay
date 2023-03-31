
import 'react-native-gesture-handler';
import SignIn from './src/screens/SignIn';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import Background from './src/components/Background';
import { StatusBar } from 'react-native';
import Home from './src/screens/Home';
import { AuthRoutes } from './src/routes/auth.routes';
import { Routes } from './src/routes';

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
       <Background>
          <StatusBar backgroundColor='transparent' barStyle='light-content' translucent />
          <Routes />
       </Background>
    </>
  );
}
