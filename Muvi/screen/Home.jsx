import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {Dimensions, View, Text, ScrollView, ImageBackground, StyleSheet, SafeAreaView,Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { FontAwesome } from "@expo/vector-icons";
  import { TextInput, Checkbox, MD3Colors } from "react-native-paper";
  import { Input } from 'react-native-elements';
  import Icon from "react-native-vector-icons/FontAwesome";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
const Home = ({navigation}) => {
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
            //   backgroundColor: "#26282C",
            },
          ]}
    >
        {/* logo */}
        <View
        style={[
          tw `flex flex-row justify-between  items-center px-5 pt-10`,
          {
            backgroundColor: '#1F2123',
            height: 110,
          },
        ]}
      >
        <Image
          source={require('../assets/img/logo.jpg')}
          resizeMode="cover"
          style={tw `justify-center `}
        />
            <View style={[tw `flex flex-row gap-3 px-5`]}>
                <TouchableOpacity>
                <MaterialCommunityIcons
                theme={{ roundness: 50 }}
                name="bookmark-outline"
                color={"#FFFF"}
                size={25}
                accessibilityLabel=""
              />
                </TouchableOpacity>
            <TouchableOpacity>
            <MaterialCommunityIcons
                theme={{ roundness: 50 }}
                name="bell-outline"
                color={"#FFFF"}
                size={25}
                accessibilityLabel=""
            />
            </TouchableOpacity>
            </View>
      </View>  
    </View>

    <StatusBar style="light"/>
    </>
  )
}

export  {Home}
