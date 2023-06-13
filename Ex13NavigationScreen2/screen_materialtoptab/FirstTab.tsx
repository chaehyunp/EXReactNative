import React from "react";
import { View, Text, StyleSheet } from 'react-native'

import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs'
import { TopTabScreenList } from "../MainMaterialTopTab";
type FirstProps = MaterialTopTabScreenProps<TopTabScreenList, "one">

export default function FirstTab(){
    return (
        <View style={style.root}>
            <Text style={style.text}>FIRST TAB</Text>
        </View>
    )
}
const style= StyleSheet.create({
    root:{flex:1, justifyContent:'center', alignItems:'center'},
    text:{padding:8, color:'black'}
})