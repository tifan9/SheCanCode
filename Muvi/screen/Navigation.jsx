import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Home';
import { Search } from './Search';
import Feather from 'react-native-vector-icons/Feather'
import { Downloads } from './Downloads';
import Profile from './Profile';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export const MainNavigation = ()=> {
  return (
    <Stack.Navigator>
       {/* <Stack.Screen name="MyTab" component={MyTab} options={{ headerShown: false }} /> */}
          {/* <Stack.Screen  name='splash' component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name = 'welcome' component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name = 'sign' component = {Sign} options={{ headerShown: false }}/> 
          <Stack.Screen name = 'register' component = {Register} options={{ headerShown: false }}/>
          <Stack.Screen name = 'login' component = {Login} options={{ headerShown: false }}/> */}
          {/* <Stack.Screen name = 'home' component = {Home} options={{ headerShown: false }}/> */}
          {/* <Stack.Screen name = 'search' component = {Search} options={{ headerShown: false }}/> */}
          {/* <Stack.Screen name = 'profile' component = {Profile} options={{ headerShown: false }}/> */}
          {/* <Stack.Screen name = 'downloads' component = {Downloads} options={{ headerShown: false }}/> */}
          
      <Stack.Screen name='Home' component={BottomNavigation} options={{ headerShown: false }}/>
      <Stack.Screen name='Profile' component={BottomNavigation} options={{ headerShown: false }}/>
      <Stack.Screen name='Search' component={BottomNavigation} options={{ headerShown: false }}/>
      <Stack.Screen name='Downloads' component={BottomNavigation} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
export const BottomNavigation = () => {
  return (
    <Tab.Navigator
    screenOptions={{tabBarStyle:{backgroundColor: '#1F2123', borderTopColor: '#1F2123',}}}>
        <Tab.Screen name='Home' component={Home} options={{headerShown: false, tabBarShowLabel:false, tabBarIcon:({focused})=> <Feather name='home' size={30} color={focused? '#D9BE52':'gray'}/>  }} />
      <Tab.Screen name='Search' component={Search} options={{headerShown: false, tabBarShowLabel:false, tabBarIcon:({focused})=> <Feather name='search' size={30} color={focused? '#D9BE52':'gray'}/>  }} />
      <Tab.Screen name='Downloads' component={Downloads} options={{headerShown: false, tabBarShowLabel:false, tabBarIcon:({focused})=> <Feather name='folder' size={30} color={focused? '#D9BE52':'gray'}/>  }} />
      <Tab.Screen name=' Profile' component={Profile} options={{headerShown: false, tabBarShowLabel:false, tabBarIcon:({focused})=> <Feather name='grid' size={30} color={focused? '#D9BE52':'gray'}/>  }} />
    </Tab.Navigator>
  );
}