import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {Dimensions, View, Text, ScrollView, ImageBackground, StyleSheet, SafeAreaView,Image, TouchableOpacity, FlatList } from 'react-native';
import tw from 'twrnc';
import { FontAwesome } from "@expo/vector-icons";
  import { TextInput, Checkbox, MD3Colors } from "react-native-paper";
  import { Input } from 'react-native-elements';
  import Icon from "react-native-vector-icons/FontAwesome";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  // import Feather from "react-native-vector-icons/Feather"
  import { Tags } from '../components/Tags';
import { Cards } from '../components/Cards';
import { CardMovie } from '../components/CardMovie';
import { BottomNav } from '../components/BottomNav';
import { Category } from '../data';
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
const Downloads = ({ navigation }) => {
  return (
    <>
    <View
      style={[  
        tw `-mx-1`,
        {
          borderRadius: 10, 
          borderBottomLeftRadius: 0, 
          borderBottomRightRadius: 0,
          borderTopRightRadius:2,
          marginBottom:-6,
        },
      ]}
    >

    </View>
    <View
        style={[  
          tw ``,
          {
            height: windowHeight,
              width: windowWidth,
              flex: 1,
              // paddingTop: 10,
              // padding: 5,
              backgroundColor: "#26282C",
          },
        ]}
      >
        {/* logo */}
        <View style={[tw `py-10 flex flex-row w-[100%] items-center bg-[#1F2123]`, {}]}>
          <Text style={[tw `px-5 py-5 text-white font-bold text-2xl`]}>My List</Text>
        </View> 
        <View style={[tw `px-6 py-10`, {}]}>
        <View style={[tw `bg-[#26282C] flex flex-col justify-center items-center`,{}]}>
        <Image
          source={require('../assets/img/downloads.jpg')}
          resizeMode="cover"
          style={tw `justify-center `}
        />
        <Text style={[tw `text-white text-2xl font-bold`]}>Create my own List</Text>
        <Text style={[tw `text-gray-400 text-xl text-center`]}>Let's do something, because I have a nice surprise for you</Text>
        
        </View>
        <View style={[tw `items-center pt-10`, {}]}>
            <TouchableOpacity
              style={[
                tw `items-center justify-center bg-yellow-500 rounded-lg w-6/6 py-3 px-6`,
                {},
              ]}
            >
              <Text style={tw `text-black text-xl`}>Explore Movie</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* <BottomNav  /> */}
      </View>
      {/* <BottomNav  /> */}
    </>
  )
}

export  {Downloads}
