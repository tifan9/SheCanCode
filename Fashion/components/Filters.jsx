import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";
import tw from "twrnc";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput, Checkbox, MD3Colors, Button } from "react-native-paper";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Filters = () => {
  return (
    <View
      style={[
        tw `flex flex-row items-center gap-2 px-5 py-5 text-black`,
        {justifyContent: 'space-between', color: 'black'}
      ]}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
  <View style={[
    tw `rounded-2xl h-10 w-24 border-2 justify-center items-center`,
    { backgroundColor: 'aliceblue', borderColor: 'lightgray', marginRight: 10 , color: 'black' }
  ]}>
    <Button style={{color:'black'}}>All</Button>
  </View>
  <View style={[
    tw `rounded-2xl h-10 w-25 border-2  justify-center items-center text-black`,
    { backgroundColor: 'aliceblue', borderColor: 'lightgray', marginRight: 10 , color: 'black'}
  ]}>
    <Button style={{color:'black'}}>Woman</Button>
  </View>
  <View style={[
    tw `rounded-2xl h-10 w-24 border-2 px-5 justify-center items-center text-black`,
    { backgroundColor: 'aliceblue', borderColor: 'lightgray', marginRight: 10 , color: 'black'}
  ]}>
    <Button style={{color:'black'}}>Men</Button>
  </View>
  <View style={[
    tw `rounded-2xl h-10 w-24 border-2 px-5 justify-center items-center text-black`,
    { backgroundColor: 'aliceblue', borderColor: 'lightgray', marginRight: 10 , color: 'black'}
  ]}>
    <Button style={{color:'black'}}>Dress</Button>
  </View>
</ScrollView>

    </View>
  );
};

export default Filters;
