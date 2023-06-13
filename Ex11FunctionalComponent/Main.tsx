import React, {Component, useEffect, useState} from "react";
import { View,Text,Button,StyleSheet } from "react-native";

export default class Main extends Component {
    render(): JSX.Element {
        return(
            <View style={style.root}>
                {/* 새로운 Custom Component 제작방법 */}
                {/* 1. class Component : Component class를 상속해서 만드는 일반적인 Component [ 클래스형 컴포넌트 ] */}
                {/* 2. functional Component : 함수만드는 방법처럼 만들어진 Component [ 함수형 컴포넌트 ] */}

                {/* 1) 두 컴포넌트의 차이를 알기위해 익숙한 class Component 만들기 */}
                <MyComponent></MyComponent>

                {/* 2) 함수형 컴포넌트 - 함수를 마치 객체인양 사용 */}
                {/* Comoponent를 상속받지 않았지만, JS에서는 함수를 객체로 생성할 수 있음 */}
                <MyComponent2></MyComponent2> 

                {/* 즉, 간단한 콘텐츠를 화면에 보여주고자 할때 간결하게 작성할 수 있는 컴포넌트 */}
                {/* 단, Component 상속받지 않았기때문에... constructor, state, props 없음 */}

                {/* 3) 대신에 props를 전달받는것이 가능 */}
                {/* 3.1) props를 받는 일반적인 class comoponent */}
                <MyComponent3 data="Hello"></MyComponent3>

                {/* 3.2) props를 받는 functional Component */}
                <MyComponent4 data="Hi"></MyComponent4>

                {/* 3.3) 여러 개의 속성을 받아보기 */}
                <MyComponent5 data="How are you" title="Fine"></MyComponent5>

                {/* 3.4) 여러 개의 속성을 구조분해할당으로 받기 */}
                <MyComponent6 data="How are you" title="Fine"></MyComponent6>

                {/* 4) 컴포넌트 간의 데이터 제어 */}
                {/* 데이터 바인딩처럼 Component가 직접 데이터(state)나 함수(setState)를 가지는 것이 아니라 props로 전달 */}
                <BBB msg={this.state.msg}></BBB>
                <AAA onPress={this.changeText}></AAA>

                {/* 결론적으로 functional component는 class component에 비해 코딩이 간결하여 편하지만 */}
                {/* state가 없어 화면에 변화를 주는 작업이 아닌 단순한 컴포넌트용으로 적합하였음 */}
                {/* 현재는 functional component의 간결한 코딩이 더 선호되여 state가 없다는 단점을 보완하기위한 Hook이라는 개념이 새로이 도입됨 */}
                
                {/* 5) functional component Hook7 실습 */}
                <MyComponent7></MyComponent7>

            </View>
        )
    }

    state:React.ComponentState= {msg:"Hello"}
    changeText= ()=>this.setState({msg:"Nice"})
    
}

//5) functional component Hook
function MyComponent7():JSX.Element{

    //함수형 컴포넌트는 state, setState()가 없음
    // let msg= "Hello" //지역변수
    //함수형 컴포넌트에서 state를 사용할 수 있도록 만드는 문법 useState() - react의 내장기술
    let [msg,setMsg]=useState<string>('Hello') //state능력을 가진 msg, setState() 능력을 가진 setMsg()
    const [age,setAge]=useState(0) //number type도 가능

    //함수형 컴포넌트는 라이프사이클 메소드도 없음
    //화면을 갱신할때 자동호출되던 componentDidUpdate, componentDidMount 메소드를 대체하는 함수
    //화면이 처음 시작할때와 state 변경으로 인해 화면이 갱신될때마다 호출되는 기능을 만들고 싶을때 사용
    //ex. 서버에서 데이터를 읽어오거나 DB 작업 등
    useEffect(()=>{
        console.log('useEffect call...')
    })

    return(
        <View style={{padding:16}}>
            <Text style={style.text}>{msg}</Text>
            <Button title="button" onPress={()=>setMsg('Hi')}></Button>
            <Text style={style.text}>{age}</Text>
            <Button title="add age" onPress={()=>setAge(age+1)}></Button>
        </View>
    )
}

//4) 컴포넌트들간의 데이터 제어 - 직접 참조는 불가능
//4.1) 버튼을 가진 함수형 컴포넌트
type AaaProps={onPress:()=>void}
const AAA= (props:AaaProps)=>{
    return(
        <View style={{padding:16}}>
            <Button title="change" onPress={props.onPress}></Button>
        </View>
    )
}

//4.2) 버튼에 의해 변경될 글씨 보여주는 함수형 컴포넌트
type BbbProps={msg:string}
const BBB= (props:BbbProps)=>{
    return(
        <View style={{padding:16}}>
            <Text style={style.text}>{props.msg}</Text>
        </View>
    )
}


//3.3) 여러 개 property 받기
type Props2={data:string, title:string}
function MyComponent5(props2:Props2){
    return(
        <View>
            <Text style={style.text}>MyComponent5 data: {props2.data}</Text>
            <Text style={style.text}>MyComponent5 title: {props2.title}</Text>
        </View>
    )
}

function MyComponent6({data,title}:Props2){
    return(
        <View>
            <Text style={style.text}>MyComponent6 data: {data}</Text>
            <Text style={style.text}>MyComponent6 title: {title}</Text>
        </View>
    )
}

//3.2) props를 받는 functional Component
type Props={data:string} //프로퍼티 자료형
function MyComponent4(props:Props){ //태그문의 속성으로 지정한 값들은 파라미터로 전달됨
    return(
        <View>
            <Text style={style.text}>MyComponent4: {props.data}</Text>
        </View>
    )
}

//3.1) props를 받는 class형 Component

class MyComponent3 extends Component<Props> {
    render(): JSX.Element {
        return(
            <View>
                <Text style={style.text}>MyComponent3: {this.props.data}</Text>
            </View>
        )
    }
}


//2) functional Component - 선언적 함수
function MyComponent2():JSX.Element{

//constructor(){} //생성자가 존재하지 않음
//화면갱신에 영향을 주는 특별한 변수 state도 없음
//state는 Component의 기본 변수이지만, 상속받지않았기때문
//Component 사용하는 태그문에서 전달한 props 변수도 없음

    return (
        <View>
            <Text style={style.text}>Hello MyComponent2</Text>
        </View>
    )
}

//2.1) 함수형 컴포넌트를 익명함수 형태로 만들 수 있음
// const MyComponent2=function():JSX.Element{
//     return (
//         <View>
//             <Text style={style.text}>Hello MyComponent2</Text>
//         </View>
//     )
// }

//2.2) 화살표 함수 형태로 함수형 컴포넌트 설계
// const MyComponent2=():JSX.Element=>{
//     return (
//         <View>
//             <Text style={style.text}>Hello MyComponent2</Text>
//         </View>
//     )
// }

//축약 가능
//const MyComponent2=():JSX.Element=> <View><Text style={style.text}>Hello MyComponent2</Text></View>


//1) 일반적인 컴포넌트
class MyComponent extends Component {
    render(): JSX.Element {
        return(
            <View>
                <Text style={style.text}>Hello MyComponent</Text>
            </View>
        )
    }
}

const style=StyleSheet.create({
    root:{flex:1,padding:16},
    text:{margin:8,padding:8,color:'black'}
})