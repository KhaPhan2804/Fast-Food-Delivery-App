import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton';

const SignInButton = () => {
    const onLoginFacebook = () => {
        console.warn("sign in");
      };
      const onLoginGoogle = () => {
        console.warn("sign in");
      };
  return (
    <>
        <CustomButton text="Đăng nhập với Facebook" onPress={onLoginFacebook} bgColor="#3275D8" fgColor="white"/>
        <CustomButton text="Đăng nhập với Google" onPress={onLoginGoogle} bgColor="#DF4242" fgColor="white"/>
    </>
  )
}

export default SignInButton