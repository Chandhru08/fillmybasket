import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';

export default class GaleryCarousel extends Component {

  constructor(props) {
    super(props);
    this.width = Dimensions.get('window').width;
    this.state = {
      defaultImageIndex: this.props.defaultImageIndex,
    };
  }

  changeImageIndex(defaultImageIndex) {
    this.setState({ defaultImageIndex });
  }

  createImages(elt, key) {
    const { joinFirst, getImageFrom, joinLast } = this.props;
    return (
      <TouchableOpacity
        key={key}
        style={{ height: (this.props.mainHeight / 3.73) }}
        onPress={() => { this.changeImageIndex(key); }}
        onLongPress={() => this.props.onLongPress(key, elt)}
      >
        <Image
        style={{ height: (this.props.mainHeight / 3.73), width: 130 }}
        source={{ uri: `${joinFirst}${elt[getImageFrom]}${joinLast}` }}
        />
      </TouchableOpacity>
    );
  }


  render() {
    const { data, joinFirst, joinLast, getImageFrom } = this.props;
    const { defaultImageIndex } = this.state;
    if (data.length > 0) {
      return (
        <View style={{ elevation: 5, borderColor: '#000' }}>
          <View style={{ height: this.props.mainHeight, padding: 0 }}>
            <Image
            source={{ uri: `${joinFirst}${data[defaultImageIndex][getImageFrom]}${joinLast}` }}
             style={{ width: this.width, height: this.props.mainHeight, flex: 1 }}
             resizeMode='cover'
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <ScrollView
              ref={(scrollView) => { this.scrollView = scrollView; }}
              automaticallyAdjustContentInsets={false}
              onScroll={() => { console.log('onScroll!'); }}
              scrollEventThrottle={200}
              horizontal={true}
              style={{ height: (this.props.mainHeight / 3.73) }}
            >
              {data.map((elt, key) => this.createImages(elt, key))}
            </ScrollView>
          </View>
        </View>
      );
    }
    if (data.length === 0) {
      return (<View />);
    }
  }
}

GaleryCarousel.defaultProps = {
  data: [],
  joinLast: '',
  joinFirst: '',
  defaultImageIndex: 0,
  mainHeight: 280,
  mainImageComponents: <View />,
  getImageFrom: 'path'
};
