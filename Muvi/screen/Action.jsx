import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import YoutubeIframe from 'react-native-youtube-iframe';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from 'react-native-vector-icons/Feather';
import tw from 'twrnc';
import axios from 'axios';
import { Cards } from '../components/Cards';
import { ActivityIndicator } from 'react-native-paper';
import WebView from 'react-native-webview';

const Action = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { movieId, title, overview } = route.params;
  const [trailerUrl, setTrailerUrl] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTA0MzhmMTI0NzFhMTFmYTRiN2FlODJkOGI3ZmFkYSIsInN1YiI6IjY1ZDg2YmVlY2FhNTA4MDE4YTM0MTMyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KvD6BdCNfQnnwEltF9Q3sWfOGetlVfKBf5Pwoxa5hrU'
      }
    };
    const fetchMovieDetails = async () => {
      try {
        console.log(movieId);
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
          .then(response => response.json())
          .then(response => setTrailerUrl(response.results[0].key))
          .catch(err => console.error(err)); 
        
                // Check if response and response.data are not undefined
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
  
    fetchMovieDetails();
  }, []);
  

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[tw``, { flex: 1, backgroundColor: '#26282C', paddingHorizontal: 4 }]}>
      <View style={[tw`py-10 flex flex-row w-[90%] items-center`]}>
        <View style={[tw`rounded-2xl h-10 w-10 justify-center items-center`]}>
          <TouchableOpacity onPress={goBack}>
            <MaterialCommunityIcons
              theme={{ roundness: 50 }}
              name='arrow-left'
              color={'#FDD130'}
              size={25}
              accessibilityLabel=""
            />
          </TouchableOpacity>
        </View>
        <Text style={[tw`text-white font-bold text-2xl`]}>Action</Text>
      </View>
      <ScrollView>
        <View style={[tw`px-3`]}>
          {isLoading?  (<ActivityIndicator animating={isLoading} color='#FFD130'/>): (
            <WebView
            containerStyle={{ backgroundColor: "black" }}
            
            style={{
              backgroundColor: "black",
              alignItems: "center",
              flex: 1, 
              height: 250
            }}
            source={{uri: `https://www.youtube.com/embed/${trailerUrl}?rel=0&autoplay=0&showinfo=0&controls=0`}}
            scalesPageToFit={true}
            allowsFullscreenVideo={true}
            javaScriptEnabled={true}
            />
          )}
          
          <Text style={[tw`text-white font-bold text-2xl`]}>{title}</Text>
          <Text style={[tw`text-gray-300`]}>{overview}</Text>
          <View style={[tw`w-full flex flex-row gap-3 items-center justify-center pt-5`]}>
            <TouchableOpacity
              style={[tw`flex-1 flex flex-row items-center justify-center bg-yellow-500 rounded-lg mx-1.5 h-10`]}
              onPress={() => console.log('Play button pressed')}
            >
              <Feather name='play' size={20} />
              <Text style={[tw`text-center`]}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[tw`flex-1 flex flex-row items-center justify-center border-2 border-gray-300 rounded-lg mx-1.5 h-10`]}
              onPress={() => console.log('My List button pressed')}
            >
              <Feather name='plus' size={20} color={'#FDD130'} />
              <Text style={[tw`text-white text-center`]}>My List</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[tw`px-3`]}>
          <View style={[tw`flex flex-row justify-between items-center pt-10 pb-4`]}>
            <Text style={[tw`text-white text-2xl font-bold `]}>U.S Action Movies</Text>
          </View>
          <Cards />
        </View>
        <View style={[tw`px-3`]}>
          <View style={[tw`flex flex-row justify-between items-center pt-10 pb-4`]}>
            <Text style={[tw`text-white text-2xl font-bold `]}>Muvi Original Action</Text>
          </View>
          <Cards />
        </View>
      </ScrollView>
    </View>
  );
};

export default Action;
