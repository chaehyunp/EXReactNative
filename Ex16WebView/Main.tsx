// WubView library

import React from 'react'
import {View,Button} from 'react-native'
import WebView from 'react-native-webview'

export default function Main():JSX.Element{
    return(
        <View style={{flex:1, padding:16}}>
            {/* 웹뷰의 기본  height은 flex:1로 설정되어있음 */}
            <WebView source={{uri:'https://m.naver.com'}}></WebView>
            <Button title='button'></Button>

            {/* 여러 개의 웹뷰 존재할 수 있음 */}
            {/* 만약에 억지로 높이를 지정하고 싶다면..? */}
            <View style={{height:200}}>
                <WebView source={{uri:'https://www.naver.com'}}></WebView>
            </View>

            <WebView source={{uri:'http://testhue96.dothome.co.kr/03_kakaoMapAPI.html'}}></WebView>
        </View>
    )
}