import { StatusBar } from 'expo-status-bar';
import {Text,View} from 'react-native'
import React from 'react';
//import { Welcome } from './src/pages/Welcome';
import {UserIdentification} from './src/pages/UserIdentification'
import AppLoading from 'expo-app-loading'
import Routes from './src/routes'

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'


export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsLoaded) 
  return (
    <AppLoading/>
  )
  return (
    
    <Routes/>
   
  );
}



