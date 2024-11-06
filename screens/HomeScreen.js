import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import SafeViewAndroid from '../components/SafeViewAndroid'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import Categories from '../components/categories';
import { featured } from '../constants';
import FeaturedRow from '../components/featuredRow';
import { getFeaturedRestanrants } from '../api';


export default function HomeScreen() {
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);
  useEffect(()=>{
    getFeaturedRestanrants().then(data=>{
      setFeaturedRestaurants(data);
    })
  },[])

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea} className="bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25"  width="25" stroke="gray"/>
          <TextInput placeholder='Cửa hàng' className="ml-2 flex-1"/>
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray"/>
            <Text className="text-gray-600">Nha Trang</Text>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:20}}>
        <Categories />
        <View className="mt-5"> 
          {
            featuredRestaurants.map((item,index) => {
              return (
                <FeaturedRow key={index} title={item.name} restaurants={item.restaurants} description={item.description} />
              )
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}