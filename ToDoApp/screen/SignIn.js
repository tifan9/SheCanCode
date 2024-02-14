import React from 'react'
import { View, Text, ScrollView, SafeAreaView, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { TextInput, Checkbox } from 'react-native-paper';
function Sigin_screen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ height:'auto',display: 'flex', gap: 8, padding: '5%',justifyContent:'space-between'  }}>
          {/* for sign content container */}
          <View style={{alignItems:'center'}} >
            <Text>Sign in</Text>
            <Text>Welcome back please enter your details</Text>
          </View>
          <View style={{height:50}}>

          </View>
          {/* end sign content  */}
          {/* for input container */}
          <View style={{ display: 'flex', flexDirection: 'column', gap: 12 }} >
            <TextInput
             mode='offline'
              label="Email"
              left={<TextInput.Icon size={12} icon={"email"} style={{ backgroundColor: 'violet' }}></TextInput.Icon>}

            />
            <TextInput
              style={{borderRadius: 10,backgroundColor: '#f7f7f7',borderBottomWidth:0}}
              mode='offline'
              label="Password"
              secureTextEntry
              left={<TextInput.Icon size={16} icon={"lock"} />}
              right={<TextInput.Icon icon="eye" />}
            />
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Checkbox />
              <Text>Remember me</Text>
            </View>
          </View>
          {/* end sign content  */}
          <View style={{height:50}}>

          </View>
          <View >
            <TouchableOpacity style={{flex:1,justifyContent:'center'}}>
            <Text style={{width:'auto', alignItems:'center',marginHorizontal:'auto',fontWeight:'bold',color:'#44B1FF'}}>Forget password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:'auto',backgroundColor:'#44B1FF',alignItems:'center',color:'white',paddingVertical:12,fontWeight:'bold',borderRadius:7}}>
              <Text>Sign in</Text>
            </TouchableOpacity>
          </View>


        </View>
      </ScrollView>
    </View>

  )
}

export default Sigin_screen


const styles = StyleSheet.create({
  container: {
    height:'100%',
    paddingTop: Platform.OS === 'android' ? 40 : null || Platform.OS === 'ios' ? 10 : null,
    backgroundColor: '#fff',
  },
  buttonRequest: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    margin: 10,
  }
})
