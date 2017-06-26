import React from 'react';
import { View, Text, Picker } from 'react-native';
import itemstyle from '../styles/Item.Style';
import { Button } from './common';

const ItemDetailText = ({ item }) => {
  const { innerContainerStyle } = itemstyle;

  const dummy = [];
  return (
    <View>
            <View>
                <Text style={{ paddingLeft: 5 }}>{item.brand}</Text>
                <Text style={{ paddingLeft: 5 }}>{item.name}</Text>
                <Picker
                style={{ flex: 1, width: 100 }}
                selectedValue={dummy}
                onValueChange={value => dummy({ value })}
                mode="dropdown"
                >
                <Picker.Item label="1kg" value="1kg" />
                <Picker.Item label="2kg" value="2kg" />
                <Picker.Item label="3kg" value="3kg" />
              </Picker>
            </View>
              <View style={innerContainerStyle}>
              <Text>Rs.{item.price}</Text>
              </View>
                <Button>Add</Button>
              </View>

);
};

export default ItemDetailText;
