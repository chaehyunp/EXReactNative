// AsyncStorage Library - Android의 SharedPreferences 와 비슷한 기능

import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Main():JSX.Element{

    //TextInput 요소의 글씨가 변경될때마다 저장하는 state 변수
    const [inputText, setInputText] = useState<string>('')
    const [data, setData] = useState<string>('Result')

    const changeText= (value:string)=>setInputText(value)

    //save data to local storage method
    const saveData= ()=>{
        //TextInput 요소에 써있는 글씨를 AsyncStorage에 저장[ key-value ]
        //TextInput 요소의 글씨가 변경될때마다 저장하는 state 변수 : inputText
        //비동기 작업이기에 promiss 문법인 .then() 메소드 사용
        AsyncStorage.setItem('Data', inputText).then(()=>Alert.alert('Saved Data'))
    }

    //load data from local storage method
    const loadData= async ()=>{
        //비동기로 AsyncStotage의 'Data'라는 키의 value 값을 읽어오기
        //async - await 문법으로 비동기 작업을 동기작업처럼 처리
        let value = await AsyncStorage.getItem('Data')
        if(value != null) setData(value)
    }

    return (
        <View style={style.root}>
            {/* 저장할 데이터를 입력할 컴포넌트 */}
            <TextInput 
                style={style.textInput}
                onChangeText={changeText}
                value={inputText}
                placeholder='Enter text here'></TextInput>

            <Button title='save data' onPress={saveData}></Button>
            <View style={{marginTop:16}}></View>
            <Button title='load data' color='orange' onPress={loadData}></Button>
            <Text>{data}</Text>

        </View>
    )
}

const style= StyleSheet.create({
    root:{ flex:1, padding:16 },
    textInput:{ 
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderRadius:8,
        borderColor:'black',
        marginBottom:16,
     }
})