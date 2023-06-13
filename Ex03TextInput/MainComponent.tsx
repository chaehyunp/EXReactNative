import React, {Component} from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default class MainComponent extends Component {

    //화면 갱신에 영향을 주는 특별한 멤버변수
    state: React.ComponentState= {
        message: "",
        msg: "Hello",
        text: "RESULT"
    }     

    //화면에 영향이 없는 일반 변수
    inputValue= ""

    render(): JSX.Element {
        return (
            <View style={style.root}>
                {/* TextInput은 스타일이 없으면 아무것도 그리지 않아 존재가 안보임 */}
                <TextInput onChangeText={this.changeText} style={style.textInput}></TextInput>

                {/* 1) TextInput에 글씨를 작성할때마다 그 글씨를 보여주는 TextView */}
                <Text style={style.text}>{this.state.message}</Text>

                {/* 2) TextInput의 입력에 사용한 소프트키보드의 submit 버튼을 눌렀을때 글씨 보여주기 */}
                <TextInput onSubmitEditing={this.submitText} style={style.textInput}></TextInput>
                <Text style={style.text}>{this.state.msg}</Text>

                {/* 3) 버튼 클릭시 써있는 글씨를 TextView에 보여주기 */}
                <TextInput multiline={true} numberOfLines={4} onChangeText={this.aaa} style={style.textInput}></TextInput>
                <Button onPress={this.clickBtn} title="작성완료"></Button>
                <Text style={style.text}>{this.state.text}</Text>
            </View>
        )
    }

    //버튼 클릭 이벤트 - 일반변수값을 텍스트뷰가 보여주는 변수에 대입
    clickBtn= ()=> this.setState({text:this.inputValue})

    // TextInput 컴포넌트의 글씨가 변경될때마다 반응하는 메소드
    aaa= (value:string)=> {
        // 일반 변수에 저장
        this.inputValue= value
    }

    // 소프트 키보드의 완료 버튼을 선택했을때 반응
    submitText= (event:any)=>{ //파라미터로 string이 아니라 이벤트 객체가 전달됨
        let value= event.nativeEvent.text
        this.setState({msg: value})
    }

    // 글씨변경때마다 반응하는 콜백 메소드 - 파라미터로 써있는 글씨가 전달됨
    changeText= (value:string)=>{
        //Text 컴포넌트가 보여주는 state 변수값을 변경
        this.setState({message: value})
    }
}

// 스타일 객체
const style= StyleSheet.create({
    root:{flex:1,padding:16},
    textInput:{
        borderWidth:2,
        borderColor:'green',
        borderRadius: 4,
        paddingHorizontal: 16
    },
    text:{
        marginTop:16,
        fontWeight: 'bold',
        color: 'black',
        paddingHorizontal: 10,
        fontSize: 16
    }
})