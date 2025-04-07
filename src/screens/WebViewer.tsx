import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {useRoute} from '@react-navigation/native';

export default function WebViewer() {
  const route = useRoute();
  const {url, title} = route.params as {url: string; title: string};

  return (
    <View style={{flex: 1, marginTop: 30, paddingTop: 10}}>
      <WebView source={{uri: url}} style={{flex: 1}} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#111',
    padding: 12,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
