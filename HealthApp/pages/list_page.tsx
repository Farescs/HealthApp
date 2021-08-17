import React,{useState,useEffect, ChangeEvent} from 'react'
import { SafeAreaView, View, Text, StyleSheet, TextInput, ScrollView, FlatList } from "react-native";
import {getPlaceLocation} from './API/GooglePlaces'
import * as Location from 'expo-location';
import {LocationObject} from 'expo-location';

interface listItem{
    name:string;
    location:string;
    type:'hospital'|'doctor';
    distance?:number;
}

const ListPage: React.FC = (props) =>{
    const [searchText,setSearch]=useState<string>();
    const [location,setLocation]=useState<LocationObject>();
    const [list,setList]=useState<any[]>([])

    const getLocationPerm=async()=>{
        let { status } = await Location.requestForegroundPermissionsAsync();
        if(status!=='granted'){
            return
        }
        let location=await Location.getCurrentPositionAsync();
        setLocation(location);
        const hospitals=await getPlaceLocation(location['coords']['latitude'],location['coords']['longitude']);
        setList(hospitals);
        console.log(hospitals)
    }

    useEffect(()=>{
        getLocationPerm()
    },[]);

    const onTextChange=(text:string)=>{
        setSearch(text);
    }

    const renderItem=(item:any)=>(
        <View style={styles.listItem}>
            <Text style={styles.title}>
                {item['name']}
            </Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <TextInput placeholder="Search" style={styles.search} onChangeText={onTextChange} value={searchText}/>
            <View style={styles.safecontainer}>
                <FlatList
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={item=>item.name}
                    />
            </View>
            <ScrollView>
             {list.map((hospital)=>{
                return (<View key={hospital['name']} style={styles.listItem}>
                    <Text style={styles.title}>{hospital['name']}</Text>
                </View>)
             })}
            </ScrollView>
        </View>
    );
}

export default ListPage

const styles=StyleSheet.create({
    container:{
        padding:10,
        marginTop:24,
    },
    safecontainer:{
        flex:1,
    },
    search:{
        height: 40,
        margin: 12,
        borderRadius:10,
        borderWidth: 1,
        padding: 10,
    },
    listItem:{
        alignSelf:"stretch",
        height:50
    },
    title:{
        fontSize:22
    }
})
