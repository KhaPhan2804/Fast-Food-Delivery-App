import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import RestaurantCard from './restaurantCard'
import { Result } from 'postcss'
import { useNavigation } from '@react-navigation/native'

export default function FeaturedRow({title, description, restaurants}) {
  const navigation = useNavigation();
  return (
    <View>
      <View className="flex-row justify-between items-center px-4" style={{backgroundColor:themeColors.bgColor(0.1), borderRadius:15, padding:10}}>
        <View>
            <Text className="font-bold text-lg">{title}</Text>
            <Text className="text-gray-500 text-xs">
                {description}
            </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('All')}>
          <Text style={{color: themeColors.text}}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:15}} className="overflow-visible py-5">
        {
            restaurants.map((restaurant,index) =>{
                return (
                    <RestaurantCard item={restaurant} key={index}/>
                )
            })
        }
      </ScrollView>
    </View>
  )
}