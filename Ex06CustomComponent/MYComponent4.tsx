import React, {Component} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'

type Props= {
    title:string
    pressed:()=>void //함수의 자료형 ()안에 없으므로 파라미터없음, void는 리턴없음
    color:string
}

class MyComponent4 extends Component <Props>{

    // 정적변수로 props가 전달되지 않을때의 기본값 지정 가능
    static defaultProps= {
        title: 'untitle',
        color: 'black',
        pressed: ()=>{} //빈 함수
    }

    render(): React.JSX.Element {
        return(
            <View style={{margin:16}}>
                <Button title={this.props.title} onPress={this.props.pressed} color={this.props.color}></Button>
            </View>
        )
    }
}

export default MyComponent4