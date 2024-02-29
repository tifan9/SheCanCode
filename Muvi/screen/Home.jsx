import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {Dimensions, View, Text, ScrollView, ImageBackground, StyleSheet, SafeAreaView,Image, TouchableOpacity, FlatList } from 'react-native';
import tw from 'twrnc';
import { FontAwesome } from "@expo/vector-icons";
  import { TextInput, Checkbox, MD3Colors } from "react-native-paper";
  import { Input } from 'react-native-elements';
  import Icon from "react-native-vector-icons/FontAwesome";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  // import Feather from "react-native-vector-icons/Feather"
  import { Tags } from '../components/Tags';
import { Cards } from '../components/Cards';
import { CardMovie } from '../components/CardMovie';
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
const Home = ({navigation}) => {
  const category = [
    {
      name: 'Featured'
    },
    {
      name: 'Series'
    },
    {
      name: 'Film'
    },
    {
      name: 'Original'
    },
    {
      name: 'Documentary'
    }
  ]

  const renderCategory = ({item, isActive}) => {
      return (
        <View style={[tw `flex flex-row items-center justify-between gap-4`, {}]}>
        <TouchableOpacity>
        <Text style={[tw `text-xl`, isActive ? { color: 'yellow', textDecorationLine: 'underline', paddingBottom: 4 } : { color: 'white' }]}>{item.name}</Text>
        </TouchableOpacity>
      </View>
      )
  }
  return (
    <>
    <View
      style={[  
        tw `-mx-1`,
        {
          borderRadius: 10, 
          borderBottomLeftRadius: 0, 
          borderBottomRightRadius: 0,
          borderTopRightRadius:2,
          marginBottom:-6,
        },
      ]}
    >

    </View>
    <View
        style={[  
            tw ``,
            {
              height: windowHeight,
              width: windowWidth,
              flex: 1,
              paddingTop: 10,
              padding: 5,
              backgroundColor: "#26282C",
            },
          ]}
    >
        {/* logo */}
        <View
        style={[
          tw `flex flex-row justify-between  items-center px-5 pt-10`,
          {
            backgroundColor: '#1F2123',
            height: 90,
          },
        ]}
      >
        <Image
          source={require('../assets/img/logo.jpg')}
          resizeMode="cover"
          style={tw `justify-center `}
        />
            <View style={[tw `flex flex-row gap-3 px-5`]}>
                <TouchableOpacity>
                <MaterialCommunityIcons
                theme={{ roundness: 50 }}
                name="bookmark-outline"
                color={"#FFFF"}
                size={25}
                accessibilityLabel=""
              />
                </TouchableOpacity>
            <TouchableOpacity>
            <MaterialCommunityIcons
                theme={{ roundness: 50 }}
                name="bell-outline"
                color={"#FFFF"}
                size={25}
                accessibilityLabel=""
            />
            </TouchableOpacity>
            </View>
      </View>
        {/*tags  */}
        <View
          style={[
            tw `flex flex-row justify-between  items-center px-5 `,
            {
              backgroundColor: '#1F2123',
              height: 70,
            },
          ]}
        >

          <FlatList  
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={category}
            renderItem={({ item }) => renderCategory({ item, isActive: item.name === 'Featured' })}
            keyExtractor={(item) => item.name.toString()}
            ItemSeparatorComponent={() => <View style={{ width: 44 }} />}
          />
        </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* tags    */}
            <View style={[tw `px-3`, {}]}>
            <Tags  />
            </View>
          
          {/* cards */}
          <View style={[tw `px-3`]}>
            <View style={[tw `flex flex-row justify-between  items-center  pt-10 pb-4`]}>
                <Text style={[tw `text-white text-2xl font-bold `]}>New Release</Text>
                <TouchableOpacity>
                  <Text style={[tw `text-white`]}>View More</Text>
                </TouchableOpacity>
            </View>
            <Cards  />
          </View>
          {/* custom */}
          <View style={[tw `px-3`]}>
            <View style={[tw `flex flex-row justify-between  items-center  pt-10 pb-4`]}>
                <Text style={[tw `text-white text-2xl font-bold `]}>Made for You</Text>
                <TouchableOpacity>
                  <Text style={[tw `text-white`]}>View More</Text>
                </TouchableOpacity>
            </View>
            <Cards  />
          </View>
          <View style={[tw `px-4`]}>
            <View style={[tw `flex flex-row justify-between  items-center  pt-10 pb-4`]}>
                <Text style={[tw `text-white text-2xl font-bold `]}>Popular on <Text style={[tw `text-yellow-500`]}>Muvi</Text></Text>
                <TouchableOpacity>
                  <Text style={[tw `text-white`]}>View More</Text>
                </TouchableOpacity>
            </View>
            <CardMovie  />
            <Cards  />
          </View>
          {/* navbar */}
          </ScrollView>
          {/* <View style={[tw `-mx-3 -my-1`]}>
          <View style={[tw `bg-[#1F2123] flex flex-row flex-wrap justify-between items-center px-7 py-7 w-7/7`, {
            borderRadius: 10, 
            borderBottomLeftRadius: 0, 
            borderBottomRightRadius: 0,
            overflow: 'hidden'
            
          }]}>
            <TouchableOpacity>
            <MaterialCommunityIcons
                theme={{ roundness: 50 }}
                name="home"
                color={"#c3c3c3c3"}
                size={25}
                accessibilityLabel=""
              />
            </TouchableOpacity>
            <TouchableOpacity
            
            onPress={() =>
              navigation.navigate('search')
            }
            >
            <Icon
                theme={{ roundness: 50 }}
                name="search"
                color={"#c3c3c3c3"}
                size={25}
                accessibilityLabel=""
              />
            </TouchableOpacity>
            <TouchableOpacity>
            <MaterialCommunityIcons
                theme={{ roundness: 50 }}
                name="folder"
                color={"#c3c3c3c3"}
                size={25}
                accessibilityLabel=""
              />
            </TouchableOpacity>
            <TouchableOpacity>
            <MaterialCommunityIcons
                theme={{ roundness: 50 }}
                name="grid"
                color={"#c3c3c3c3"}
                size={25}
                accessibilityLabel=""
              />
            </TouchableOpacity>
          </View>
          </View> */}
    </View>
    <StatusBar style="light"/>
    </>
  )
}

export  {Home}
