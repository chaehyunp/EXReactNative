//TypeScript : JavaScript + static typed

import React, {Component} from "react";
import { View, Text, Button, StyleSheet, Alert, Image } from "react-native";

class MainComponent extends Component {
    render(): JSX.Element {
        return (
            <View style= {style.root}>
                <Button title= "button" onPress= {clickBtnFunction3}></Button>
                {/* onPress는 눌렀을때의 이벤트, 함수()를 쓰면 호출이기때문에 시작하자마자 함수가 호출됨, ()가 없어야 눌렀을때 해당 함수의 영역이 실행됨 */}
                {/* 버튼 콜백용 함수를 별도의 위치에 작성하지 않고 곧바로 지정 가능 */}
                <Button title= "버튼" color= 'orange' onPress= { ()=> Alert.alert('버튼 클릭') }></Button>
                {/* 버튼 콜백용 메소드는 전역보다는 이 컴포넌트 클래스의 멤버로 존재하는 것을 권장 */}
                {/* JS 클래스 안에서는 멤버의 접근은 반드시 this 키워드 필요 */}
                <Button title= "press me" color= 'green' onPress= {this.clickBtn}></Button>

                {/* 버튼 클릭시에 Text 컴포넌트의 글씨변경 */}
                <View style= {{margin:8}}>
                    <Button title= "change Text" onPress= {this.changeText2}></Button>
                    {/* Text 컴포넌트의 글씨가 변경되고자 한다면 글씨가 별도의 변수로 저장되어있어야함 - 멤버변수로 만들어보기 */}
                    <Text style= {style.text}>{this.message}</Text>
                </View>

                <View style= {{margin:8}}>
                    <Button title= "change Text" color= 'black' onPress= {this.changeMsg}></Button>
                    <Text style= {style.text}>{this.state.msg}</Text>
                </View>

                <Button title="change Image" color='red' onPress={this.changeImage}></Button>
                <Image source={this.state.img} style={style.img}></Image>
            </View>
        )
    }

    

    changeImage= ()=>{
        this.setState({img: require("./image/zzang_coffee_03.jpg")})
    }

    //멤버 변수(property) - Text 컴포넌트에 보여질 변수
    message: string= "Hello React Native"

    //화면 갱신에 영향을 주는 멤버변수(속성)
    state: React.ComponentState= {
        msg: "Hello RN",
        img: require("./image/zzang_coffee_01.jpg") //require는 상수만 가지고 있을 수 있기때문에 경로만 바꾸면 안되고 require 전체를 바꿔야함

    }


    //멤버 메소드 - 버튼 콜백 함수
    clickBtn(){ //중괄호 내에서는 function이나 변수 키워드 사용불가
        Alert.alert('버튼 클릭')
    }


    changeText2= ()=> {
        this.message = "Nice to meet you"
        //변수 값이 변경되어도 화면 갱신은 자동으로 이루어지지 않음
        //억지로 화면을 다시 그려내는 [render()를 재호출]하는 기능
        this.forceUpdate() //강제로 화면 갱신, 화면 전체를 다시 만들기 때문에 권장하지 않음

        //화면 갱신에 영향을 주는 특별한 변수 - state
    }

    changeText(){
        //Text 컴포넌트가 보여주는 값을 가진 message 변수의 값 변경
        this.message= "Nice to meet you"
        //이 함수 안에서 this.message는 changeText()라는 함수 안의 멤버변수로 this.message를 해독
        //MainComponent의 멤버 message로 인식하지 못함
        //이를 해결하기 위해 별도의 객체로 인식되지 않는 함수 표기법, '화살표 함수'를 콜백메소드로 사용해야함
        //변수명 : state, 모든 Component가 기본적으로 가지고 있는 변수명
    }

    changeMsg= ()=> {
        // 화면에 영향을 미치는 state 변수의 값을 변경
        // this.state.msg= "NICE" //이렇게 변경하면 화면갱신 불가
        // 자동 화면 갱신이 되려면 반드시 setState() 메소드로 변경해야함
        this.setState({msg: "Nice to meet you"}) //this는 Component 클래스
    }

}

//전역의 위치
//1) 선언적 함수 (메소드는 객체 안에 있는것, 이 함수는 메소드가 아님)
function clickBtnFunction(){
    //경고창 보이기
    Alert.alert('Pressed Button')
}

//2) 익명 함수
let clickBtnFunction2= function(){
    Alert.alert('Pressed Button2')
}

//3) 화살표 함수
let clickBtnFunction3= ()=> Alert.alert('Pressed Button3')


const style= StyleSheet.create({
    root: {
        flex: 1,
        padding: 16
    },

    text: {
        color: 'black',
        padding: 8
    },
    img: {
        flex: 1,
        width: '100%'
    }
})

export default MainComponent