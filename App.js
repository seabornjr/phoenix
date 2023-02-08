
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import LoginScreen from './Screens/LoginScreen.js';
import ResourcesPreview from './Screens/ResourcesPreview.js';
import UserType from './Screens/UserType.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='UserSelection'
        component={UserType}
        options={{title: 'Select User Type'}}
      />
      <Stack.Screen
        name="ResourcesPreview"
        component={ResourcesPreview}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}>

      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
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