import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer'
import { COLORS, themeColors } from '../theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import BottomNavigation from './BottomNavigation';
import CartScreen from '../screens/CartScreen';
import Login from '../User/Login';
import { SafeAreaView } from 'react-native-safe-area-context';
import Welcome from '../User/Welcome';
import { getFirebaseApp } from '../firebase/firebaseHelper';
import { getAuth } from '@firebase/auth';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';




const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
      <Drawer.Navigator 
        drawerContent={(props)=>{
          return(
            <SafeAreaView>
              <View style={{height:200,width:"100%", justifyContent:"center", alignItems:"center",backgroundColor:themeColors.bgColor(0.3)}}>
                <Image source={require("../assets/images/avatar.png")} style={{width:100,height:100,borderRadius:999,marginBottom:12}}/>
                <Text style={{fontSize:18,fontWeight:"bold",color:COLORS.black, marginBottom:16}}>Phan Anh Kha</Text>
              </View>
              <DrawerItemList {...props}/>
            </SafeAreaView>
          )
        }}
      screenOptions={{drawerStyle:{backgroundColor: "white", width:250, borderRadius:10}, headerStyle:{backgroundColor:themeColors.bgColor(3)},headerShown:false,headerTintColor:COLORS.black,drawerLabelStyle:{color:COLORS.black, fontSize:14, marginLeft:-10}}}>
        <Drawer.Screen name="DrawerHome" options={{drawerLabel:"Trang chủ", title:"Trang chủ", headerShadowVisible:false, drawerIcon:()=>(
          <Ionicons name="home-outline" size={24} color={COLORS.black}/>
        )}} component={HomeScreen}/>
        <Drawer.Screen name="ShoppingCart" options={{drawerLabel:"Giỏ hàng", title:"Giỏ hàng", headerShadowVisible:false, drawerIcon:()=>(
          <Ionicons name="cart-outline" size={24} color={COLORS.black}/>
        )}} component={CartScreen}/>
        <Drawer.Screen name="Welcome" options={{drawerLabel:"Đăng nhập", title:"Đăng nhập", headerShadowVisible:false, drawerIcon:()=>(
          <Ionicons name="person-outline" size={24} color={COLORS.black}/>
        )}} component={Welcome}/>
        <Drawer.Screen name="Setting" options={{drawerLabel:"Cài đặt", title:"Cài đặt", headerShadowVisible:false, drawerIcon:()=>(
          <Ionicons name="settings-outline" size={24} color={COLORS.black}/>
        )}} component={SettingScreen}/>
        
        

      </Drawer.Navigator>
    )
  
}

export default DrawerNavigation