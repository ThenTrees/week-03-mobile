import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen_01 from './screens/screen_01';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screen_02 from './screens/screen_02';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Screen_01/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Screen_01}
          options={{headerShown: false}}
        />
        <Stack.Screen name="signUp" component={screen_02} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


