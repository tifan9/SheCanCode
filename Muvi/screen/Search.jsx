import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput, Checkbox, MD3Colors, Card } from "react-native-paper";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { CardMovie } from "../components/CardMovie";
import { BottomNav } from "../components/BottomNav";
import { Cards } from "../components/Cards";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;
const Search = ({ navigation }) => {
  return (
    <>
    
      <View
        style={[tw``, { backgroundColor: "#1F2123",  height: windowHeight}]}
      >
        <View style={{ height: 50 }}></View>
        <View style={[tw `bg-[#1F2123]`, { backgroundColor: "#1F2123" ,paddingTop:10, }]}>
          <TextInput
            underlineColor="transparent"
            style={{
              // borderRadius: 40,
              // borderBottomWidth: 0,
              marginBottom: 10,
              marginHorizontal: 10,
              backgroundColor: "#303234",
            }}
            mode="outlined"
            placeholder="Search..."
            theme={{ roundness: 10 }}
            left={
              <TextInput.Icon
                icon={"magnify"}
                color={"#BBC3A4"}
                style={{ opacity: 0.5 }}
              />
            }
            right={
              <TextInput.Icon
                icon={"magnify"}
                color={"#BBC3A4"}
                style={{ opacity: 0.5 }}
              />
            }
          />
        </View>
        <View style={[tw `bg-[#26282C]`, {}]}>
        <View style={[tw ` flex flex-col justify-center items-center px-5`, {paddingVertical:90, paddingHorizontal:10}]}>
        <Image
          source={require('../assets/img/search.png')}
          resizeMode="cover"
          style={tw `justify-center `}
        />
          
          <Text style={[tw `font-bold text-2xl text-white text-center`]}>Search any Movie</Text>
          <Text style={[tw `text-gray-300 text-center`, {fontSize: 20,}]}>Explore our libraries and enjoy this movie with your family.</Text>
        </View>
        <View style={{height:60}}></View>
        <View style={[tw `px-4`]}>
        <Text style={[tw `text-2xl font-bold text-white pb-5`]}>Maybe you likes</Text>
        <Cards  />
        </View>
        <View style={{height: 500}}></View>
        </View>
        
      </View>
      
    </>
  );
};

export { Search };
