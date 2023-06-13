import React, {Component} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'

type Props= {
    title:string
    color:string
    onPress:()=>void //함수의 자료형 ()안에 없으므로 파라미터없음, void는 리턴없음
}

class MyComponent5 extends Component <Props>{
    render(): React.JSX.Element {
        return(
            <View style={{margin:16}}>
                {/* props 속성들을 한 번에 적용하기 */}
                <Button {...this.props}></Button>
            </View>
        )
    }
}

export default MyComponent5