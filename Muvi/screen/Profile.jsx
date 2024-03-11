import React from 'react';
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
  FlatList, } from 'react-native';
  import tw from "twrnc";
  import { FontAwesome } from "@expo/vector-icons";
import { TextInput, Checkbox, MD3Colors, Card } from "react-native-paper";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from 'react-native-vector-icons/Feather'
import { FIREBASE_AUTH } from '../firebaseConfig';

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;
const Profile = ({ navigation }) => {
  const auth = FIREBASE_AUTH
  const logout = async() => {
    auth.signOut()
    navigation.navigate("login")
  }
  return (
    <>
      <View style={styles.Container}>
          <View tyle={styles.viewbar}>
            <View style={{height:30}}></View>
          <Text style={{color:'white', padding:5, fontSize:30,marginTop:40,marginHorizontal:10}}>More</Text>
          </View>
       <View style={styles.viewbar2}>
        <Image source={require('../assets/img/downloads.jpg')} style={{width:100,height:100}}/>
        <View style={styles.viewbartext}>
        <Text style={{color:'white', marginTop:20, fontSize:20}}>Tifan I0I</Text>
          <Text style={{color:'#BFBBBB'}}>I0I@gmail.com</Text>
        </View>
        <View style={styles.viewbaricon}>
          <Feather name='edit-2' style={{color:'orange', marginTop:40}}/>
          <Text style={{color:'orange', marginTop:36}}>Edit</Text>
        </View>
       </View>
       <View style={styles.paragraph}>
        <TouchableOpacity>
          <View style={styles.paragraphtext}>
            <Feather name='inbox' style={{color:'white',fontSize:20 }}/>
            <Text style={{color:'white', fontSize:16}}>Inbox</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.paragraphtext}>
            <Feather name='user' style={{color:'white',fontSize:20 }}/>
            <Text style={{color:'white', fontSize:16}}>Account Settings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.paragraphtext}>
            <Feather name='settings' style={{color:'white',fontSize:20 }}/>
            <Text style={{color:'white', fontSize:16}}>App Settings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.paragraphtext}>
            <Feather name='globe' style={{color:'white',fontSize:20 }}/>
            <Text style={{color:'white', fontSize:16}}>Languages</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.paragraphtext}>
            <Feather name='help-circle' style={{color:'white',fontSize:20 }}/>
            <Text style={{color:'white', fontSize:16}}>Help</Text>
          </View>
        </TouchableOpacity>
          <View style={{flexDirection:'column', display:'flex'}}>
          <TouchableOpacity>
            <View>
            <Text style={{color:'#BFBBBB',paddingBottom:10}}>Terms & Conditions</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View>
            <Text style={{color:'#BFBBBB', paddingBottom:20}}>Privacy & Policy</Text>
            </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={logout}>
  <View style={{ backgroundColor: '#141313', height: 46, marginTop: 80, borderWidth:1, borderColor:'#737272', borderRadius:10}}>
    <Text style={{ color: '#B16D62', marginHorizontal: 130, paddingTop: 10, fontSize: 14 }}>Log Out</Text>
  </View>
</TouchableOpacity>
       </View>
    </View>

    </>
  );
}

export default Profile
const styles = StyleSheet.create({
  Container:{
    backgroundColor:'#1F2123',
    height:windowHeight,
    padding:5,
  },
  viewbar:{
   paddingTop:50,
   marginTop:9,
   flexDirection:'column',
   display:'flex',
   backgroundColor:'black',
   gap:16
  },
  viewbar2:{
   paddingTop:20,
   padding:5,
   flexDirection:'row',
   display:'flex',
   marginHorizontal:10,
   gap:16
  },
  viewbartext:{
   flexDirection:'column',
   display:'flex',
  },
  viewbaricon:{
   flexDirection:'row',
   display:'flex',
   paddingRight: 1,
  },
  paragraph:{
    marginTop:40,
    marginHorizontal:40,
  },
  paragraphtext:{
   flexDirection:'row',
   display:'flex',
   paddingBottom:20,
   gap:20
  }
 });