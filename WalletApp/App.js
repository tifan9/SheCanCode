import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './screens/Login';
import { Register } from './screens/Register';
import { HomeScreen } from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
 <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="login" component={Login}  />
        <Stack.Screen name="register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
