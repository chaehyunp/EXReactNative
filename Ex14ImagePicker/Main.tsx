//react native는 사진앱 or 카메라앱을 실행하는 기능이 없음
//라이브러리 이용 - react-native-image-picker
//라이브러리가 외부저장소 사용에 대한 퍼미션을 알아서 처리하므로 별도의 추가 작업 필요없음

import React, { useState } from "react";
import { View, Text, Image, Button, Alert, StyleSheet, ImageURISource } from 'react-native'

//ImagePicker 라이브러리 기능 메소드 import
import { launchCamera, launchImageLibrary, CameraOptions, ImagePickerResponse, ImageLibraryOptions, Asset } from "react-native-image-picker";

//functional component
export default function Main():JSX.Element {

    //화면갱신에 영향을 주는 변수 state를 만들 수 있는 함수 - useState()
    const [img,setImg] = useState<ImageURISource>({uri:'https://cdn.pixabay.com/photo/2018/08/19/10/38/sunflower-3616249_640.jpg'})
    
    //카메라앱을 실행하는 기능함수
    const showCamera= ()=>{

        //옵션객체
        const options:CameraOptions={
                mediaType:'photo',
                cameraType:'back',
                saveToPhotos:true, //촬영한 사진 - 앱에 저장
                quality:1,
                videoQuality:'high' //사진이면 무시됨
        }

        //옵션객체와 촬영결과를 받는 콜백메소드
        launchCamera(options, (response:ImagePickerResponse)=>{ //파라미터로 응답객체 받음
            if(response.didCancel) Alert.alert('촬영이 취소되었습니다.')
            else if(response.errorMessage) Alert.alert(response.errorMessage)
            else{ 
                //이미지가 잘 촬영되었을경우
                //촬영된 이미지는 response 객체의 assets 속성으로 전달된
                if(response.assets != null){
                    //선택된 이미지 객체를 이미지뷰가 보여주는 img에 저장
                    //선택된 이미지의 uri 경로 얻어오기
                    const uri = response.assets[0].uri //카메라는 한 장만 촬영되므로 0밖에 안됨
                    const source = {uri:uri}
                    setImg(source)
                }
            }
        }); 
    }

    //사진앱을 실행하는 기능함수
    const showPhoto= async()=>{
        //옵션객체
        const options:ImageLibraryOptions={
            mediaType:'photo',
            selectionLimit:5
        }

        //ES7에 새로운 문법 : async - await 문법 (promise 문법) [ callback 비동기작업을 동기작업처럼 처리 ]
        //비동기작업은 그 작업을 처리하는동안 리턴값으로 받을 수 없음
        const response = await launchImageLibrary(options)
        if(response.didCancel) Alert.alert('취소되었습니다.')
        else if(response.errorMessage) Alert.alert(response.errorMessage)
        else {
            const uris:Asset[]= []
            response.assets?.forEach((value)=>uris.push(value))

            //원래는 FlatList로 이미지들을 보여줘야 하지만 시간상 첫번째 이미지만 보여주기
            setImg(uris[0])
        }
    }

    return (
        <View style={style.root}>
            <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                <Button title='show camera app' onPress={showCamera}></Button>
                <Button title='show photo app' color='green' onPress={showPhoto}></Button>
            </View>

            <Text style={style.text}>{img.uri}</Text>
            <Image source={img} style={style.img}></Image>
        </View>
    )
}

const style= StyleSheet.create({
    root:{flex:1},
    text:{padding:8, color:'black'},
    img:{marginTop:8,flex:1}
})