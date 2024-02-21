import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, ImageBackground, StyleSheet, SafeAreaView,Image, Pressable } from 'react-native';
import tw from 'twrnc';
const Splash = ({navigation}) => {
  return (
    <>
    
                <View style={[tw `h-[200]`, 
                {
                    flex: 1,
                    backgroundColor: '#1F2123',
                    alignItems: 'center',
                    justifyContent: 'center',
                }]}>
                    <Pressable
                    onPress={() =>
                        navigation.navigate('welcome')
                      }
                    
                    >
                    <Image 
                    source={require('../assets/img/logo.jpg')}
                    style={[tw ``]}
                    />
                    </Pressable>
                </View>
    </>
  )
}

export {Splash}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1F2123',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });