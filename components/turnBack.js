import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function TurnBack() {
    const navigation = useNavigation();
  return (
    <View className="absolute bottom-5 w-full z-50">
        <TouchableOpacity onPress={() => navigation.navigate('DrawerHome')} style={{backgroundColor:themeColors.bgColor(3)}} className="flex-row justify-between items-center mx-2 rounded-full p-5 py-2 shadow-lg">
          <Icon.ArrowLeft strokeWidth={3} stroke='black'/>
          <Text className="flex-1 text-center font-extrabold text-white text-lg">
              Trở lại chọn món
          </Text>
        </TouchableOpacity>
    </View>
  )
}