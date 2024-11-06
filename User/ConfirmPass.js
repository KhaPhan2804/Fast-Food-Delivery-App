import { View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import React, { useState } from 'react'
import SafeViewAndroid from '../components/SafeViewAndroid';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import { useNavigation } from '@react-navigation/native';
export default function ConfirmPass() {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const [Pass, setPass] = useState('');
  const onConfirmPressed = () => {
    console.warn("confirm");
  }
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.title}>Reset your password</Text>
          <CustomInput placeholder="Enter your received code" value={code} setvalue={setCode} />
          <CustomInput placeholder="Enter your new password" value={Pass} setvalue={setPass} secureTextEntry={true} />
          <CustomButton text="Submit" onPress={onConfirmPressed}/>
          <CustomButton text="Back to sign in" onPress={() => navigation.navigate('Login')} type="FOR"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding:20,
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'#9961ee',
    margin:10,
  },
  text:{
    color:'gray',
    marginVertical:10,
  },
  link:{
    color:'orange',
  },
});
