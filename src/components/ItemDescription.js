import React, { Component } from 'react';
import { Text, View, Picker, ScrollView, Image } from 'react-native';
//import GaleryCarousel from './carousel/GaleryCarousel';
import { Button } from './common';
//import TabBarNav from './TabBarNav';
import styles from '../styles/Item.Style';
import jsonData from '../static/content/data.json';
import TabBarNav from './TabBarNav';
import GaleryCarousel from './carousel/GaleryCarousel';

class ItemDescription extends Component {
    state={ items: [] }
    componentWillMount() {
      this.setState({ items: jsonData });
    }

    renderImages() {
      return this.state.images.map((image, index) =>
        <Image
        key={index}
        style={styles.imageStyle}
        source={{ uri: image }}
        />);
    }

  render() {
  const { innerContainerStyle, priceTextStyle, descriptionContainerStyle } = styles;
  const dummy = [];
  const imagesDemo = [
    {
        path: '/UYiroysl.jpg'
    },
    {
        path: '/UPrs1EWl.jpg'
    },
    {
        path: '/MABUbpDl.jpg'
    },
    {
        path: '/KZsmUi2l.jpg'
    },
    {
        path: '/2nCt3Sbl.jpg'
    },
    {
        path: '/lceHsT6l.jpg'
    }
];
  return (
    <View>
      <View style={descriptionContainerStyle}>
        <View>
            <Text style={{ paddingLeft: 5 }}>Brand</Text>
            <Text style={{ paddingLeft: 5 }}>Name</Text>
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
            <Text>Rs 13 off</Text>
            <Text>Rs 100</Text>
          </View>
          <View>
            <Text> Rs 87 </Text>
          </View>
          <View>
            <Button> Add </Button>
          </View>
        </View>
      </View>
          <ScrollView style={{ flex: 1 }}>
                    <GaleryCarousel
                    data={imagesDemo}
                    joinFirst={'http://i.imgur.com'}
                    defaultImageIndex={0}
                    onLongPress={(key, element) => { console.log(key, element); }}
                    />
                    <TabBarNav />
          </ScrollView>
    </View>
);
}
}

export default ItemDescription;
