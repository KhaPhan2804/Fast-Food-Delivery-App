import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import SafeViewAndroid from '../components/SafeViewAndroid'
import { getAllFeaturedDishes } from '../api';
import { urlFor } from '../sanity';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";
import { useSelector } from 'react-redux';
import { selectCartItemsById } from '../slices/cartSlice';
import { useRoute } from '@react-navigation/native';
import TurnBack from '../components/turnBack';

export default function AllDishScreen() {
    const [allDishes, setAllDish] = useState([]);
    useEffect(()=>{
        getAllFeaturedDishes().then(data=>{
            setAllDish(data);
        })
    },[])
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <TurnBack />
        <ScrollView showsHorizontalScrollIndicator={false} className="overflow-visible" contentContainerStyle={{paddingHorizontal:0}}>
                {
                    allDishes.map((dish,index)=>{
                        return (
                            <View key={index} className="flex-row p-3 rounded-3xl shadow-2xl mb-3 mx-2" style={{backgroundColor:themeColors.bgColor(0.2)}}>
                                <Image className="rounded-3xl" style={{height:100,width:100}} source={{uri:urlFor(dish.image).url()}}/>
                                <View className="flex flex-1 space-y-3">
                                    <View className="pl-3">
                                        <Text className="text-xl">{dish.name}</Text>
                                        <Text className="text-gray-700">{dish.description}</Text>
                                        <Text className="text-gray-700 text-lg font-bold">{dish.price}$</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
        </ScrollView>
    </SafeAreaView>
  )
}