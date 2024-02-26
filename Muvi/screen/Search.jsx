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
import { TextInput, Checkbox, MD3Colors } from "react-native-paper";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { CardMovie } from "../components/CardMovie";
import { BottomNav } from "../components/BottomNav";
const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;
const Search = ({ navigation }) => {
  return (
    <>
      <View
        style={[tw``, { backgroundColor: "#1F2123", height: windowHeight }]}
      >
        <View style={{ height: 30 }}></View>
        <View style={[tw ``, { backgroundColor: "#1F2123" ,paddingTop:10}]}>
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
          <Text style={[tw `text-[#727478] text-xl`]}>
            Search result for Disney
          </Text>
          <View style={[tw `px-4`]}>
            {/* <CardMovie /> */}
            <BottomNav  />
          </View>
          
        </View>
        
      </View>
      
    </>
  );
};

export { Search };
