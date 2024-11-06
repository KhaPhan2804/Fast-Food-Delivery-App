import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native';
import { setDishes } from '../slices/rowSlice';
import { urlFor } from '../sanity';
import SafeViewAndroid from '../components/SafeViewAndroid';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";

export default function EachRowScreen() {
    const navigation = useNavigation();
    const {params} = useRoute();
    let item = params;
    const dispatch = useDispatch();
    useEffect(()=>{
        if(item && item._id){
            dispatch(setDishes({...item}))
        }
    },[])
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View className="items-center p-3 rounded-3xl mb-3 mx-2" style={{backgroundColor:themeColors.bgColor(0.7)}}>
        <Image className="rounded-3xl" style={{height:400,width:320}} source={{uri: urlFor(item.image).url()}}/>
      </View>
      <View className="items-center p-3 rounded-2xl mb-4 mx-2" style={{backgroundColor:themeColors.bgColor(0.3)}}>
        <Text className="text-2xl font-bold">Chi tiết món ăn</Text>
        <Text className="font-bold text-lg">{item.name}</Text>
        <Text className="font-bold" style={{fontSize:15}}>Giá bán: {item.price}$</Text>
        <View className="flex-row items-center space-x-1">
          <Text className="font-bold" style={{fontSize:15}}>Đánh giá:</Text>
          <Text className="font-bold" style={{fontSize:15}}>{item.rating}</Text>
          <Image source={require('../assets/images/star.png')} className="h-4 w-4"/>
        </View>
      </View>
      <View className="absolute bottom-5 w-full z-50">
        <TouchableOpacity onPress={() => navigation.goBack()} style={{backgroundColor:themeColors.bgColor(3)}} className="flex-row justify-between items-center mx-2 rounded-full p-5 py-2 shadow-lg">
          <Icon.ArrowLeft strokeWidth={3} stroke='black'/>
          <Text className="flex-1 text-center font-extrabold text-black text-lg">
              Quay lại
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    
  )
}