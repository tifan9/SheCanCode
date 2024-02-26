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
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
const Downloads = () => {
  return (
    <>
    <View
        style={[  
          tw ``,
          {
            height: windowHeight,
            width: windowWidth,
            flex: 1,
            paddingTop: 10,
            padding: 5,
            backgroundColor: "#1F2123",
          },
        ]}
      >
        {/* logo */}
        <View style={[tw `py-10 flex flex-row w-[90%] items-center`, {}]}>
          
          <Text style={[tw `px-5 py-5 text-white font-bold text-2xl`]}>My List</Text>
        </View> 
        <View style={[tw `bg-[#26282C] flex flex-col justify-center items-center`,{}]}>
        <Image
          source={require('../assets/img/downloads.jpg')}
          resizeMode="cover"
          style={tw `justify-center `}
        />
        <Text style={[tw `text-white text-2xl font-bold`]}>Create my own List</Text>
        <Text style={[tw `text-gray-300 text-xl text-center`]}>Let's do something, because I have a nice surprise for you</Text>
        <View style={[tw `items-center pt-10`, {}]}>
            <TouchableOpacity
              style={[
                tw `items-center justify-center bg-yellow-500 rounded-lg w-6/6 py-3`,
                {},
              ]}
              // onPress={() => navigation.navigate("sign")}
            //   onPress={handleSubmit}
            >
              <Text style={tw `text-black text-xl`}>Explore Movie</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
        
    </>
  )
}

export  {Downloads}
