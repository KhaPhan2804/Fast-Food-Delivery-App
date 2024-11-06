import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'
import { useNavigation } from '@react-navigation/native'

const WelcomeButton = () => {
    const navigation = useNavigation();
  return (
    <>
    <CustomButton text="Nhấn vào đây để tiếp tục" onPress={()=>navigation.navigate('Login')} bgColor="#FAE9EA" fgColor="black"/>
    </>
  )
}

export default WelcomeButton