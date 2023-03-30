import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/screens/SignIn';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='transparent' style='light' translucent />
      <SignIn />
    </>
  );
}
