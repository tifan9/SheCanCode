import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Home } from './Home';
import { Search } from './Search';
import { Splash } from './Splash';
import { Welcome } from './Welcome';
import { Sign } from './Sign';
import { Login } from './Login';
import { Register } from './Register';
import Feather from 'react-native-vector-icons/Feather'
import { Downloads } from './Downloads';
import Profile from './Profile';
import Action from './Action';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Top = createMaterialTopTabNavigator();
export const MainNavigation = ()=> {
  return (
    <Stack.Navigator>
       {/* <Stack.Screen name="MyTab" component={MyTab} options={{ headerShown: false }} /> */}
          {/* <Stack.Screen  name='splash' component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name = 'welcome' component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name = 'sign' component = {Sign} options={{ headerShown: false }}/> 
          <Stack.Screen name = 'register' component = {Register} options={{ headerShown: false }}/> */}
          {/* <Stack.Screen name = 'login' component = {Login} options={{ headerShown: false }}/> */}
          
      <Stack.Screen name='Home' component={BottomNavigation} options={{ headerShown: false }}/>
      {/* <Stack.Screen name='Profile' component={BottomNavigation} options={{ headerShown: false }}/> */}
      {/* <Stack.Screen name='search' component={BottomNavigation} options={{ headerShown: false }}/> */}
      <Stack.Screen name='action' component = {Action} options={{ headerShown: false }}/>
      {/* <Stack.Screen name='Downloads' component={BottomNavigation} options={{ headerShown: false }}/> */}
    </Stack.Navigator>
  );
}

    // Top Navigation

    

export const BottomNavigation = () => {
  return (
    <Tab.Navigator
    screenOptions={{tabBarStyle:{backgroundColor: '#1F2123', borderTopColor: '#1F2123',}}}>
        <Tab.Screen name='HomeTab' component={Home} options={{headerShown: false, tabBarShowLabel:false, tabBarIcon:({focused})=> <Feather name='home' size={30} color={focused? '#D9BE52':'gray'}/>  }} />
      <Tab.Screen name='Search' component={Search} options={{headerShown: false, tabBarShowLabel:false, tabBarIcon:({focused})=> <Feather name='search' size={30} color={focused? '#D9BE52':'gray'}/>  }} />
      <Tab.Screen name='Downloads' component={Downloads} options={{headerShown: false, tabBarShowLabel:false, tabBarIcon:({focused})=> <Feather name='folder' size={30} color={focused? '#D9BE52':'gray'}/>  }} />
      <Tab.Screen name=' Profile' component={Profile} options={{headerShown: false, tabBarShowLabel:false, tabBarIcon:({focused})=> <Feather name='grid' size={30} color={focused? '#D9BE52':'gray'}/>  }} />
    </Tab.Navigator>
  );




}