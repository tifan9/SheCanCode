import {View, Text, ScrollView, TouchableOpacity, Image, Platform } from 'react-native'
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles';
import { TextInput, Checkbox } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
export const Login = () => {
    return(
        
            <ScrollView style={tw `bg-[#F3F5F6]`}>
                <View style={tw `bg-[#F3F5F6]`}>
                <Image source={require('../assets/logo.jpg')} style={tw `w-full `}  />           
                 <Text style={tw `text-3xl font-bold text-center mb-5 pt-5`}>Login</Text>
                 {/* imputs */}
                 <View style={{ display: "flex", flexDirection: "column", gap: 12, paddingHorizontal:10, }}>
            <TextInput
              style={{
                borderRadius: 40,
                backgroundColor: "#fff",
                borderBottomWidth: 0,
                marginHorizontal: 10,
              }}
              mode="offline"
              label="Username"
              left={
                <TextInput.Icon
                  size={12}
                  icon={"account-outline"}
                  style={{ backgroundColor: "#FDE7EB    " }}
                ></TextInput.Icon>
              }
            />
            <TextInput
              style={{
                borderRadius: 40,
                backgroundColor: "#fff",
                borderBottomWidth: 0,
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
            <View style={{ height: 10 }}></View>
            <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: 'center',
              justifyContent: "space-between",
              marginHorizontal: 10,
              paddingHorizontal:10,
            }}
          >
            <Text style={{color:'#8590FB', fontSize:15}}>Forgot Password? </Text>
            <TouchableOpacity
              style={{ 
                borderRadius: 40, 
                backgroundColor: "#1A1B32",
                alignItems: "center",
                justifyContent: "center",
                width: 200,
                height: 40,
                marginHorizontal: 1,
                 }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  borderRadius: 3,
                  fontSize:15,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 80 }}></View>
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
          </View>
            
          </ScrollView>
    )
}
