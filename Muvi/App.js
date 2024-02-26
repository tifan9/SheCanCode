import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Splash } from './screen/Splash';
import { Welcome } from './screen/Welcome';
import { Sign } from './screen/Sign';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Login } from './screen/Login';
import { Register } from './screen/Register';
import { Home } from './screen/Home';
import { Search } from './screen/Search';
import { Downloads } from './screen/Downloads';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
    <>
      {/* <Splash  /> */}
      {/* <Welcome  /> */}
      {/* <Sign  /> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName='splash'>
          {/* <Stack.Screen  name='splash' component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name = 'welcome' component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name = 'sign' component = {Sign} options={{ headerShown: false }}/> 
          <Stack.Screen name = 'register' component = {Register} options={{ headerShown: false }}/>
          <Stack.Screen name = 'login' component = {Login} options={{ headerShown: false }}/>
          <Stack.Screen name = 'home' component = {Home} options={{ headerShown: false }}/>
          <Stack.Screen name = 'search' component = {Search} options={{ headerShown: false }}/>
          <Stack.Screen name = 'profile' component = {Profile} options={{ headerShown: false }}/> */}
          <Stack.Screen name = 'downloads' component = {Downloads} options={{ headerShown: false }}/>
          

        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light"/>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
