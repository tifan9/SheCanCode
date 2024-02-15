import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native'
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles';
import { TextInput, Checkbox } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
export const Register = () => {
    return(
        <ScrollView style={tw `bg-[#F3F5F6]`}>
            <View style={styles.container}>
            <Image source={require('../assets/logo2.jpg')} style={tw `w-full my-8  `}  />   
            <Text style={tw `text-3xl font-bold text-center mb-5 pb-1`}>Register</Text>
            <View style={{
                marginHorizontal: 10,
            }}>
            <TextInput
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
                  size={12}
                  icon={"account-outline"}
                  style={{ backgroundColor: "#FBEAE5" }}
                ></TextInput.Icon>
              }
            />
            <TextInput
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
                  size={12}
                  icon={"email-outline"}
                  style={{ backgroundColor: "#DEF4E8" }}
                ></TextInput.Icon>
              }
            />
            <TextInput
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
            <TextInput
              style={{
                borderRadius: 40,
                backgroundColor: "#fff",
                borderBottomWidth: 0,
                marginBottom: 10,
                marginHorizontal: 10,
              }}
              mode="offline"
              label="Confirm Password"
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
                  marginHorizontal: 10,
                  backgroundColor: "#1A1B32",
                  alignItems: "center",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: 24,
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>Register</Text>
              </TouchableOpacity>
            </View>
            {/* <View style={{ height: 80 }}></View> */}
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
