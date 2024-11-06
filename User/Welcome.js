import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import background from '../theme/background'
import { SIZES} from '../theme'
import { useNavigation } from '@react-navigation/native'
import SignInButton from './SignInButton'
import WelcomeButton from './WelcomeButton'



const Welcome = () => {
    const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
      <ImageBackground source={background.bg} style={styles.background}>
        <Text style={styles.title}>WELCOME</Text>
        <View style={{marginTop:50}}>
            <WelcomeButton />
        </View>
      </ImageBackground>

    </View>
  )
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    logo:{
        width: SIZES.width * .5,
        height: SIZES.height * .2,
    },
    title:{
        fontSize:40,
        color:"white",
        fontWeight:'bold',
        marginTop:130,
    }
})

export default Welcome