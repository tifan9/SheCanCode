import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';

const Cards = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTA0MzhmMTI0NzFhMTFmYTRiN2FlODJkOGI3ZmFkYSIsInN1YiI6IjY1ZDg2YmVlY2FhNTA4MDE4YTM0MTMyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KvD6BdCNfQnnwEltF9Q3sWfOGetlVfKBf5Pwoxa5hrU'
                    }
                };

                const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
                const data = await response.json();
                setMovie(data.results);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

        fetchMovieData();
    }, []);

    const renderCards = ({ item }) => {
        return (
            <View style={[tw`flex flex-row justify-between gap-4`, {}]}>
                <TouchableOpacity style={[tw`relative border-white rounded-xl gap-3 mx-3`, { width: 240 }]}>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                        style={[tw`w-full h-40 rounded-xl`, { resizeMode: 'cover' }]}
                    />
                    <View style={[tw`absolute top-2 right-2 bg-yellow-500 rounded p-2`, {}]}>
                        <Text style={[tw`text-black font-bold text-xl`]}>{item.vote_average.toFixed(1)}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={movie}
                renderItem={renderCards}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            />
        </>
    );
};

export { Cards };
