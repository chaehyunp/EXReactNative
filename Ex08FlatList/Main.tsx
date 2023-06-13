import React,{Component} from "react";
import {View, Text, StyleSheet, FlatList, ListRenderItem, ListRenderItemInfo, Touchable, TouchableOpacity, Alert, Image} from 'react-native'

export default class Main extends Component {

    // RN에서 ListVIew의 역할을 하는 컴포넌트 2가지 종류
    //1. FlatList : 일반적인 Listview
    //2. SectionList : 섹션에 따라 구분지어서 리스트할때 사용

    // 먼저 FlatList에서 사용할 대량의 데이터 배열 - 데이터 변경에 실시간 대응하려면 state 사용
    state:React.ComponentState= {
        //1. 간단한 string  문자열 배열
        datas:["aaa","bbb","ccc","ddd","eee","aaa","bbb","ccc","ddd","eee","aaa","bbb","ccc","ddd","eee"],

        //2. 텍스트 2개, 이미지 1개 아이템 뷰 - 데이터들
        items:[
            {name:"Sam", message:"Hello", img:{uri:'https://cdn.pixabay.com/photo/2018/03/26/16/38/nature-3263198_640.jpg'}},
            {name:"Robin", message:"Nice", img:{uri:'https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_640.jpg'}},
            {name:"Cindy", message:"Beach", img:{uri:'https://cdn.pixabay.com/photo/2015/06/01/05/58/shells-792912_640.jpg'}},
            {name:"Jason", message:"Hot", img:{uri:'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_640.jpg'}},
            {name:"Kelly", message:"Summer", img:{uri:'https://cdn.pixabay.com/photo/2018/08/19/10/38/sunflower-3616249_640.jpg'}},
            {name:"Sam", message:"Hello", img:{uri:'https://cdn.pixabay.com/photo/2018/03/26/16/38/nature-3263198_640.jpg'}},
            {name:"Robin", message:"Nice", img:{uri:'https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_640.jpg'}},
            {name:"Cindy", message:"Beach", img:{uri:'https://cdn.pixabay.com/photo/2015/06/01/05/58/shells-792912_640.jpg'}},
            {name:"Jason", message:"Hot", img:{uri:'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_640.jpg'}},
            {name:"Kelly", message:"Summer", img:{uri:'https://cdn.pixabay.com/photo/2018/08/19/10/38/sunflower-3616249_640.jpg'}},
            {name:"Sam", message:"Hello", img:{uri:'https://cdn.pixabay.com/photo/2018/03/26/16/38/nature-3263198_640.jpg'}},
            {name:"Robin", message:"Nice", img:{uri:'https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_640.jpg'}},
            {name:"Cindy", message:"Beach", img:{uri:'https://cdn.pixabay.com/photo/2015/06/01/05/58/shells-792912_640.jpg'}},
            {name:"Jason", message:"Hot", img:{uri:'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_640.jpg'}},
            {name:"Kelly", message:"Summer", img:{uri:'https://cdn.pixabay.com/photo/2018/08/19/10/38/sunflower-3616249_640.jpg'}},
            {name:"Sam", message:"Hello", img:{uri:'https://cdn.pixabay.com/photo/2018/03/26/16/38/nature-3263198_640.jpg'}},
            {name:"Robin", message:"Nice", img:{uri:'https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_640.jpg'}},
            {name:"Cindy", message:"Beach", img:{uri:'https://cdn.pixabay.com/photo/2015/06/01/05/58/shells-792912_640.jpg'}},
            {name:"Jason", message:"Hot", img:{uri:'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_640.jpg'}},
            {name:"Kelly", message:"Summer", img:{uri:'https://cdn.pixabay.com/photo/2018/08/19/10/38/sunflower-3616249_640.jpg'}}
        ]
    }
    
    render(): JSX.Element {
        return(
            <View style={style.root}>
            <Text style={style.title}>FlatList</Text>

            {/* FlatList : RN에서 제공하는 기본 ListView 컴포넌트 */}
            {/* 필수 2개의 속성(props) - data, renderItem */}
            {/* 1) data - FlatList가 보여줄 대량의 데이터들 지정 */}
            {/* 2) renderItem - 아이템 하나의 모양(컴포넌트)을 만들어서 리턴하는 콜백함수 지정 */}
            {/* <FlatList data={this.state.datas}
            renderItem={(obj:ListRenderItemInfo<any>) =>{
                return <Text>{obj.index} : {obj.item}</Text>
            }}></FlatList> */}

            {/* 위 renderItem의 obj 파라미터 객체를 구조분해 할당 */}
            {/* <FlatList data={this.state.datas}
            renderItem={({index,item}) =>{ // 구조분해할당 : obj객체의 index, item 멤버를 뽑아옴
                return <Text>{index} : {item}</Text>
            }}></FlatList> */}

            {/* 아이템뷰의 클릭이벤트 처리 */}
            {/* <FlatList 
                data={this.state.datas}
                renderItem={({index,item}) => 
                    <TouchableOpacity style={style.itemView} onPress={()=>Alert.alert(item)}>
                        <Text>index : {index}</Text>
                        <Text>data : {item}</Text>
                    </TouchableOpacity>}>
            </FlatList> */}

            {/* 2. 텍스트 2개, 이미지 1개 아이템뷰 모양 */}
            <FlatList 
                data={this.state.items} 
                renderItem={({item,index})=>
                    <TouchableOpacity style={style.item} onPress={()=>this.showAlert(item,index)}>
                        <Image source={item.img} style={style.itemImg}></Image>
                        <View>
                            <Text style={style.itemName}>{item.name}</Text>
                            <Text style={style.itemMessage}>{item.message}</Text>
                        </View>
                    </TouchableOpacity>

                    }>
            </FlatList>

        </View>
        )
    }

    showAlert= (item:any, index:number)=>{
        Alert.alert(item.name + " : " + index)
    }
}

//스타일객체
const style= StyleSheet.create({
    root:{flex:1, padding:16},
    title:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:8,
        paddingBottom:16,
        color:'black'
    },
    itemView:{
        borderWidth:1,
        borderRadius:8,
        margin:8,
        padding:8
    },
    item:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:12
    },
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8
    },
    itemName:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },
    itemMessage:{
        fontSize:16,
        fontStyle:'italic'
    }

})