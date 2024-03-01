import React, { useState } from 'react';
import {Dimensions, View, Text, ScrollView, ImageBackground, StyleSheet, SafeAreaView,Image, TouchableOpacity, FlatList } from 'react-native';
import tw from 'twrnc';
import { FontAwesome } from "@expo/vector-icons";
  import { TextInput, Checkbox, MD3Colors } from "react-native-paper";
  import { Input } from 'react-native-elements';
  import Icon from "react-native-vector-icons/FontAwesome";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  import Feather from 'react-native-vector-icons/Feather'
import YoutubeIframe, {YoutubePlayer} from 'react-native-youtube-iframe'

import { Cards } from '../components/Cards';
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
const Action = ({navigation, route}) => {
    const routes= route.params
    const [detail, setDetail] = useState([])
  return (
    <View 
    style={[tw ``, {
        height: windowHeight,
        flex:1,
        paddingTop:10,
        padding:5,
        backgroundColor: '#26282C', 
        paddingHorizontal:4,
  }]}
    >
        
        <View style={[tw `py-10 flex flex-row w-[90%] items-center`, {
                    
                }]}>
                <View style={[tw `rounded-2xl h-10 w-10 justify-center items-center`, {}]}>
                        <TouchableOpacity
                        onPress={() =>navigation.navigate('search')}
                        >
                        <MaterialCommunityIcons
                            theme={{ roundness: 50}}
                            name='arrow-left' 
                            color={'#FDD130'}
                            size={25}
                            accessibilityLabel=""
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={[tw `text-white font-bold text-2xl`]}>Action</Text>
                </View>
                <ScrollView>
                {/* Video Player */}
                <View style={[tw `px-3`]}>
                    <YoutubeIframe
                        height={240}
                        play={true}
                        videoId={'2QKg5SZ_35I'}
                    />
                    <View style>   
                    </View>
                    <Text style={[tw `text-white font-bold text-2xl`]}>Jumanji: The next level</Text>
                    <Text style={[tw `text-gray-300`]}>When the world is under attack from creatures who hunt their human prey</Text> 
                    <View style={[tw `w-full flex flex-row gap-3 items-center justify-center pt-5`]}>
                    <TouchableOpacity
                        style={[tw `flex-1 flex flex-row items-center justify-center bg-yellow-500 rounded-lg mx-1.5 h-10`]}
                        onPress={() => console.log('Play button pressed')}
                    >
                        <Feather  name='play' size={20} />
                        <Text style={[tw `text-center`]}>Play</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[tw `flex-1 flex flex-row items-center justify-center border-2 border-gray-300 rounded-lg mx-1.5 h-10`]}
                        onPress={() => console.log('My List button pressed')}
                    >
                        <Feather  name='plus' size={20} color={'#FDD130'}/>
                        <Text style={[tw `text-white text-center`]}>My List</Text>
                    </TouchableOpacity>
                </View>

                </View>
                {/* cards */}
          <View style={[tw `px-3`]}>
            <View style={[tw `flex flex-row justify-between  items-center  pt-10 pb-4`]}>
                <Text style={[tw `text-white text-2xl font-bold `]}>U.S Action Movies</Text>
                {/* <TouchableOpacity>
                  <Text style={[tw `text-white`]}>View More</Text>
                </TouchableOpacity> */}
            </View>
            <Cards  />
          </View>
          {/* cards */}
          <View style={[tw `px-3`]}>
            <View style={[tw `flex flex-row justify-between  items-center  pt-10 pb-4`]}>
                <Text style={[tw `text-white text-2xl font-bold `]}>Muvi Original Action</Text>
                {/* <TouchableOpacity>
                  <Text style={[tw `text-white`]}>View More</Text>
                </TouchableOpacity> */}
            </View>
            <Cards  />
          </View>
        </ScrollView>
      
    </View>
  );
}

export default Action;
