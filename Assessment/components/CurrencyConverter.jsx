import React, { useState } from 'react'
import { Dimensions,View, Text, TextInput, SafeAreaView, FlatList, ScrollView, TouchableOpacity  } from 'react-native'


const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
const CurrencyConverter = () => {
    const [amount, setAmount] = useState('')
    const [convertedCurrency, setConvertedCurrency] = useState('')

    const convert = () => {
        if (amount !== '') {
            const convertedAmount = parseFloat(amount) * 1020;
            setConvertedCurrency(convertedAmount.toFixed(2)); 
        }
    };

  return (
    <>
        <SafeAreaView style={{
                height:windowHeight
            }}>
                <View style={{height:60}}></View>
            <View style={{
                paddingHorizontal:10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: "600",
                    textAlign: 'center',
                }}>Currency Converter</Text>
            <View style={{height:30}}></View>
                <TextInput  
                    style={{
                        borderWidth: 3,
                        borderColor: 'gray',
                        height:50,
                        paddingHorizontal:4,
                        width: '100%'
                    }}
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={text => setAmount(text)}
                    placeholder="Enter the amount"
                />
                <Text style={{
                    fontSize:20,
                    paddingTop: 4,
                    paddingBottom:5,
                    }} >The Converted Currency is: {convertedCurrency} RWF</Text>
                <TouchableOpacity
                    style={{
                        backgroundColor:'black',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems:'center',
                        width:'100%',
                        height:50,
                        borderRadius:6,
                    }}
                    onPress={convert}
                >
                    <Text style={{
                        fontSize:30,
                        textAlign:'center',
                        color: 'white'
                    }}>Convert</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </>
  )
}

export  {CurrencyConverter}
