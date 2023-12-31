import React, { Component } from "react"
import {View} from "react-native"

export default class MainComponent extends Component{
    render(): JSX.Element {
        return(
            //여러 개의 컴포넌트를 배치하려면 큰 뷰그룹이 있어야 함 - 1개의 컴포넌트만 return 가능

            //1. 3개의 자식뷰 배치하기
            // <View>
            //     {/* 뷰의 사이즈는 width, height에 숫자나 % 사용, 기본 단위 dp */}
            //     <View style={{width:50, height:50, backgroundColor:'red'}}></View>
            //     <View style={{width:100, height:100, backgroundColor:'green'}}></View>
            //     <View style={{width:'70%', height:150, backgroundColor:'blue'}}></View>
            // </View>

            //2. 3개의 자식뷰 높이를 수치값으로 주면 해상도에 대응하기 어려움
            // 비율로 높이값을 지정 권장, RN에서는 flex 레이아웃을 권장
            // 화면의 높이를 3분할하여 1:2:4가 되도록
            // 최상위 View의 높이의 기본값 wrap, 즉 flex로 높이값을 주려면 부모 height 필요
            // 화면 전체를 사용하려면 View의 높이 - flex로 주면 혼자 먹음
            // <View style={{flex:1}}>
            //     <View style={{flex:1, backgroundColor:'red'}}></View>
            //     <View style={{flex:2, backgroundColor:'green'}}></View>
            //     <View style={{flex:4, backgroundColor:'blue'}}></View>
            // </View>

            //3. RN의 flex 스타일의 기본 배치방향을 column 방향
            // 배치방향을 변경하여 배치 - row
            // 가로방향으로 1:2:4 비율로 너비 지정
            // flex 스타일의 정렬 중 배치방향의 교차축 정렬 align-items의 기본값이 stretch 모드
            // <View style={{flex:1, flexDirection:"row"}}>
            //     <View style={{flex:1, backgroundColor:'red'}}></View>
            //     <View style={{flex:2, backgroundColor:'green'}}></View>
            //     <View style={{flex:4, backgroundColor:'blue'}}></View>
            // </View>

            //4. 자식뷰들의 높이와 너비를 개별지정하여 배치 정렬
            // justifyContent : 배치방향과 같은 축의 정렬
            // alignItems     : 배치방향과 교차 축의 정렬 [stretch(기본값) - 남은공간만큼 View의 크기를 늘림 단, width/height이 없을때만 적용]
            // <View style={{flex:1, flexDirection: "column", justifyContent:"space-evenly", alignItems:"center"}}>
            //     <View style={{width:50, height:50, backgroundColor:'red'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'green'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'blue'}}></View>
            // </View>

            //4.2 가로배치일때 정렬
            // <View style={{flex:1, flexDirection: "row", justifyContent:"space-between", alignItems:"center"}}>
            //     <View style={{width:50, height:50, backgroundColor:'red'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'green', alignSelf:'flex-end'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'blue'}}></View>
            //     {/* 자식 중 1개만 다른 정렬을 하고 싶을때 justifySelf, alignSelf */}
            // </View>

            //5. 자식뷰들의 너비나 높이를 하나만 주고 나머지는 flex 비율로 크기 지정
            // <View style={{flex:1, flexDirection:"column"}}>
            //     <View style={{height:50, backgroundColor:'red'}}></View>

            //     {/* 남은공간은 1:2 비율로 높이값 지정 */}
            //     <View style={{flex:1, backgroundColor:'green'}}></View>
            //     <View style={{flex:2, backgroundColor:'blue'}}></View>
            // </View>

            //6. 중첩 구조의 배치 .. 수직/수평의 중첩 
            //   뷰들이 겹치려면? flex 스타일을 뷰의 겹침을 허용하지 않음.
            //   뷰를 겹치려면. position 속성을 이용. RN의 모든 컴포넌트는 기본 position:relative 임.
            //   position속성을 absolute 로 하면 뷰의 포지션을 직접 지정하기에 뷰를 겹칠 수 있음. 또한 부모뷰가 relative 여서 부모뷰의 좌상단을 기준으로 배치함
            <View style={{flex:1, flexDirection:'column'}}>
                {/* 크게 수직으로 2분할 [ 1:2 비율 ] */}

                {/* 6.1 상단 1의 영역 */}
                <View style={{flex:1, flexDirection:'row'}}>
                    {/* 좌우 2:1 분할 */}
                    <View style={{flex:2, backgroundColor:'red'}}>

                        {/* 절대 위치 지정으로 뷰 겹치기 */}
                        <View style={{width:50, height:50, backgroundColor:'white', left:10, top:10, position:'absolute'}}></View>
                        <View style={{width:50, height:50, backgroundColor:'gray', left:20, top:20, position:'absolute'}}></View>

                    </View>
                    <View style={{flex:1, flexDirection:'column'}}>
                        <View style={{flex:1, backgroundColor:'yellow'}}></View>
                        <View style={{flex:1, backgroundColor:'green'}}></View>
                    </View>
                </View>

                {/* 6.2 하단 2의 영역 */}
                <View style={{flex:2, flexDirection:'row'}}>
                    {/* 좌우 1:2 분할 */}
                    <View style={{flex:1, backgroundColor:'blue'}}></View>
                    <View style={{flex:2}}>
                        <View style={{flex:1, backgroundColor:'gray'}}></View>
                        <View style={{flex:1, backgroundColor:'brown'}}>
                            {/* 절대 위치 지정으로 뷰 겹치기 */}
                            <View style={{width:50, height:50, backgroundColor:'white', left:10, top:10, position:'absolute'}}></View>
                            <View style={{width:50, height:50, backgroundColor:'gray', left:20, top:20, position:'absolute'}}></View>
                        </View>
                    </View>
                </View>

                {/* 절대 위치 지정 */}
                <View style={{width:100, height:100, backgroundColor:'aqua', position:'absolute', bottom:50, left:80, borderRadius:50}}></View>

            </View>
            
        )
    }
}