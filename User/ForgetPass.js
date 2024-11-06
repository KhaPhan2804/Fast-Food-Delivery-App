import { View, Text, StyleSheet, Image,SafeAreaView, ScrollView, Alert} from 'react-native'
import React, { useCallback, useReducer} from 'react'
import SafeViewAndroid from '../components/SafeViewAndroid';
import { COLORS} from '../theme';
import Input from './Input';
import CustomButton from './CustomButton';
import { useNavigation } from '@react-navigation/native';
import {reducer} from '../firebase/reducer/formReducer';
import { validateInput } from '../firebase/action/formAction';
import { getFirebaseApp } from '../firebase/firebaseHelper';
import { getAuth, sendPasswordResetEmail } from '@firebase/auth';
import { useState } from 'react';



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

export default function ForgetPass() {
  const navigation = useNavigation();
  const [formState, dispatchFormState] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const inputChangeHandler = useCallback((inputId, inputValue) =>{
    const result = validateInput(inputId, inputValue);
    dispatchFormState({inputId, validationResult: result, inputValue});
  },[dispatchFormState]);

  const changePassword = async () => {
    try{
      setIsLoading(true);
      const app = getFirebaseApp();
      const auth = getAuth(app);

      sendPasswordResetEmail(auth, formState.inputValues.email);

      setError(null);

      Alert.alert("Password reset email sent!")

      setIsLoading(false);

    }catch(error){
      console.log(error);
      setIsLoading(false);
    }
    
  };

  return (
    <SafeAreaView style={[{flex:1, backgroundColor:COLORS.white}, SafeViewAndroid.AndroidSafeArea]}>
      <ScrollView style={{flex:1,backgroundColor:COLORS.white, padding:16}}>
          <Image source={require("../assets/images/logo.png")} resizeMode='contain' style={{width:100,height:100,marginLeft:110,marginBottom:6}}/>
          <View style={{alignItems:'center'}}>
            <Text className="font-extrabold" style={{fontSize:28, color:"black"}}>Đổi mật khẩu</Text>
          </View>
          <View style={{marginVertical:22}}>
            <Input id="email" placeholder="Email" placeholderTextColor={COLORS.black} errorText={formState.inputValidities["email"]} onInputChanged={inputChangeHandler}/>
            <CustomButton text="Tiếp tục" onPress={changePassword}/>
            <CustomButton text="Quay trở lại đăng nhập " onPress={() => navigation.navigate('Login')} type="FOR"/>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

