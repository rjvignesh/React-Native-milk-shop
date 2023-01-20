import React from "react";
import {
    Image,
    Platform,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import Svg , { Path } from "react-native-svg";
import { Home, Rewards } from "../screens"
import { COLORS, SIZES, icons } from "../constants"
import { Colors } from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator()

const Tabs = () => {
    const CustomBottomTab = (props)=>{
        // console.log(props)
        return (
            <View>
                <View 
                    style={{
                        position:"absolute",
                        bottom:0,
                        left:0,
                        right:0,
                        height:30,
                        backgroundColor:COLORS.gray3
                    }}
                />
                <BottomTabBar
                    {...props.props}
                />
            </View>
        )
    }

    const CustomTabBarButton = ( {containerStyle,isFloat,children,onPress} )=>{
        if (isFloat){
            return (
                    <View style={{flex:1,backgroundColor:"transparent",height:60, alignItems:"center",justifyContent:"center"}}>
                        <Svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={90}
                        height={61}
                        viewBox="0 0 90 61"
                        >
                            <Path
                                d="M0 0a38.742 38.742 0 0113 7c5.313 4.4 6.7 8.593 12 13 5.993 4.98 12.987 8 20 8s14.007-3.02 20-8c5.3-4.408 6.687-8.6 12-13a38.742 38.742 0 0113-7v61H0V0z"
                                fill={COLORS.gray}
                                fillRule="evenodd"
                            />
                        </Svg>
                        <TouchableOpacity 
                        onPress={onPress}
                        style={{position:"absolute",top:-25,
                        backgroundColor:COLORS.primary,borderRadius:25,height:50,width:50}}>
                            {children}
                      
                        </TouchableOpacity>
                    </View>
                )
        }else{
            return (
            <TouchableWithoutFeedback 
            onPress={onPress}
            style={{flex:1,
            justifyContent:"center",alignItems:"center"}}>
                <View style={{height:60,flex:1,backgroundColor:COLORS.gray,...containerStyle }}>
                    {children}
                </View>
            </TouchableWithoutFeedback> )
        }
    }

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarShowLabel:false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: "transparent",
                    borderTopColor: "transparent",
                    height: (Platform.OS == 'android') ? 60 : 80
                },
            }}
            tabBar = {(props) => (
                <CustomBottomTab
                    props={props}
                />          
            )}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.home}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? COLORS.primary : COLORS.black
                            }}
                        />
                    ),
                    tabBarButton: (props)=> (
                        <CustomTabBarButton
                            containerStyle={{
                                borderTopLeftRadius:20
                            }}
                            isFloat={false}
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Rewards"
                component={Rewards}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.bubbleTea}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? COLORS.primary : COLORS.black
                            }}
                        />
                    ),
                    tabBarButton: (props)=>(
                        <CustomTabBarButton
                            containerStyle={{borderTopRightRadius:5}}
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="AddOrder"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.add}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: COLORS.white
                            }}
                        />
                    ),
                    tabBarButton: (props)=>(
                        <CustomTabBarButton
                            isFloat={true}
                            {...props}
                        />
                    )         
                }}
            />
            <Tab.Screen
                name="Favourite"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.heart}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? COLORS.primary : COLORS.black
                            }}
                        />
                    ),
                    tabBarButton: (props)=>(
                        <CustomTabBarButton
                            containerStyle={{borderTopLeftRadius:5}}
                            {...props}
                        />
                    )  
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.profile}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? COLORS.primary : COLORS.black
                            }}
                        />
                    ),
                    tabBarButton: (props)=>(
                        <CustomTabBarButton
                            containerStyle={{
                                borderTopRightRadius:20
                            }}
                            {...props}
                        />
                    )     
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;