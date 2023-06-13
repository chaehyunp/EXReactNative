import React, {Component} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import MyComponent3 from './MYComponent3'
import MyComponent4 from './MYComponent4'
import MyComponent5 from './MYComponent5'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

export default class MainComponent extends Component {
    render(): JSX.Element {
        return(
            //1. 나만의 Component를 만들어서 사용하기
            // <View style={style.root}>
            //     <Text>Hello RN</Text>

            //     {/* MyComponent 사용 */}
            //     <MyConponent></MyConponent>
            //     <MyConponent></MyConponent>

            // </View>

            //이런식으로 Header, Body, Nav 등을 영역별로 나누어서 작성할 수 있음
            
            //2. 글씨가 매번 똑같음
            // <View style={style.root}>
            //     <Text>Hello RN</Text>

            //     {/* MyComponent 사용 */}
            //     <MyConponent2 name='Sam'></MyConponent2>
            //     <MyConponent2 name='Robin'></MyConponent2>

            // </View>

            //3. 별도의 .tsx 파일에 나만의 컴포넌트를 만들고 사용해보기
            // <View style={style.root}>
            //     <Text>Hello RN</Text>

            //     {/* MyComponent3 사용 */}
            //     <MyComponent3 title='press' pressed={this.pressBtn}></MyComponent3>
            //     <MyComponent3 title='click' pressed={this.clickBtn}></MyComponent3>
            // </View>


            //4. 커스텀 컴포넌트를 사용할때 props 중 일부를 전달하지 않을 경우
            // <View style={style.root}>
            //     <Text>Hello RN</Text>

            //      {/* MyComponent4 사용 */}
            //      <MyComponent4></MyComponent4>
            // </View>

            //5. 여러 속성을 한 번에 적용하기
            // <View style={style.root}>
            //     <Text>Hello RN</Text>

            //      {/* MyComponent5 사용 */}
            //      <MyComponent5 title='clcik me' color='indigo' onPress={()=>{Alert.alert('clicked button')}}></MyComponent5>
            // </View>

            //6. 컴포넌트 간의 데이터 제어
            <View style={style.root}>
                <ComponentA msg={this.state.message}></ComponentA>
                <ComponentB onPress={this.changeMessage}></ComponentB>
            </View>

        )
    }

    //6번 실습에서 사용할 변수
    state= {
        message:"Hello World"
    }

    changeMessage= ()=>{
        this.setState({message:"Nice to meet you"})
    }

    pressBtn= ()=>{
        Alert.alert('button title : press')
    }
    clickBtn= ()=>{
        Alert.alert('button title : click')
    }
}

//2. Custom Component에 속성(property)값 전달
// MyComponent2의 속성(property) 값들의 타입을 지정
type Props= {
    name:string,
}

// 속성으로 전달될 값들의 타입을 <>으로 지정
class MyConponent2 extends Component<Props>{
    render(): JSX.Element {
        return(
            <View style={{margin:16}}>
                {/* 컴포넌트를 사용할때 속성(property)으로 전달된 값은 컴포넌트의 아주 특별한 멤버변수(props)에 자동으로 추가됨 */}
                <Text style={{marginBottom:16, color:'black'}}>Hello {this.props.name}</Text>
                <Button title='click me'></Button>
            </View>
        )
               
    }
}

//1. Custom Component 만들기

class MyConponent extends Component{
    render(): JSX.Element {
        return(
            <View style={{margin:16}}>
                <Text style={{marginBottom:16, color:'black'}}>Hello Sam</Text>
                <Button title='click me'></Button>
            </View>
        )
               
    }
}

const style= StyleSheet.create({
    root:{flex:1}
})