import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, ScrollView, Alert } from 'react-native'

export default function Main():JSX.Element{

    const [message, setMessage]= useState<string>('message......')

    // 영화정보 1개의 타입
    type MovieInfo= {
        id:string,
        title:string,
        releaseYear:string
    }

    // RN개발자사이트의 movies.json파일 응답객체 정보
    type MoviesResponse= {
        title:string,
        description:string,
        movies: MovieInfo[]
    }

    const [moviesResponse, setMoviesResponse]= useState<MoviesResponse>({title:'', description:'',movies:[]})

    const fetchData= ()=>{
        console.log('fetch start...')

        //1. JavaScript의 네트워크 작업 객체 : XMLHttpRequest
        //const xhr= new XMLHttpRequest()
        //서버의 응답결과를 받을때 반응하는 콜백메소드를 등록
        // xhr.onreadystatechange= ()=>{
        //     // 서버의 응답을 여러개 올 수 있음.
        //     if( xhr.readyState==4 && xhr.status==200 ){
        //         Alert.alert('응답완료')
        //         setMessage( xhr.responseText )
        //     }
        // }

        // xhr.open('GET','http://mrhi2023.dothome.co.kr/index.html',true)
        // xhr.send()

        //2. fetch()함수 - JS에 기본 내장된 네트워크 통신 라이브러리
        // promiss .then()메소드
        //fetch('http://mrhi2023.dothome.co.kr/index.js').then((response:Response)=>Alert.alert(response.status.toString())) //결과 :200 - OK

        // 응답결과를 글씨(text)로 받아보기
        // fetch('http://mrhi2023.dothome.co.kr/index.js')
        // .then((response:Response)=>{
        //     //응답객체에게 응답결과를 글씨로 바꿔달라고 요청 - 비동기작업
        //     return response.text()
        // }).then((text:string)=>{
        //     setMessage(text)
        // }).catch((error)=>{ //위 작업 중 하나에서 에러 발생하면 실행되는 영역
        //     Alert.alert(error)
        // })

        // 위 then()메소드의 파라미터 화살표함수의 축약표현
        //fetch('http://mrhi2023.dothome.co.kr').then(response=>response.text()).then(text=>setMessage(text))


        //3. OPEN API - JSON 파싱
        //3.1 우선 facebook에서 샘플로 제공하는 json파일 파싱 실습
        // fetch('https://reactnative.dev/movies.json')
        // .then(res=>res.text())
        // .then(text=>setMessage(text))

        // json파싱
        fetch('https://reactnative.dev/movies.json')
        .then(res=>res.json())
        .then(obj=>setMoviesResponse(obj)) 
        
        
        // HTTP REQUEST METHOD .... fecth 

        //서버에 보낼 데이터
        let name= "sam"
        let message="Hello"
        
        //1) GET method
        fetch(`http://mrhi2023.dothome.co.kr/aaa.php?name=${name}&msg=${message}`)
        .then(res=>res.text()).then(text=>setMessage(text))

        //2) POST method
        fetch('http://mrhi2023.dothome.co.kr/bbb.php' , {
            method:'POST',
            headers: {'Content-type':'application/x-www-form-urlecoded'},            
            body: `name=${name}&msg=${message}`
        })
        .then(res=>res.text()).then(text=>setMessage(text))

        //3) POST로 보낼 데이터가 객체일때는 그냥 json문자열로 변환하여 서버로 보냄
        let person={name:'robin', age:20, address:'seoul'}
        fetch('http://mrhi2023.dothome.co.kr/ccc.php', {
            method:'POST',
            headers:{'Content-Type':'application/json'}, //보낼 데이터가 json
            body: JSON.stringify(person) //object --> json            
        })
        .then(res=>res.json).then(obj=>Alert.alert('json파싱된 객체 받음'))



        

    }

    return (
        <View style={style.root}>
            <Button title='fetch data from network' onPress={()=>fetchData()}></Button>
            <ScrollView style={style.container}>
                <Text style={style.text}> {message} </Text>
            </ScrollView>

            {/* 영화정보 리스트 */}
            <View style={{flex:1, marginTop:16}}>
                <Text style={{color:'black', fontWeight:'bold', padding:8}}>{moviesResponse.title}</Text>
                {/* 영화 movies는 여러개.. FlatList컴포넌트 써야 하지만..*/}
                {
                    moviesResponse.movies.map( (movie:MovieInfo, index:number) =>{
                        return (
                            <View style={style.item} key={index}>
                                <Text> {movie.id} </Text>
                                <Text> {movie.title} </Text>
                                <Text> {movie.releaseYear} </Text>
                            </View>
                        )                        
                    })
                }
            </View>
        </View>
    )
}

const style= StyleSheet.create({
    root:{flex:1, padding:16,},
    container:{marginTop:16},
    text:{ padding:8, color:'black'},
    item:{ borderWidth:1, borderRadius:4, padding:8, margin:2, },
})