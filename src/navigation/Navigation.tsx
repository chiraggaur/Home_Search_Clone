// Navigation.tsx
import React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../screens/HomePage/HomeScreen';
import ImageResultsScreen from '../screens/image-results';
import MusicScreen from '../screens/music';
import TranslateScreen from '../screens/translate';
import ScholarScreen from '../screens/scholar';
import SearchResultsScreen from '../screens/SearchResults';
import VoiceInputScreen from '../screens/voiceInput';
import SearchBarScreen from '../screens/SearchBar/SearchBar';
import OpenCameraScreen from '../screens/open-camera';
import ProfileModalScreenWrapper from '../screens/Profile/ProfileModalScreenWrapper';
import AccountModalScreenWrapper from '../screens/AccountModal/AccountModalScreenWrapper';
import {RootStackParamList} from '../utils/types';
import LoginScreen from '../screens/loginScreen';
import WebViewer from '../screens/WebViewer';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ImageResults" component={ImageResultsScreen} />
          <Stack.Screen name="Music" component={MusicScreen} />
          <Stack.Screen name="Translate" component={TranslateScreen} />
          <Stack.Screen name="Scholar" component={ScholarScreen} />
          <Stack.Screen name="SearchResults" component={SearchResultsScreen} />
          <Stack.Screen name="VoiceInput" component={VoiceInputScreen} />
          <Stack.Screen name="SearchBar" component={SearchBarScreen} />
          <Stack.Screen name="OpenCamera" component={OpenCameraScreen} />
          <Stack.Screen name="WebViewer" component={WebViewer} />
          <Stack.Screen
            name="ProfileModal"
            component={ProfileModalScreenWrapper}
          />
          <Stack.Screen
            name="AccountModal"
            component={AccountModalScreenWrapper}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
