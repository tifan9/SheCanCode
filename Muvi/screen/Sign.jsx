import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const Sign = () => {
  return (
    <>
      <View
        style={[
          tw `items-center justify-center  pt-6`,
          {
            backgroundColor: '#1F2123',
            height: 120,
          },
        ]}
      >
        <Image
          source={require('../assets/img/logo.jpg')}
          resizeMode="cover"
          style={tw `justify-center `}
        />
      </View>   
      <View
        style={[
          tw `items-center justify-center flex-1 px-5`,
          {
            backgroundColor: '#26282C',
          },
        ]}
      >
        <View style={{ flex: 1 }} />
        <Image
          source={require('../assets/img/getStarted.jpg')}
          resizeMode="cover"
          style={[
            tw `justify-center`,
            {
              width: 200,
              marginBottom: 40,
            },
          ]}
        />
        <View style={{height:80}}></View>
        <View style={[tw `justify-center items-center text-center px-5 pb-10`]}>
          <Text style={[tw `text-white text-center font-bold text-2xl`]}>Welcome to Muvi</Text>
          <Text style={[tw `text-gray-400 text-center text-xl`]}>
            Free movie streaming all you need every time and everywhere.
          </Text>
        </View>
        
        <View style={[tw `pt-5 w-full gap-3`]}>
          <TouchableOpacity
            style={[tw `items-center justify-center bg-yellow-500 rounded-lg py-3 mb-5`, { width: '100%' }]}
            onPress={() => console.log('Button Pressed')}
          >
            <Text style={tw `text-black text-xl`}>Watch Movie</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[tw `items-center justify-center  rounded-lg py-3`, { width: '100%' }]}
            onPress={() => console.log('Button Pressed')}
          >
            <Text style={tw`text-white text-xl`}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    </>
  );
};

export { Sign };
