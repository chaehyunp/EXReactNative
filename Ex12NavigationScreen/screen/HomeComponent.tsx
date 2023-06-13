import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

//StackNavigator에서 사용할 props의 타입을 import
import {StackScreenProps} from '@react-navigation/stack'

//Main.tsx에서 만든 StackNavigator의 스크린 리스트 타입이 필요함
import { StackScreenList } from '../Main'

//StackNavigator에서 사용할 props type을 지정 - 제네릭으로 스크린의 리스트 타입 지정, 현재 스크린의 이름 지정
type HomeProps=StackScreenProps<StackScreenList,'Home'>

//StackNavigator의 Screen으로 등록된 컴포넌트는 props를 받은
export default function HomeComponent(props:HomeProps):JSX.Element{
    return (
        <View style={style.root}>
            <Text style={style.text}>HOME</Text>

            {/* SecondComponent 로 이동하기 위한 버튼 */}
            <Button title='go Second' onPress={()=>props.navigation.navigate('Second')}></Button>

            {/* Second 화면으로 이동하면서 Home 화면 종료 - finish() */}
            <Button title='go Second and Finish' color='green' onPress={()=>props.navigation.replace('Second')}></Button>

            {/* Second 화면으로 이동하면서 데이터 전달 - android Intent Extra */}
            <Button title='go Second with Data' color='black' onPress={()=>props.navigation.navigate('Second',{name:'Sam', age:20})}></Button>

        </View>
    )
}

const style= StyleSheet.create({
    root: {flex:1, padding:16},
    text: {padding:8, color:'black'},
})