
import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import moment from 'moment';

const space = 32;
const padding = 16;
const itemH = 60;
const dateTimeH = 24;

const w = Dimensions.get('window').width;

  const RenderItem = props => {
      const { color, id, text, dateTime, index } = props;

      return (
        <View style={{ width: '100%', height: itemH + dateTimeH }}>
          <View
            style={{
              height: itemH,
              width: w - padding * 2 - space,
              borderBottomLeftRadius: 16,
              borderTopRightRadius: 16,
              backgroundColor: color,
            }}>
            <View
              style={{
                height: dateTimeH,
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>{moment(dateTime, 'DD-MM-YYYY HH:mm').format('HH:mm')}</Text>
            </View>
    
            <View style={{ position: 'absolute', top: 0, bottom: 0, left: 8, justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>{id}</Text>
            </View>
          </View>
    
          <View
            style={{
              height: itemH,
              position: 'absolute',
              left: space,
              right: 0,
              bottom: 0,
              borderBottomLeftRadius: 16,
              borderTopRightRadius: 16,
              borderColor: color,
              backgroundColor: 'white',
              borderWidth: 1,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                textAlignVertical: 'center',
                color: color,
                flex: 1,
              }}>
              {text}
            </Text>
          </View>
        </View>
      );
  }


  export { RenderItem };