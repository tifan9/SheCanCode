import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    header:{
      backgroundColor: '#FB955B',
      height: 80,
      marginTop: 30,
      
    },
    textHeader:{
      color: 'white',
      alignSelf: 'flex-end',
      fontSize: 30,
      paddingRight: 12,
      paddingTop: 20,
      
    },
    title:{
      padding: 10,
      paddingTop: 30,
      fontSize: 30,
      // fontWeight: 'bold',


    },  
    input:{
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderStyle:"dashed",
      borderRadius: 6,
    }
  });