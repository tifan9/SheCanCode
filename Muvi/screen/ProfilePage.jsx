import React from 'react';
import { View, FlatList, StyleSheet, Image, Text, ImageBackground, Dimensions, Button, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInputComp } from '../components/Textcomponents';
import { TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather'
const height = Dimensions.get('screen').height;
export const Profile = ({navigation}) => {
    return(
        <View style={styles.Container}>
          <View tyle={styles.viewbar}>
          <Text style={{color:'white', fontSize:30,marginTop:40,marginHorizontal:10}}>More</Text>
          </View>
       <View style={styles.viewbar2}>
        <Image source={require('../assets/joker.jpg')} style={{width:100,height:100}}/>
        <View style={styles.viewbartext}>
        <Text style={{color:'white', marginTop:20, fontSize:20}}>Kesselle Gahimbare</Text>
          <Text style={{color:'#BFBBBB'}}>kessellegahimbare@gmail.com</Text>
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
          <TouchableOpacity>
  <View style={{ backgroundColor: '#141313', height: 46, marginTop: 80, borderWidth:1, borderColor:'#737272', borderRadius:10}}>
    <Text style={{ color: '#8C0B0B', marginHorizontal: 130, paddingTop: 10, fontSize: 14 }}>Log Out</Text>
  </View>
</TouchableOpacity>
       </View>
    </View>
    )
};
const styles = StyleSheet.create({
 Container:{
   backgroundColor:'#1F2123',
   height:height,
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