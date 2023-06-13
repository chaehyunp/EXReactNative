import React from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TopTab= createMaterialTopTabNavigator()

//탭에 의해 전환될 화면 import
import FirstTab from "./screen_materialtoptab/FirstTab";
import SecondTab from "./screen_materialtoptab/SecondTab";
import ThirdTab from "./screen_materialtoptab/ThirdTab";

export type TopTabScreenList={
    one:undefined,
    two:undefined,
    three:undefined
}

export default function MainMaterialTopTab():JSX.Element{
    return (
        <NavigationContainer>
            <TopTab.Navigator
                initialRouteName="two"
                tabBarPosition="bottom"
                screenOptions={{
                    swipeEnabled:false,
                    tabBarActiveTintColor:'blue',
                    tabBarIndicatorStyle:{
                        backgroundColor:'blue',
                        height:8
                    },
                    tabBarShowIcon:true
                }}>
                <TopTab.Screen name="one" component={FirstTab}></TopTab.Screen>
                <TopTab.Screen 
                    name='two'
                    component={SecondTab}
                    options={{
                        tabBarLabel:'두번째',
                        tabBarIcon:()=><Image source={require('./icon/RN_logo.png')} style={{width:24, height:24}}></Image>,
                        tabBarShowLabel:false,
                    }}></TopTab.Screen>
                <TopTab.Screen name="three" component={ThirdTab}></TopTab.Screen>
            </TopTab.Navigator>        
        </NavigationContainer>
    )
}