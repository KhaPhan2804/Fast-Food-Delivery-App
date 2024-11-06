import { View, Text, Platform, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, bgColor, themeColors } from '../theme';
import HomeScreen from '../screens/HomeScreen';
import icons from '../theme/icons';
import CartScreen from '../screens/CartScreen';
import Login from '../User/Login';
import Welcome from '../User/Welcome';


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false, tabBarStyle:{position:"absolute", bottom:0, right:0, left:0, right:0, elevation:0, height: Platform.OS == "ios" ?  90 : 35, backgroundColor:bgColor}}}>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({focused}) => {
            return (
              <Image source={focused ? icons.home : icons.homeOutline} resizeMode='contain' style={{height:24, width: 24, tintColor: focused ? COLORS.primary : COLORS.black}}/>
            )
        }}}/>

        <Tab.Screen name="Welcome" component={Welcome} options={{tabBarIcon: ({focused}) => {
            return (
              <Image source={focused ? icons.user: icons.userOutline} resizeMode='contain' style={{height:24, width: 24, tintColor: focused ? COLORS.primary : COLORS.black}}/>
            )
        }}}/>
        

    </Tab.Navigator>
  )
}

export default BottomNavigation