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
        tw `flex flex-row items-center gap-2 px-5 py-5`,
        {justifyContent: 'space-between'}
      ]}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
  <View style={[
    tw `rounded-2xl h-10 w-24 border-2 justify-center items-center`,
    { backgroundColor: 'aliceblue', borderColor: 'lightgray', marginRight: 10 }
  ]}>
    <Button>All</Button>
  </View>
  <View style={[
    tw `rounded-2xl h-10 w-25 border-2  justify-center items-center`,
    { backgroundColor: 'aliceblue', borderColor: 'lightgray', marginRight: 10 }
  ]}>
    <Button>Woman</Button>
  </View>
  <View style={[
    tw `rounded-2xl h-10 w-24 border-2 px-5 justify-center items-center`,
    { backgroundColor: 'aliceblue', borderColor: 'lightgray', marginRight: 10 }
  ]}>
    <Button>Men</Button>
  </View>
  <View style={[
    tw `rounded-2xl h-10 w-24 border-2 px-5 justify-center items-center`,
    { backgroundColor: 'aliceblue', borderColor: 'lightgray', marginRight: 10 }
  ]}>
    <Button>Dress</Button>
  </View>
</ScrollView>

    </View>
  );
};

export default Filters;
