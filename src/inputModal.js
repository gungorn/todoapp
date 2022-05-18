
import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, Modal, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const space = 32;
const padding = 16;
const itemH = 60;
const dateTimeH = 24;

const colorPalette = [
  'rgb(43, 150, 184)',
  'rgb(73, 102, 138)',
  'rgb(49, 140,214)',
  'rgb(255, 166, 0)',
  'rgb(72, 180, 186)',
  'rgb(28, 180, 140)',
  'rgb(232, 187, 214)',
];

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

  const InputModal = props => {
      const { showModal, setShowModal, addNewTodo, data, length } = props;

      const [color, setColor] = useState('transparent');
      const [t, setT] = useState('');

      useEffect(() => {
        setT('');
        setColor(colorPalette[Math.floor(Math.random() * colorPalette.length)]);
      }, [showModal]);


      const add = () => {
          const newItem = {
            text: t,
            color: color,
            dateTime: moment().format('DD-MM-YYYY HH:mm'),
            id: length + 1,
        };

        AsyncStorage.setItem('todolist', JSON.stringify([...data, newItem]))
        .then(res => {
            setShowModal(false);
            addNewTodo(newItem);
        })
        .catch(err => console.log(err));
      } 

      return (
          <Modal
            visible={showModal}
          >
            <View style={{ width:w, height: h, backgroundColor: 'rgba(0,0,0,0.3)', alignItems: 'center', justifyContent: 'center'}}>
                <View style={{ width: '75%', height: h * 0.2, backgroundColor:'white', borderRadius: 8, padding: 4, justifyContent:'center', alignItems: 'center' }}>
                    <TextInput
                        multiline
                        maxLength={100}
                        style={{ borderWidth:1, borderColor: color, borderRadius: 8, flex: 1, width: '100%', textAlign: 'center', textAlignVertical:'center' }}
                        value={t}
                        onChangeText={setT}
                    />

                    <TouchableOpacity
                    style={{ borderRadius: 4, paddingVertical: 8, paddingHorizontal: 16, backgroundColor: color, marginTop: padding  }}
                    onPress={add}
                    >
                        <Text>Ekle</Text>
                    </TouchableOpacity>
                </View>
            </View>
          </Modal>
      );
  }


  export { InputModal };