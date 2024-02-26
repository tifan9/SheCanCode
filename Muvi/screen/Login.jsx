import React, { useState } from 'react'
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
} from "react-native";
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput, Checkbox, MD3Colors } from "react-native-paper";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TextInputComp } from "../components/TextInputComp";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;
const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const validateForm = () => {
      let valid = true

      // Validate email
      if (!email.trim()) {
          setEmailError('Email must not be empty')
          valid = false
      } else if (!isValidEmail(email)) {
          setEmailError('Invalid email format')
          valid = false
      } else {
          setEmailError('')
      }

      // Validate password
      if (!password.trim()) {
        setPasswordError('Password is required');
        valid = false;
    } else if (password.length < 8) {
        setPasswordError('Password must be 8 characters long');
        valid = false;
    } else {
        setPasswordError('');
    }

      return valid
  }

  const handleSubmit = () => {
      if (validateForm()) {
          // Perform form submission
          navigation.navigate("home");
          console.log('Form submitted:', email, password)
      }
  }

  const isValidEmail = (email) => {
      // Basic email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
  }
  return (
    <>
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
        {/* header */}
        <View style={[tw `py-10 flex flex-row w-[90%] items-center`, {}]}>
          <View
            style={[tw `rounded-2xl h-10 w-10 justify-center items-center`, {}]}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("sign")}
            >
              <MaterialCommunityIcons
              onPress={() => navigation.navigate("sign")}
                theme={{ roundness: 50 }}
                name="arrow-left"
                color={"#FFFF"}
                size={25}
                accessibilityLabel=""
              />
            </TouchableOpacity>
          </View>
          <Text style={[tw`text-white font-bold text-2xl`]}>Sign In</Text>
        </View>
        {/* logo */}
        <View
          style={[
            tw `flex flex-row justify-center items-center flex-wrap space-y-5 py-5 gap-y-4`,
            {},
          ]}
        >
          <Image
            source={require("../assets/img/logo.jpg")}
            resizeMode="cover"
            style={tw `justify-center `}
          />
          <Text style={[tw`text-center text-white text-xl`]}>
            Sign up to discover all our movies and enjoy our features.
          </Text>
        </View>
        {/* Inputs */}
        <View style={[tw `px-3`, {}]}>
        <TextInput
            style={[tw``, { backgroundColor: "#26282C", color: 'white',fontSize: 16 }]}
            label="Email Address"
            theme={{color:{primary:'white'}}}
            textColor="white"
            underlineColor="gray"
            autoCompleteType="email"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
            activeOutlineColor='white'
            error={!!emailError}
            right={<TextInput.Icon icon="email-outline" color={"#FDD130"} />}
        />
          {emailError ? <Text style={[tw `text-red-500 mt-5 text-xl`]}>{emailError}</Text> : null}
          <TextInput
                style={[tw``, { backgroundColor: "#26282C",fontSize: 16, color: 'white' }]}
                label="Password"
                theme={{color:{primary:'white'}}}
                textColor='white'
                underlineColor="gray"
                secureTextEntry={true}
                activeOutlineColor='white'
                value={password}
                onChangeText={setPassword}
                error={!!passwordError}
            right={<TextInput.Icon icon="lock-outline" color={"#FDD130"} />}
          />
          {passwordError ? <Text style={[tw `text-red-500 mt-5 text-xl`]}>{passwordError}</Text> : null}
          <Text style={[tw `py-2 text-yellow-500 text-right`]}>Forgot Password?</Text>
          <View style={[tw `items-center pt-10`, {}]}>
            <TouchableOpacity
              style={[
                tw`items-center justify-center bg-yellow-500 rounded-lg w-6/6 py-3`,
                {},
              ]}
              // onPress={() => navigation.navigate("sign")}
              onPress={handleSubmit}
            >
              <Text style={tw`text-black text-xl`}>Get Started</Text>
            </TouchableOpacity>
          </View>
          
          <Text style={[tw `text-center text-white text-md pt-5`]}>
            or simply sign up with
          </Text>
        </View>
        <View>
          <View style={[tw `px-3 items-center pt-10 mb-4`, {}]}>
            <TouchableOpacity
              style={tw `items-center justify-center bg-[#111111] rounded-lg w-6/6 py-3 flex flex-row gap-3`}
              onPress={() => navigation.navigate("sign")}
            >
              <Icon
                // theme={{ roundness: 50}}
                name="apple"
                color={"#FFFFFF"}
                size={12}
                accessibilityLabel=""
              />
              <Text style={tw`text-white text-xl`}>Sign Up with Apple</Text>
            </TouchableOpacity>
            <View style={{ height: 20 }}></View>
            <TouchableOpacity
              style={tw` items-center justify-center bg-[#FFFF] rounded-lg w-6/6 py-3 flex flex-row gap-3`}
              onPress={() => navigation.navigate("sign")}
            >
              <Icon
                // theme={{ roundness: 50}}
                name="google"
                // color={'#FFFFFF'}
                size={12}
                accessibilityLabel=""
              />
              <Text style={tw`text-black text-xl`}>Sign Up with Apple</Text>
            </TouchableOpacity>
            <Text style={tw`text-white text-md pt-5`}>
              {" "}
              Don't have an account?{" "}
              <Text
                style={[tw`text-yellow-500`]}
                onPress={() => navigation.navigate("login")}
              >
                Sign in
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export { Login };
