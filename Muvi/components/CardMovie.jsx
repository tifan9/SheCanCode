import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const CardMovie = () => {
    const [popular, setPopular] = useState([]);
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTA0MzhmMTI0NzFhMTFmYTRiN2FlODJkOGI3ZmFkYSIsInN1YiI6IjY1ZDg2YmVlY2FhNTA4MDE4YTM0MTMyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KvD6BdCNfQnnwEltF9Q3sWfOGetlVfKBf5Pwoxa5hrU'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=4', options)
        .then(response => response.json())
        .then(response => setPopular(response.results))
        .catch(err => console.error(err));
        

    const renderMovieCards = ({ item }) => {
        return (
            <View style={[tw `flex flex-col justify-between items-center `, {}]}>
                <TouchableOpacity style={[tw `relative  border-white rounded-xl gap-3   py-3`, { width: 380 }]}>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                        style={[tw `w-full h-48 rounded-xl `, { resizeMode: 'cover' }]}
                    />
                    <View style={[tw `w-12 bg-yellow-500 rounded p-2`, { position: 'absolute', top: 20, right: 13 }]}>
                        <Text style={[tw `text-black font-bold text-xl`]}>{item.vote_average.toFixed(1)}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <>
            <FlatList
                showsVerticalScrollIndicator={false}
                vertical={true}
                data={popular}
                renderItem={renderMovieCards}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            />
        </>
    );
};

export { CardMovie };
