import React from 'react'
import { TextInput, Checkbox, MD3Colors } from "react-native-paper";

const TextInputComp = ({label, mode, placeholder,size,color, secureTextEntry,underlineColor,activeOutlineColor, onChangeText, IconName}) => {
    let input = true
  return (
    <>
        <TextInput  
            label={label}
            // mode= {mode}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            activeOutlineColor={activeOutlineColor}
            underlineColor={underlineColor}
            left={<TextInput.Icon 
                    name={IconName}
                    size={size}
                    color={color}
            />}
            right={<TextInput.Icon 
                name={IconName}
                size={size}
                color={color}
        />}
        />
    </>
  )
}

export  {TextInputComp}
