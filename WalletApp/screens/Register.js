import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native'
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles';
import { TextInput, Checkbox } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
export const Register = ({navigation}) => {
    return(
        <ScrollView style={tw `bg-[#F3F5F6]`}>
            <View style={styles.container}>
                <View style={tw `pt-1`}>
                <Image source={require('../assets/logo2.jpg')} style={tw `w-full h-full`}  />   
                </View>
            <Text style={tw `text-2xl font-bold text-center mb-1 pb-1 `}>Register</Text>
            <View style={{
                marginHorizontal: 7,
            }}>
            <TextInput
            theme={{ roundness: 50}}
            underlineColor='white'
              style={{
                borderRadius: 40,
                backgroundColor: "#fff",
                borderBottomWidth: 0,
                marginBottom: 10,
                marginHorizontal: 10,
            
              }}
              mode="offline"
              label="Username"
              left={
                <TextInput.Icon
                  size={17}
                  icon={"account-outline"}
                  style={{ backgroundColor: "#FBEAE5" }}
                ></TextInput.Icon>
              }
            />
            <TextInput
            theme={{ roundness: 50}}
            underlineColor='white'
              style={{
                borderRadius: 40,
                backgroundColor: "#fff",
                borderBottomWidth: 0,
                marginBottom: 10,
                marginHorizontal: 10,
              }}
              mode="offline"
              label="email"
              left={
                <TextInput.Icon
                  size={17}
                  icon={"email-outline"}
                  style={{ backgroundColor: "#DEF4E8" }}
                ></TextInput.Icon>
              }
            />
            <TextInput
            theme={{ roundness: 50}}
            underlineColor='white'
              style={{
                borderRadius: 40,
                backgroundColor: "#fff",
                borderBottomWidth: 0,
                marginBottom: 10,
                marginHorizontal: 10,
              }}
              mode="offline"
              label="Password"
              secureTextEntry
              left={
                <TextInput.Icon
                  size={16}
                  icon={"lock-outline"}
                  style={{ backgroundColor: "#E1EAFF" }}
                />
              }
            />
           
            </View>
                        <View style={{ height: 10 }}></View>

            <View style={{ display: "flex", justifyContent: "center" }}>
              {/* <TouchableOpacity style={{ flex: 1 }}>
                <Text
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: "auto",
                    paddingBottom: 30,
                    fontWeight: "bold",
                    color: "#44B1FF",
                    textAlign: "center",
                  }}
                >
                  Forgot password
                </Text>
              </TouchableOpacity> */}
              <TouchableOpacity
                style={{
                  paddingVertical: 15,
                  width: "auto",
                  marginVertical:9,
                  marginHorizontal: 7,
                  backgroundColor: "#1A1B32",
                  alignItems: "center",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: 24,
                }}
                onPress={() =>
                    navigation.navigate('HomeScreen')
                  }
              >
                <Text style={{ color: "white", fontSize: 20 }}>Register</Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: 60 }}></View>
            <View style={styles.footerIcons}>
            <TouchableOpacity style={styles.square}>
              <Icon name="facebook-square" size={30} color="#257EFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.square}>
              <Icon name="google" size={30} color="#FF583F" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.square}>
              <Icon name="apple" size={30} color="black" />
            </TouchableOpacity>
          </View>
            </View>
        </ScrollView>
    )
}
