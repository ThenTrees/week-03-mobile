import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen_01 from './screens/screen_01';
import Screen_02 from './screens/screen_02';
import Screen_03 from './screens/screen_03';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Screen_01 />
    // <Screen_02 />
    // <Screen_03 />
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen_01' screenOptions={{headerShown: false}}>  
        <Stack.Screen
          name="home"
          component={Screen_01}
          options={{title: false}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
