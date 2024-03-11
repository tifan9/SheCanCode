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
import Profile from './screen/Profile';
import { MainNavigation } from './screen/Navigation';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
    <>
      {/* <Splash  /> */}
      {/* <Welcome  /> */}
      {/* <Sign  /> */}
      <NavigationContainer>
        <MainNavigation  />
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
