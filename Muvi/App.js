import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Splash } from './screen/Splash';
import { Welcome } from './screen/Welcome';
import { Sign } from './screen/Sign';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
    <>
      {/* <Splash  /> */}
      {/* <Welcome  /> */}
      {/* <Sign  /> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName='splash'>
          <Stack.Screen  name='splash' component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name = 'welcome' component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name = 'sign' component = {Sign} options={{ headerShown: false }}/>
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
