import React, { useState } from "react";
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
  FlatList,
} from "react-native";
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput, Checkbox, MD3Colors, Card } from "react-native-paper";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { CardMovie } from "../components/CardMovie";
import { BottomNav } from "../components/BottomNav";
import { Cards } from "../components/Cards";
import axios from "axios";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;
const Search = ({ navigation }) => {
  const [search, setSearch] = useState([]);
  const [searchdata, setSearchdata] = useState("");
  React.useEffect(() => {
    if (searchdata.length > 0) {
      Searchapi();
      console.log(Searchapi());
    } else {
      setSearch([]);
      console.log("not worked");
    }
  }, [searchdata]);

  const Searchapi = async () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ea0438f12471a11fa4b7ae82d8b7fada&language=en-US&query=${searchdata}&page=1&include_adult=false`
      )
      .then((data1) => {
        // console.log(data1.data.results);
        setSearch(data1.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <View
        style={[tw``, { backgroundColor: "#1F2123", height: windowHeight }]}
      >
        <View style={{ height: 50 }}></View>
        <View
          style={[
            tw`bg-[#1F2123]`,
            { backgroundColor: "#1F2123", paddingTop: 10 },
          ]}
        >
          <TextInput
            value={searchdata}
            onChangeText={(e) => setSearchdata(e)}
            underlineColor="transparent"
            style={{
              // borderRadius: 40,
              // borderBottomWidth: 0,
              marginBottom: 10,
              marginHorizontal: 10,
              backgroundColor: "#303234",
            }}
            mode="outlined"
            textColor="white"
            placeholder="Search..."
            theme={{ roundness: 10 }}
            left={
              <TextInput.Icon
                icon={"magnify"}
                color={"#BBC3A4"}
                style={{ opacity: 0.5 }}
              />
            }
            right={
              <TextInput.Icon
                icon={"magnify"}
                color={"#BBC3A4"}
                style={{ opacity: 0.5 }}
              />
            }
          />
        </View>
        <View style={[tw`bg-[#26282C]`, {}]}>
          <View
            style={[
              tw` flex flex-col justify-center items-center px-5`,
              { paddingVertical: 90, paddingHorizontal: 10 },
            ]}
          >
            <FlatList
              data={search}
              renderItem={({ item }) => (
                <>
                  <View style={[tw`flex flex-row justify-between gap-4`, {}]}>
                    <TouchableOpacity
                      style={[
                        tw`relative border-white rounded-xl gap-3 mx-3`,
                        { width: 240 },
                      ]}
                      onPress={() =>navigation.navigate('action',item)}
                    >
                      <Image
                        source={{
                          uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                        }}
                        style={[
                          tw`w-full h-40 rounded-xl`,
                          { resizeMode: "cover" },
                        ]}
                      />
                      <View
                        style={[
                          tw`absolute top-2 right-2 bg-yellow-500 rounded p-2`,
                          {},
                        ]}
                      >
                        <Text style={[tw`text-black font-bold text-xl`]}>
                          {item.vote_average.toFixed(1)}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </>
              )}
              keyExtractor={(item, index) => index.toString()}
            />

            {/* <Image
          source={require('../assets/img/search.png')}
          resizeMode="cover"
          style={tw `justify-center `}
        /> */}

            <Text style={[tw`font-bold text-2xl text-white text-center`]}>
              Search any Movie
            </Text>
            <Text style={[tw`text-gray-300 text-center`, { fontSize: 20 }]}>
              Explore our libraries and enjoy this movie with your family.
            </Text>
          </View>

          <View style={{ height: 60 }}></View>
          <View style={[tw`px-4`]}>
            <Text style={[tw`text-2xl font-bold text-white pb-5`]}>
              Maybe you likes
            </Text>
            <CardMovie />
          </View>
          <View style={{ height: 500 }}></View>
        </View>
      </View>
    </>
  );
};

export { Search };
