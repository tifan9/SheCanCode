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
} from "react-native";
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput, Checkbox, MD3Colors } from "react-native-paper";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { BottomNav } from "../components/BottomNav";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;
const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const auth = FIREBASE_AUTH;

  const validateForm = () => {
    let valid = true;
    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Example@mail.com");
      valid = false;
    } else {
      setEmailError("");
    }
    // password validate
    if (!password.trim()) {
      setPasswordError("Password required");
      valid = false;
    } else if (password.length < 8) {
      setPasswordError("password must be 8 character");
      valid = false;
    } else {
      setPasswordError("");
    }
    if (confirmPassword !== password) {
      setConfirmPassword("Password does not match");
      valid = false;
    } else {
      setConfirmPasswordError("");
    }
    return valid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(response);
        // navigation.navigate('Home')
      } catch (error) {
        console.log(error);
      }
    }
  };
  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <>
      <View
        style={[
          tw``,
          {
            height: windowHeight,
            flex: 1,
            paddingTop: 10,
            padding: 5,
            backgroundColor: "#26282C",
          },
        ]}
      >
        <View style={[tw`py-10 flex flex-row w-[90%] items-center`, {}]}>
          <View
            style={[tw`rounded-2xl h-10 w-10 justify-center items-center`, {}]}
          >
            <TouchableOpacity onPress={() => navigation.navigate("sign")}>
              <MaterialCommunityIcons
                theme={{ roundness: 50 }}
                name="arrow-left"
                color={"#FDD130"}
                size={25}
                accessibilityLabel=""
              />
            </TouchableOpacity>
          </View>
          <Text style={[tw`text-white font-bold text-2xl`]}>Register</Text>
        </View>
        {/* logo */}
        <View
          style={[
            tw`flex flex-row justify-center items-center flex-wrap space-y-5 py-5 gap-y-4`,
            {},
          ]}
        >
          <Image
            source={require("../assets/img/logo.jpg")}
            resizeMode="cover"
            style={tw`justify-center `}
          />
          <Text style={[tw`text-center text-white text-xl`]}>
            Sign up to discover all our movies and enjoy our features.
          </Text>
        </View>

        {/* Inputs */}
        <View style={[tw`px-3`, {}]}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            textColor="white"
            error={!!emailError}
            style={[tw``, { backgroundColor: "#26282C" }]}
            label="Email Address"
            underlineColor="gray"
            right={<TextInput.Icon icon="email-outline" color={"#FDD130"} />}
          />
          {emailError ? (
            <Text style={[tw`text-red-500 mt-5 text-xl`]}>{emailError}</Text>
          ) : null}
          <TextInput
            value={password}
            onChangeText={setPassword}
            error={!!passwordError}
            textColor="white"
            style={[tw``, { backgroundColor: "#26282C" }]}
            label="Password"
            underlineColor="gray"
            right={<TextInput.Icon icon="lock-outline" color={"#FDD130"} />}
          />
          {passwordError ? (
            <Text style={[tw`text-red-500 mt-5 text-xl`]}>{passwordError}</Text>
          ) : null}
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            error={!!confirmPasswordError}
            textColor="white"
            style={[tw``, { backgroundColor: "#26282C" }]}
            label="Confirm Password"
            underlineColor="gray"
            right={<TextInput.Icon icon="lock-outline" color={"#FDD130"} />}
          />
          {confirmPasswordError ? (
            <Text style={[tw `text-red-500 mt-5 text-xl`]}>
              {confirmPasswordError}
            </Text>
          ) : null}

          <View style={[tw`items-center pt-10`, {}]}>
            <TouchableOpacity
              style={[
                tw`items-center justify-center bg-yellow-500 rounded-lg w-6/6 py-3`,
                {},
              ]}
              onPress={handleSubmit}
            >
              <Text style={tw`text-black text-xl`}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <Text style={[tw`text-center text-white text-md pt-4`]}>
            By signing up I accept{" "}
            <Text style={[tw`text-yellow-500`]}>terms of use</Text> and{" "}
            <Text style={[tw`text-yellow-500`]}>privacy policy</Text>
          </Text>
          <Text style={[tw`text-center text-white text-md pt-5`]}>
            or simply sign up with
          </Text>
        </View>
        <View>
          <View style={[tw`px-3 items-center pt-10 mb-4`, {}]}>
            <TouchableOpacity
              style={tw`items-center justify-center bg-[#111111] rounded-lg w-6/6 py-3 flex flex-row gap-3`}
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
            <Pressable onPress={() => navigation.navigate("login")}>
              <Text style={tw`text-white text-md pt-5`}>
                {" "}
                Already have an account?{" "}
                <Text style={[tw`text-yellow-500`]}>Sign in</Text>
              </Text>
            </Pressable>
          </View>
        </View>

        <StatusBar style="light" />
      </View>
    </>
  );
};

export { Register };
