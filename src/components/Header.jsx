import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const Header = ()=>{
    return (
        <SafeAreaView style={{width:"100%",height:150,backgroundColor:COLORS.purple,
        flexDirection:"row"}}>
            <View style={{flex:1,paddingLeft:SIZES.padding}}>
                <Text style={{...FONTS.h2,color:COLORS.white}}>Wendy,</Text>
                <Text style={{...FONTS.h2,color:COLORS.white}}>Welcome Back</Text>
            </View>
            <View style={{flex:1,justifyContent:"flex-end",flexDirection:"row",paddingRight:10}}>
                <TouchableOpacity 
                style={{height:40,width:80,backgroundColor:COLORS.lightPurple,flexDirection:"row",
                justifyContent:"center",borderRadius:20,alignItems:"center"}}>
                    <View style={{flex:1,height:40,width:40,justifyContent:"center",alignItems:"center"}}>
                        <Image
                        source={icons.sunny}
                        resizeMode="cover"
                        style={{tintColor:"white",height:20,width:20}}/>
                    </View>
                    <View style={{flex:1,height:40,width:40,justifyContent:"center",
                    alignItems:"center",...styles.selectedNightMode}}>
                        <Image
                        source={icons.night}
                        resizeMode="cover"
                        style={{tintColor:"white",height:20,width:20}}/>
                    </View>                    
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    selectedNightMode:{
        borderRadius:20,
        backgroundColor:COLORS.black
    },
    selectedLightMode:{
        borderRadius:20,
        backgroundColor:COLORS.black
    },
})
export default Header