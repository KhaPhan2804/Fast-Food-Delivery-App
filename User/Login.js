import { View, Text, StyleSheet, TextInput, Image, useWindowDimensions, SafeAreaView, ScrollView, Alert} from 'react-native'
import React, { useCallback, useEffect, useReducer, useState } from 'react'
import SafeViewAndroid from '../components/SafeViewAndroid';
import { COLORS, SIZES, themeColors } from '../theme';
import Input from './Input';
import CustomButton from './CustomButton';
import { useNavigation } from '@react-navigation/native';
import {reducer} from '../firebase/reducer/formReducer';
import { validateInput } from '../firebase/action/formAction';
import SignInButton from './SignInButton';
import { login } from '../firebase/action/authAction';
import { useDispatch } from 'react-redux';

const isTestMode = true;

const initialState ={
  inputValues:{
    fullName: isTestMode ? "Phan Anh Kha" : "",
    email: isTestMode ? "example@example.com" : "",
    password: isTestMode ? "**********" : "",
  },
  inputValidities: {
    fullName:false,
    email:false,
    passwor:false,
  },
  formIsValid: false,
}

export default function Login() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [formState, dispatchFormState] = useReducer(reducer, initialState);
  const dispatch = useDispatch();

  const inputChangeHandler = useCallback((inputId, inputValue) =>{
    const result = validateInput(inputId, inputValue);
    dispatchFormState({inputId, validationResult: result, inputValue});
  },[dispatchFormState])

  const onLoginPressed = async() => {
    try{
      setIsLoading(true);

      const action = login(
        formState.inputValues.email,
        formState.inputValues.password,
      );

      await dispatch(action);


      setError(null);

      Alert.alert("Đăng nhập thành công","Thành công");

      navigation.navigate("DrawerHome")  

      setIsLoading(false);
      
    }catch(error){
      console.log(error);
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() =>{
    if(error){
      Alert.alert("", error)
    }
  },[error])
  return (
    <SafeAreaView style={[{flex:1, backgroundColor:COLORS.white}, SafeViewAndroid.AndroidSafeArea]}>
      <ScrollView style={{flex:1,backgroundColor:COLORS.white, padding:16}}>
        <Image source={require("../assets/images/logo.png")} resizeMode='contain' style={{width:100,height:100,marginLeft:110,marginBottom:6}}/>
        <View style={{alignItems:'center'}}>
          <Text className="font-extrabold" style={{fontSize:28, color:"black"}}>Đăng Nhập</Text>
        </View>
        <Text className="font-semibold" style={{fontSize:20, color:"gray"}}>Đăng nhập để nhận nhiều ưu đãi hơn!</Text>
        <View style={{marginVertical:22}}>
          <Input id="email" placeholder="Email" placeholderTextColor={COLORS.black} errorText={formState.inputValidities["email"]} onInputChanged={inputChangeHandler}/>
          <Input id="password" placeholder="Mật khẩu" placeholderTextColor={COLORS.black} errorText={formState.inputValidities["password"]} onInputChanged={inputChangeHandler} secureTextEntry={true}/>
          <CustomButton text="Đăng nhập" onPress={onLoginPressed}/>
          <CustomButton text="Chưa có tài khoản? Tạo tài khoản mới" onPress={() => navigation.navigate('Signup')} type="FOR"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  
});
