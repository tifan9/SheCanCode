import React from 'react'
import {Dimensions, View, Text, ScrollView, ImageBackground, StyleSheet, SafeAreaView,Image, TouchableOpacity, FlatList } from 'react-native';
import tw from 'twrnc';
import { FontAwesome } from "@expo/vector-icons";
  import { TextInput, Checkbox, MD3Colors } from "react-native-paper";
  import { Input } from 'react-native-elements';
  import Icon from "react-native-vector-icons/FontAwesome";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Tags = () => {
    const tag=[
        {
            name: 'Popular Today'
        },
        {
            name: 'Marvel'
        },
        {
            name: 'Fans Choice'
        },
        {
            name: 'Star Wars'
        }
    ]
    const renderTags = ({item}) => {
        return (
          
              <View style={[tw `flex flex-row justify-between gap-4 pt-4`, {}]}>
            <TouchableOpacity style={[tw `p-1 border border-gray-400 rounded`, {}]}>
              <Text style={[tw `text-white text-xl`]}>{item.name}</Text>
            </TouchableOpacity>
          </View>
          
          
        )
    }
  return (
    <>
        <FlatList  
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={tag}
            renderItem={renderTags}
            keyExtractor={(item) => item.name.toString()}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          />
    </>
  )
}

export  {Tags}
