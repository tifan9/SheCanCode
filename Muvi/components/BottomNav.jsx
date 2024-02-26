import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {Dimensions, View, Text, ScrollView, ImageBackground, StyleSheet, SafeAreaView,Image, TouchableOpacity, FlatList } from 'react-native';
import tw from 'twrnc';
import { FontAwesome } from "@expo/vector-icons";
  import { TextInput, Checkbox, MD3Colors } from "react-native-paper";
  import { Input } from 'react-native-elements';
  import Icon from "react-native-vector-icons/FontAwesome";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const BottomNav = ({navigation}) => {
  return (
    <>
    <View style={[tw `-mx-3 -my-1`]}>
          <View style={[tw `bg-[#1F2123] flex flex-row flex-wrap justify-between items-center px-7 py-7 w-7/7`, {
            borderRadius: 10, 
            borderBottomLeftRadius: 0, 
            borderBottomRightRadius: 0,
            overflow: 'hidden'
            
          }]}>
            <TouchableOpacity>
            <MaterialCommunityIcons
                theme={{ roundness: 50 }}
                name="home"
                color={"#c3c3c3c3"}
                size={25}
                accessibilityLabel=""
              />
            </TouchableOpacity>
            <TouchableOpacity
            
            onPress={() =>
              navigation.navigate('search')
            }
            >
            <Icon
                theme={{ roundness: 50 }}
                name="search"
                color={"#c3c3c3c3"}
                size={25}
                accessibilityLabel=""
              />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('downloads')
                  }
            >
            <MaterialCommunityIcons
                theme={{ roundness: 50 }}
                name="folder"
                color={"#c3c3c3c3"}
                size={25}
                accessibilityLabel=""
              />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('profile')
                  }
            >
            <MaterialCommunityIcons
                theme={{ roundness: 50 }}
                name="grid"
                color={"#c3c3c3c3"}
                size={25}
                accessibilityLabel=""
              />
            </TouchableOpacity>
          </View>
          </View>
    </>
  )
}

export  {BottomNav}
