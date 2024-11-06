import { View, Text, Alert , ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SafeViewAndroid from '../components/SafeViewAndroid'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'
import { COLORS, themeColors } from '../theme'

export default function SettingScreen() {

    const navigation = useNavigation();

    const navigateToEditProfile = () =>{
        Alert.alert("Thông báo", "Hiện chưa có chức năng chưa có vui lòng đợi bản cập nhật sau")
    };

    const navigateToPrivacy = () =>{
        Alert.alert("Thông báo", "Hiện chưa có chức năng chưa có vui lòng đợi bản cập nhật sau")
    };

    const navigateToSecurity = () =>{
        Alert.alert("Thông báo", "Hiện chưa có chức năng chưa có vui lòng đợi bản cập nhật sau")
    };

    const navigateToNotification = () =>{
        Alert.alert("Thông báo", "Chưa có thông báo nào")
    };

    const navigateToSubcription = () =>{
        Alert.alert("Thông báo", "Hiện chưa có chức năng chưa có vui lòng đợi bản cập nhật sau")
    };
    const navigateToHelp = () =>{
        Alert.alert("Thông báo", "Hiện chưa có chức năng chưa có  vui lòng đợi bản cập nhật sau")
    };
    const navigateToTerm = () =>{
        Alert.alert("Thông báo", "Hiện chưa có chức năng chưa có  vui lòng đợi bản cập nhật sau")
    };
    const navigateToError = () =>{
        Alert.alert("Thông báo", "Hiện chưa có chức năng chưa có  vui lòng đợi bản cập nhật sau")
    };
    const navigateToLogOut = () =>{
        Alert.alert("Thông báo", "Hiện chưa có chức năng chưa có vui lòng đợi bản cập nhật sau")
    };
    

    const accountItems = [
        {icon: "person-outline", text:"Chỉnh sửa tài khoản", action: navigateToEditProfile},
        {icon: "security", text:"Bảo mật", action: navigateToSecurity},
        {icon: "notifications", text:"Thông báo", action: navigateToNotification},
        {icon: "lock-outline", text:"Quyền riêng tư", action: navigateToPrivacy},
    ];

    const supportItems = [
        {icon: "credit-card", text:"Phương thức thanh toán", action:navigateToSubcription},
        {icon: "help-outline", text:"Trợ giúp & Hỗ trợ", action:navigateToHelp},
        {icon: "info-outline", text:"Chính sách", action:navigateToTerm},
    ];

    const actionItems = [
        {icon: "outlined-flag", text:"Báo cáo lỗi", action:navigateToError},
        {icon: "logout", text:"Đăng xuất", action:navigateToLogOut},
    ];
 
    const renderSetting = ({ icon, text, action }) =>(
        <TouchableOpacity onPress={action} style={{flexDirection:"row", alignItems:"center", paddingVertical:10, paddingLeft:12}}>
            <MaterialIcons name={icon} size={24} color="black" />
            <Text style={{marginLeft:36, fontWeight:600, fontSize:16}} className="font-bold">
                {text}
            </Text>
        </TouchableOpacity>
    )

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <View style={{marginHorizontal:12, flexDirection:"row"}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <MaterialIcons name="keyboard-arrow-left" size={24} color={COLORS.black}/>
            </TouchableOpacity>
            <Text className="text-center font-bold text-xl" style={{paddingLeft:110}}>Cài đặt</Text>
        </View>
        <ScrollView style={{marginHorizontal:10}}>
            <View style={{marginBottom:12, paddingLeft:0}}>
                <Text className="font-bold text-sm" style={{fontSize:15,paddingBottom:12}}>Tài khoản</Text>
                <View style={{borderRadius:20, backgroundColor: themeColors.bgColor(0.3)}}>
                    {
                        accountItems.map((item, index) => (
                            <React.Fragment key={index}>
                                {renderSetting(item)}
                            </React.Fragment>
                        ))
                    }
                </View>
            </View>
            <View style={{marginBottom:12, paddingLeft:0}}>
                <Text className="font-bold text-sm" style={{fontSize:15,paddingBottom:12}}>Trợ giúp</Text>
                <View style={{borderRadius:12, backgroundColor: themeColors.bgColor(0.3)}}>
                    {
                        supportItems.map((item, index) => (
                            <React.Fragment key={index}>
                                {renderSetting(item)}
                            </React.Fragment>
                        ))
                    }
                </View>
            </View>
            <View style={{marginBottom:12, paddingLeft:0}}>
                <Text className="font-bold text-sm" style={{fontSize:15,paddingBottom:12}}>Hành động</Text>
                <View style={{borderRadius:12, backgroundColor: themeColors.bgColor(0.3)}}>
                    {
                        actionItems.map((item, index) => (
                            <React.Fragment key={index}>
                                {renderSetting(item)}
                            </React.Fragment>
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}