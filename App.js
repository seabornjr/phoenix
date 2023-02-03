
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ResourcesPreview from './Pages/ResourcesPreview.js';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    <ResourcesPreview />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});