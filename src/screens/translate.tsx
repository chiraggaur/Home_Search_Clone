import {View, Text, StyleSheet} from 'react-native';

export default function TranslateScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Translate Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});
