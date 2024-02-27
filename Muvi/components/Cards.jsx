import React, { useState } from 'react'
import {Dimensions, View, Text, ScrollView, ImageBackground, StyleSheet, SafeAreaView,Image, TouchableOpacity, FlatList } from 'react-native';
import tw from 'twrnc';
import { FontAwesome } from "@expo/vector-icons";
  import { TextInput, Checkbox, MD3Colors } from "react-native-paper";
  import { Input } from 'react-native-elements';
  import Icon from "react-native-vector-icons/FontAwesome";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Cards = () => {
    
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTA0MzhmMTI0NzFhMTFmYTRiN2FlODJkOGI3ZmFkYSIsInN1YiI6IjY1ZDg2YmVlY2FhNTA4MDE4YTM0MTMyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KvD6BdCNfQnnwEltF9Q3sWfOGetlVfKBf5Pwoxa5hrU'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setMovie(response.results))
        .catch(err => console.error(err));

        const [movie, setMovie] = useState([])
        
    const renderCards = ({item}) => {
        return (
            <View style={[tw `flex flex-row justify-between gap-4`, {}]}>
            <TouchableOpacity style={[tw `relative  border-white rounded-xl gap-3 mx-3 `, { width: 240, }]}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                style={[tw `w-full h-40 rounded-xl`, { resizeMode: 'cover' }]}
            />
            <View style={[tw `absolute top-2 right-2 bg-yellow-500 rounded p-2`, {}]}> 
                <Text style={[tw`text-black font-bold text-xl`]}>{item.vote_average.toFixed(1)}</Text>
            </View>
        </TouchableOpacity>
        </View>
        )
    }
  return (
    <>
        <FlatList
        showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={movie}
            renderItem={renderCards}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingHorizontal: 15}}
        />
    </>
  )
}

export  {Cards}
