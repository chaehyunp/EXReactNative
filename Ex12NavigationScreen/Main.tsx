//### React Native는 기본적으로 Screen 전환 기능을 제공하지 않으므로 Library를 사용해야함
//package.json 파일안에 dependencies 블럭이 연결된 라이브러리 목록임
//가장 보편적인 화면전환 라이브러리 : react navigation

//1. 기본 필수 라이브러리 추가 
//@react-navigation/native
//1.1 추가 라이브러리
//react-native-screens, react-native-safe-area-context

//Main 컴포넌트 만들기
import React from 'react'
import { Button,Image } from 'react-native'

//1) 가장 먼저 Navigator들을 감싸는 최상위 Container 컴포넌트가 필요
import { NavigationContainer } from '@react-navigation/native'

//2) 화면전환 방법을 결정하는 Navigator의 종류 여러 개
//Stack, Drawer, BottomTab, MaterialBottomTab, MaterialTopTab
//각 네비게이터를 사용할때마다 전용라이브러리를 추가로 설치

//이 중에서 가장 기본인 StackNavigator 사용해보기
import { createStackNavigator } from '@react-navigation/stack'
import HomeComponent from './screen/HomeComponent'
import SecondComponent from './screen/SecondComponent'

//typescript에서는 스크린리스트 타입을 지정해줄것을 권장
export type StackScreenList={
    Home:undefined, //화면명(route명):전환할때 전달할 파라미터 자료형
    Second:undefined | {name:string, age:number} //| 연산자로 여러 개의 타입 지정가능
}

const Stack = createStackNavigator<StackScreenList>()

export default function Main(){
    return(
        <NavigationContainer>
            {/* initialRouteName='Second' Second 부터 시작함 */}
            <Stack.Navigator 
                screenOptions={{
                    headerStyle:{backgroundColor: 'green'},
                    headerTintColor:'white',
                    headerTitleAlign:'center'
                }}> 
                <Stack.Screen 
                options={{
                    title:'그만하고싶다', 
                    headerTintColor:'white',
                    headerRight: ()=>{return <Button title='menu'></Button>},
                    headerLeft: ()=><Image source={require('./image/zzang_grapejuice.jpeg')} style={{width:65, height:50}}></Image>,
                    headerTitle: ()=><Image source={require('./image/zzang_grapejuice.jpeg')} style={{width:65, height:50, marginLeft:16}}></Image>,
                    headerShown:true
                }} 
                    name='Home' component={HomeComponent}></Stack.Screen>
                <Stack.Screen name='Second' component={SecondComponent}></Stack.Screen>
            </Stack.Navigator>

        </NavigationContainer>
    )
}

