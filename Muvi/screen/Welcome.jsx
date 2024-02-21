import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, ImageBackground, StyleSheet, SafeAreaView,Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

export const Welcome = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/img/jocker.png')}
                resizeMode="cover"
                style={tw `flex-1 justify-center`}
            >
                <View style={[tw `flex-1 justify-center items-center flex-wrap flex`,
                    {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        height: 930,
                        paddingRight: 10,
                    }
            ]}>
                <View style={{height:60}}></View>
                    <Text style={tw `text-white font-bold text-3xl  py-5`}>
                    Enjoy Your favorite movie everywhere
                    </Text>
                    <Text style={tw `text-white text-xl px-6`}>
                        Browse through our collections and discover hundreds of movies and series that you'll love.
                    </Text>
                </View>
                <View style={[tw `items-center pb-10`,
                        {
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        }
                    ]}>
                    <TouchableOpacity
                        style={tw `items-center justify-center bg-yellow-500 rounded-lg w-5/6 py-3 `}
                        onPress={() =>
                            navigation.navigate('sign')
                          }
                    >
                        <Text style={tw `text-black text-xl`}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
      container: {
        flex: 1,
        
       
        
      },
    });