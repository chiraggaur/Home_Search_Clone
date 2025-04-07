import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import Navigation from './navigation/Navigation';

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      <Navigation />
    </>
  );
}
