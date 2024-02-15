import { StyleSheet, Text, View, ScrollView,Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar';
const Gallery = () => {
    return(
        <View style={tw `flex-1 items-center justify-center text-center`}>
        <ScrollView>
            <View style={tw `flex flex-row flex-wrap justify-center items-center `}>
                <Image source= {require('../assets/1.png')} style={tw `w-1/2`}/>
                <Image source= {require('../assets/1.png')} style={tw `w-1/2`}/>
                <Image source= {require('../assets/1.png')} style={tw `w-1/2`}/>
                <Image source= {require('../assets/1.png')} style={tw `w-1/2`}/>
            </View>
        </ScrollView>
        <StatusBar style="auto" />
        </View>
    )
}
export {Gallery}