import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setvalue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput value={value} onChangeText={setvalue} placeholder={placeholder} style={styles.input} secureTextEntry={secureTextEntry} autoCapitalize='none'/>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#9961ee', 
        borderWidth: 2,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginVertical:5,
    },
    input:{},
})

export default CustomInput;