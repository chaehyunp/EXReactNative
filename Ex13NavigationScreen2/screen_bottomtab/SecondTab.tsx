import React from "react";
import {Image} from 'react-native'
import {View, Text, StyleSheet} from "react-native";

//Navigator의 screen은 props 객체를 전달받음 - 그 타입 지정
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { BottomTabScreenList } from "../Main";
type SecondProps = BottomTabScreenProps<BottomTabScreenList,"Second">

export default function SecondTab(props:SecondProps){ //props 객체 : { navigation,route }

    //개별 컴포넌트 tsx에서 탭바 옵션 설정
    props.navigation.setOptions({
        tabBarLabel:'두번째',
        tabBarIcon: ()=><Image source={require('../icon/RN_logo.png')} style={{width:24, height:24}}></Image>,
        tabBarBadge:'2',
        headerShown:false
    })

    return (
        <View style={style.root}>
            <Text style={style.text}>SECOND TAB</Text>
        </View>
    )
}

const style= StyleSheet.create({
    root:{flex:1, justifyContent:'center', alignItems:'center'},
    text:{padding:8, color:'black'}
})