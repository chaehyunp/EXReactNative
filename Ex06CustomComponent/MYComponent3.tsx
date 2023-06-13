import React, {Component} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'

type Props= {
    title:string
    pressed:()=>void //함수의 자료형 ()안에 없으므로 파라미터없음, void는 리턴없음
}

class MyComponent3 extends Component <Props>{
    render(): React.JSX.Element {
        return(
            <View style={{margin:16}}>
                <Button title={this.props.title} onPress={this.props.pressed}></Button>
            </View>
        )
    }
}

export default MyComponent3