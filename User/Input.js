import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../theme'

const Input = (props) => {
    const onChangeText = (text) =>{
        props.onInputChanged(props.id, text)
    }
  return (
    <View style={styles.container}>
        <View style={[styles.inputContainer, {borderColor:COLORS.black}]}>
            <TextInput {...props} placeholder={props.placeholder} placeholderTextColor={props.placeholderTextColor} style={styles.input} autoCapitalize='none' onChangeText={onChangeText} secureTextEntry={props.secureTextEntry}/>
        </View>
        {
            props.errorText && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{props.errorText[0]}</Text>
                </View>
            )
        }
    </View>
  )
}
const styles = StyleSheet.create({
    container:{

    },
    inputContainer:{
        width:'100%',
        paddingHorizontal:SIZES.padding,
        paddingVertical:SIZES.padding2,
        borderRadius:12,
        borderBottomWidth:1,
        borderBottomColor:COLORS.black,
        marginVertical:16,
        flexDirection:"row",
    },
    input:{
        color: COLORS.black,
        flex:1,
        paddingTop:0,
        fontSize:18,
    },
    errorContainer:{
        marginVertical: 4,

    },
    errorText:{
        color:"red",
        fontSize:12,
    },

})
export default Input