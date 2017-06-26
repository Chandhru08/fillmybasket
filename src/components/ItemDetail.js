import React from 'react';
import { View, Text, Image, Picker } from 'react-native';
import { Button } from './common';
import CardSection from './common/CardSection';
import styles from '../styles/Item.Style';

const ItemDetail = ({ item }) => {
    const { cardSectionStyle,
            imageContainerStyle,
            detailStyle,
            innerContainerStyle,
            imageStyle,
            priceTextStyle
          } = styles;

const dummy = [];
      return (
        <CardSection style={cardSectionStyle}>
            <View style={imageContainerStyle}>
            <Image
             style={imageStyle}
             source={{ uri: item.image[0] }}
            />
            </View>
            <View style={detailStyle}>
            <View>
                <Text style={{ paddingLeft: 5 }}>{item.brand}</Text>
                <Text style={{ paddingLeft: 5 }}>{item.name}</Text>
                <Picker
                style={{ width: 200 }}
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
            <View style={priceTextStyle}>
              <Text>Rs.{item.price}</Text>
              <Text>Rs.{item.price}</Text>
            </View>
            <View>
              <Button> Add </Button>
            </View>
            </View>

            </View>
          </CardSection>

    );
  };

export default ItemDetail;
