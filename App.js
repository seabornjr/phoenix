
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import BackgroundFirstGenScreen from './Screens/BackgroundFirstGenScreen.js';
import BackgroundIncome from './Screens/BackgroundIncome.js';
import BackgroundRacialScreen from './Screens/BackgroundRacialScreen.js';
import BuildProfile from './Screens/BuildProfile.js';
import FocusedUserHome from './Screens/FocusedUserHome.js';
import GradeAndSchoolScreen from './Screens/GradeAndSchoolScreen.js';
import GuardianInfo from './Screens/GuardianInfo.js';
import LoadingScreen from './Screens/LoadingScreen.js';
import LoginScreen from './Screens/LoginScreen.js';
import PersonalityScreen1 from './Screens/PersonalityScreen1.js';
import PersonalityScreen2 from './Screens/PersonalityScreen2.js';
import PersonalityScreen3 from './Screens/PersonalityScreen3.js';
import PreferencesScreen1_1 from './Screens/PreferencesScreen1_1.js';
import PreferencesScreen1_2 from './Screens/PreferencesScreen1_2.js';
import PreferencesScreen2_1 from './Screens/PreferencesScreen2_1.js';
import PreferencesScreen3 from './Screens/PreferencesScreen3.js';
import ResourcesPreview from './Screens/ResourcesPreview.js';
import UserPortfolio from './Screens/UserPortfolio.js';
import UserType from './Screens/UserType.js';
import WelcomeScreen from './Screens/WelcomeScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
        name='Welcome'
        component={WelcomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name='UserSelection'
        component={UserType}
        options={{title: 'Select User Type'}}
      />
      <Stack.Screen
        name="ResourcesPreview"
        component={ResourcesPreview}
        options={{title: 'Feature Preview'}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}>
      </Stack.Screen>
      <Stack.Screen
        name="BuildProfile"
        component={BuildProfile}
        options={{title: 'Profile'}}
      />
      <Stack.Screen
        name="GuardianInfo"
        component={GuardianInfo}
        options={{title: 'Guardian Information'}}
      />
      <Stack.Screen
        name="GradeAndSchool"
        component={GradeAndSchoolScreen}
        options={{title: 'Grade and School'}}
      />
      <Stack.Screen
        name="BackgroundFirstGen"
        component={BackgroundFirstGenScreen}
        options={{title: 'Background'}}
      />
      <Stack.Screen
        name="BackgroundRacial"
        component={BackgroundRacialScreen}
        options={{title: 'Background'}}
      />
      <Stack.Screen
        name="BackgroundIncome"
        component={BackgroundIncome}
        options={{title: 'Background'}}
      />
      <Stack.Screen
        name="PersonalityScreen1"
        component={PersonalityScreen1}
        options={{title: 'Personality'}}
      />
       <Stack.Screen
        name="Preferences1_1"
        component={PreferencesScreen1_1}
        options={{title: 'Preferences'}}
      />
      <Stack.Screen
        name="Preferences1_2"
        component={PreferencesScreen1_2}
        options={{title: 'Preferences'}}
      />
      <Stack.Screen
        name="PersonalityScreen2"
        component={PersonalityScreen2}
        options={{title: 'Personality'}}
      />
      <Stack.Screen
        name="Preferences2_1"
        component={PreferencesScreen2_1}
        options={{title: 'Preferences'}}
      />
      <Stack.Screen
        name="PersonalityScreen3"
        component={PersonalityScreen3}
        options={{title: 'Personality'}}
      />
      <Stack.Screen
        name="Preferences3"
        component={PreferencesScreen3}
        options={{title: 'Preferences'}}
      />
      <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={{title: 'Loading Your Journey'}}
      />
      <Stack.Screen
        name="FocusedUser1HomeScreen"
        component={FocusedUserHome}
        options={{title: 'Your Journey'}}
      />
      <Stack.Screen
        name="PortfolioScreen"
        component={UserPortfolio}
        options={{title: 'Your Portfolio'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});