//리액트 라이브러리 사용
import React, { Component } from 'react'
import {Text, View, Button, StyleSheet, Image} from 'react-native'

// 리액트 네이티브에서는 Componenet를 상속받은 클래스들이 화면에 보여질 수 있음
class MyApp extends Component{
    // 리액트의 Component 클래스가 화면에 보여줄 컴포넌트를 그려내는 작업 메소드
    // 이 메소드 안에서 JSX ( JS + XML )언어로 컴포넌트를 설계하고 이를 리턴해줌
    render(){

        let name= 'Sam' //지역변수
        let title= 'click me'

        return (
            // <Text>Hello World</Text>
            // <Text>Nice to meet you</Text>
            // ERROR - 컴포넌트는 1의 컴포넌트만 리턴할 수 있음
            // 뷰그룹 사용
            // JSX는 xml 안에서도 JS의 변수, 함수 사용이 가능
            // xml 안에서 {}는 JS 문법을 쓰는 영역
            // 스타일 속성 적용 - 객체로 적용
            <View style= { style.root }>
                <Text style= {style.title}>Hello {name} sir!</Text>
                <Text style= {style.text}>Nice to meet you</Text>
                {/* Button 컴포넌트는 style 속성이 존재하지않음 */}
                {/* <Button style= {btnaStyle} title= {title}></Button> */}
                <View style= {{marginTop: 16}}>
                    <Button title= {title}></Button>
                </View>
                <Image style= {style.img} source= {require('./image/zzang_weiredface.png')}></Image>
            </View>
            
        )
    }
}

// 스타일 작업 객체들을 하나로 묶어서 관리하는 StyleSheet 객체
const style= StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'green',
        padding: 16
    },
    title: {
        color: 'red',
        fontSize: 20, //기본 단위 dp
        fontWeight: 'bold',
        margin: 16
    },
    text: {
        margin:8,
        color:'black'
    },
    img: {
        flex: 1, //남은 공간 전부
        marginTop: 8,
        width: null, //null을 주면(width를 주지않으면-기본은 wrap) 부모를 넘어서지 않는 만큼으로
        resizeMode: 'contain'
    }
})

// 스타일 객체 (리터럴객체로) - 스타일 속성값은 CSS를 기반으로 제작
const textStyle= {
    color: 'red',
    fontSize: 20, //기본 단위 dp
    fontWeight: 'bold',
    margin: 16
}

// RN은 기본적으로 display:flex가 적용되어있는 상태
// 기본 배치 방향 [ flex-direction ]이 column[ 세로 ] 방향임
// 기본적으로 컴폰ㄴ트의 height은 wrap임
const rootStyle= {
    padding: 16,
    backgroundColor: 'green',
    // height: '100%'
    // flex-grow [ android layout-weight과 비슷한 속성 ]
    // RN에서는 flex-grow속성을 flex로만 씀
    flex: 1,
    // flexDirection: 'row'
}

// 중간에 있는 글씨 스타일
const plainTextStyle= {
    margin:8,
    color:'black'
}

// 버튼의 스타일 객체는 무의미함, 버튼 컴포넌트는 스타일링 불가능
const btnaStyle= {
    margin:80
}


//MyApp 클래스를 다른 .js에서 사용할 수 있도록 export
export default MyApp