import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import RestaurantScreen from '../screens/RestaurantScreen';
import CartScreen from '../screens/CartScreen';
import OrderPrepairing from '../screens/OrderPrepairing';
import DeliveryScreen from '../screens/DeliveryScreen';
import DrawerNavigation from './DrawerNavigation';
import Signup from '../User/Signup';
import Login from '../User/Login';
import ForgetPass from '../User/ForgetPass';
import ConfirmEmail from '../User/ConfirmEmail';
import ConfirmPass from '../User/ConfirmPass';
import Welcome from '../User/Welcome';
import EachRowScreen from '../screens/EachRowScreen';
import AllDishScreen from '../screens/AllDishScreen';




const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Main'>
                <Stack.Screen name="Main" component={DrawerNavigation}/>
                <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                <Stack.Screen name="Row" component={EachRowScreen} />
                <Stack.Screen name="All" component={AllDishScreen} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Forget" component={ForgetPass} />
                <Stack.Screen name="Reset" component={ConfirmEmail} />
                <Stack.Screen name="Confirm" component={ConfirmPass} />
                <Stack.Screen name="Cart" options={{presentation:'modal'}} component={CartScreen} />
                <Stack.Screen name="Order" options={{presentation:'fullScreenModal'}} component={OrderPrepairing} />
                <Stack.Screen name="Delivery" options={{presentation:'fullScreenModal'}} component={DeliveryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation