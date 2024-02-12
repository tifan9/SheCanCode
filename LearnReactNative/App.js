import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
export default function App() {
  const isloading = false
  const whenUserClick = () =>{
    isloading = true
    console.log(isloading)
  }
  return (
    <View style={styles.container}>
      {isloading?(
          <ActivityIndicator  />
      ):(
        <Text  >This is ReactNative app !</Text>
      )}
      
      <TouchableOpacity  style={styles.buttonRequest} onPress={whenUserClick()} >
          <Text style={{color:"white"}}>Request</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}


