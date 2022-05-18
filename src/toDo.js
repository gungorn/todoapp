import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RenderItem } from './renderItem';
import { InputModal } from './inputModal';

const padding = 16;

const colorPalette = [
  'rgb(43, 150, 184)',
  'rgb(73, 102, 138)',
  'rgb(49, 140,214)',
  'rgb(255, 166, 0)',
  'rgb(72, 180, 186)',
  'rgb(28, 180, 140)',
  'rgb(232, 187, 214)',
];

const ToDo = () => {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] =useState(false);

    //useEffect(() => {}); // componentdidUpdate
    useEffect(() => {
        AsyncStorage.getItem('todolist')
        .then(res => {
            setData(JSON.parse(res || []));
        })
        .catch(err => console.log(err));
    }, []); // componentdidUpdate

    const addNewTodo = item => {
        const newData = [...data];
        newData.push(item);
        setData(newData);
    };

  return (
    <View style={{ flex: 1, paddingHorizontal: padding }}>
      <FlatList
      data={data}
      //extraData={data}
      renderItem={({ item, index }) => <RenderItem {...item} index={index} />} 
      style={{ marginTop: 16}} 
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />

      <TouchableOpacity 
      style={{ 
        position: 'absolute',
        bottom: padding,
        right: padding,
        width: 48,
        aspectRatio: 1,
        borderRadius: 24,
        backgroundColor: colorPalette[2],
        justifyContent: 'center',
        alignItems:'center',
       }}
       onPress={() => setShowModal(true)}>
        <Text style={{ color: 'white', fontSize: 24, fontWeight:'bold' }}>+</Text>
      </TouchableOpacity>

      <InputModal showModal={showModal} setShowModal={setShowModal} addNewTodo={addNewTodo} data={data} length={data.length} />
    </View>
  );
};

export { ToDo };
