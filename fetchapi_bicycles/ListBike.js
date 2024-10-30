import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity, FlatList
} from 'react-native';
import axios from "axios";
const ListBike = () => {
  const [bikes, setBikes] = useState([]);
  const fetchAPI=()=>{
    axios.get("https://670fef49a85f4164ef2c890d.mockapi.io/animalTypes")
      .then((response)=>{
        setBikes(response.data);
      })
  }
  fetchAPI();
  const renderItem = ({item}) =>{
    return(
      <View style={{backgroundColor:'orange', borderRadius:10, alignContent:'center', justifyContent:'center', margin:10}}>
        <Image style={{width:150, height:150}} source={item.image}/>
        <Text style={{textAlign:'center'}}> {item.name} </Text>
        <Text style={{textAlign:'center'}}> {item.price} </Text>
      </View>
    )
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 2 }}>
        <Text style={{ color: 'red', fontSize: 26, fontWeight: 'bold' }}>
          {' '}
          The worlds's Best Bike{' '}
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={{
            width: 100,
            height: 30,
            padding: 10,
            borderWidth: 1,
            borderColor: 'red',
            borderRadius: 10,
            justifyContent:'center'
          }}>
          <Text style={{textAlign:'center'}}> All </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
            width: 100,
            height: 30,
            padding: 10,
            borderWidth: 1,
            borderColor: 'red',
            borderRadius: 10,justifyContent:'center'
          }}>
          <Text style={{textAlign:'center'}} > Roadbike </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
            width: 100,
            height: 30,
            padding: 10,
            borderWidth: 1,
            borderColor: 'red',
            borderRadius: 10,justifyContent:'center'
          }}>
          <Text style={{textAlign:'center'}}> Mountain </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:8}}>
      <FlatList
        data={bikes}
        renderItem = {renderItem}
        keyExtractor = {item => item.id}
        numColumns={2}
      />
      </View>
    </View>
  );
};
export default ListBike;
