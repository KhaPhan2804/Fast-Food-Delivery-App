import { View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import React, { useState } from 'react'
import SafeViewAndroid from '../components/SafeViewAndroid';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import { useNavigation } from '@react-navigation/native';
export default function ConfirmEmail() {
  const navigation = useNavigation();
  const [Code, setCode] = useState('');
  const onConfirmPressed = () => {
    console.warn("confirm");
  }
  const onResendPressed = () => {
    console.warn("resend");
  }
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.title}>Xác nhận email</Text>
          <CustomInput placeholder="Nhập mã mà bạn đã nhận trong email" value={Code} setvalue={setCode} />
          <CustomButton text="Xác nhận" onPress={onConfirmPressed} />
          <CustomButton text="Gửi lại mã" onPress={onResendPressed} type="FOR1"/>
          <CustomButton text="Quay trở lại đăng nhập" onPress={() => navigation.navigate('Login')} type="FOR"/>
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
