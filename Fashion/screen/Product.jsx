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
  import { TextInput, Checkbox, MD3Colors } from "react-native-paper";
  import { Input } from 'react-native-elements';
  import Icon from "react-native-vector-icons/FontAwesome";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Filters from "../components/Filters";
import Cards from "../components/Cards";
import ProductCard from "../components/ProductCards";
const Product = () => {
  return (
    <>
        <SafeAreaView>
        <ScrollView>
            <View style={styles.container}>
                {/* <View style={{height: 70}}></View> */}
                <View style={[tw `flex flex-row justify-between w-[90%]`, { alignSelf:'center', alignItems:'center'}]}>
                    <View style={[tw `rounded-2xl h-10 w-10 justify-center items-center`, {backgroundColor: 'lightgray'}]}>
                        <TouchableHighlight>
                        <MaterialCommunityIcons
                            theme={{ roundness: 50}}
                            name='arrow-left' 
                            size={20}
                            accessibilityLabel=""
                            />
                        </TouchableHighlight>
                    </View>

                    <Text style={tw `font-bold text-2xl`}>Search</Text>
                    <MaterialCommunityIcons name='tune-vertical' size={30}
                            
                        />
                </View>
            </View>
            {/* search */}
            <View style={[tw ``, {}]}>
                <TextInput 
                underlineColor='transparent' 
                    style={{
                        borderRadius: 40,
                        borderBottomWidth: 0,
                        marginBottom: 10,
                        marginHorizontal: 10,
                        backgroundColor: 'aliceblue',
                    
                      }}
                    placeholder="Search..."
                    theme={{roundness:30}}
                    left={
                        <TextInput.Icon 
                        icon={'magnify'} 
                        color={'#BBC3A4'}
                        style={{opacity: 0.5}}
                        />}
                        right={
                            <TextInput.Icon 
                        icon={'tune-variant'} 
                        color={'#BBC3A4'}
                        style={{opacity: 0.5}}
                        />
                        }
                />
            </View>
            {/* Filter */}
            <Filters  />
            
            {/* <Cards  /> */}
            <Cards  />
            {/* Products */}
            <View style={[tw `py-5 px-5`]}>
                <Text style={[tw `text-2xl font-bold`]}>Product Result (43)</Text>
            </View>
                <ProductCard  />
        </ScrollView>
        </SafeAreaView>
    </>
  )
}

export default Product
const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      backgroundColor: "#fff",
      paddingVertical: 11,
    },
  });