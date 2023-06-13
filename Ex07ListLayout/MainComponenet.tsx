import React,{Component} from "react";
import {View, Text, StyleSheet, Button} from 'react-native'

export default class MainComponent extends Component {
    render(): JSX.Element {

        // 앱을 개발하면서 가장 많은 제작 빈도를 가진 리스트 형태 레이아웃 만들어보기
        // 우선 RN에서 제공하는 ListView용으로 컴포넌트를 사용하지않고 리스트형태 만들어보기

        //1) 실습에서 사용할 const 변수 : JSX 컴포넌트 객체를 변수에 저장
        const aaa:JSX.Element= <Text>Nice</Text>

        //2) 변수 하나에 여러 개의 컴포넌트 저장하기위해 큰 뷰 그룹 사용
        const bbb:JSX.Element= <View style={{marginTop:8}}>
                                    <Text>Good</Text>
                                    <Button title="button"></Button>
                                </View>

        //5) 배열의 요소로 JSX 컴포넌트를 저장
        const arr= [aaa,bbb,bbb]

        //6) 리스트에 보여줄 대량의 데이터 배열
        let datas:string[]= ["aaa","bbb","ccc","ddd","aaa","bbb","ccc","ddd","aaa","bbb","ccc","ddd"]

        return (
            <View style={style.root}>
                <Text style={style.title}>List Layout Test</Text>

                {/* 1. 변수에 JSX문버을 사용한 컴포넌트를 저장한 후에 사용할 수 있음 */}
                {/* {aaa} */}

                {/* 변수에 저장되어있으니 여러 번 사용가능 */}
                {/* {aaa}
                {aaa}
                 */}
                {/* 2. 변수 하나에 여러 개의 컴포넌트를 넣어서 사용하기 */}
                {/* {bbb}
                {bbb} */}

                {/* 3. 함수(메소드)를 호출하여 JSX 컴포넌트를 리턴받아서 사용하기 */}
                {/* {this.showItemView()}
                {this.showItemView()} */}

                {/* 4. 함수를 호출하면서 파라미터 전달 */}
                {/* {this.showItemView2('Sam', 'This is button', 'indigo')}
                {this.showItemView2('Robin', 'Is this button', 'orange')} */}

                {/* 5. 배열변수에 JSX 컴포넌트들을 요소로 넣어서 사용하기 */}
                {/*  JS는 배열을 출력하면 자동으로 요소값을 나열함 */}
                {/* {arr} */}

                {/* 6. 실제 앱개발과정에서는 대량의 데이터가 JSX 컴포넌트이기보다는 일반 데이터인 경우가 더 많음 */}
                {/* {datas} - ERORR, 일반 string 데이터는 컴포넌트가 아님*/}
                {/* 배열의 map() 메소드를 이용하여 JSX 컴포넌트를 요소로 가지는 새로운 배열을 만들어서 리턴하여 보여주기 */}
                {datas.map(function(value, index, array){
                    return(
                        //배열로 만든 아이템뷰는 식별자로 key 속성이 필수로 요구됨
                        <View key={index} style={style.itemView}>
                            <Text>{value}</Text>
                        </View>
                    )
                })}

                {/* 배열의 .map()를 이용한 단점 */}
                {/* key 속성을 개별적으로 지정해야함 */}
                {/* 갯수가 많을때 자동스크롤이 되지 않음 */}
                {/* 가로 스크롤이나 스크롤바 제어 등 리스트뷰에서의 기능이 없음 */}
                {/* --> RN에서 리스트뷰용 컴포넌트를 별도로 제공함 */}

            </View>
        )        
    }

    //4) 실습에서 사용할 메소드
    showItemView2(name:string, btnTitle:string, color:string):JSX.Element {
        return(
            <View style={{marginTop:16}}>
                <Text>Hello, {name}</Text>
                <Button title={btnTitle} color={color}></Button>
            </View>
        )
    }

    //3) 실습에서 사용할 메소드
    showItemView():JSX.Element {
        return(
            <View style={{marginTop:16}}>
                <Text>Nice World</Text>
                <Button title="press me"></Button>
            </View>
        )
    }

}


//스타일스트 객체
const style= StyleSheet.create({
    root:{ flex:1, padding:16, },
    title:{ fontSize:24, fontWeight:'bold', color:'black'},
    itemView: { padding:16 , 
        margin:8,
        borderWidth:1,
        borderRadius:4
    }
})