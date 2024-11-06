import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import { themeColors } from '../theme';

const CustomButton = ({onPress, text, type="PRI", bgColor, fgColor}) => {
  return (
    <Pressable onPress={onPress}  style={[styles.container, styles[`container_${type}`], bgColor ? {backgroundColor:bgColor} : {}]}>
      <Text style={[styles.text, styles[`text_${type}`], fgColor ? {color: fgColor} : {}]}>{text}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
    container:{
        
        width:'100%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:100,
    },
    container_PRI:{
        backgroundColor:themeColors.bgColor(3),
    },
    container_FOR:{

    },
    container_FOR1:{
      borderColor:themeColors.bgColor(3),
      borderWidth:2,
    },
    text:{
        fontWeight:'bold',
        color:'white',
    },
    text_FOR:{
        color:'gray',
    },
    text_FOR1:{
      color:themeColors.bgColor(3),
    },
});
export default CustomButton