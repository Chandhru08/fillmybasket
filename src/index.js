import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../src/styles/SliderEntry.style';
import SliderEntry from '../src/components/SliderEntry';
import styles from './styles/index.style';
import { ENTRIES1, ENTRIES2 } from '../src/static/entries';
import Header from './components/common/Header';
//import HomeCategories from './components/HomeCategories';
//import ItemList from './components/ItemList';

export default class example extends Component {

    getSlides(entries) {
        if (!entries) {
            return false;
        }

        return entries.map((entry, index) => {
            return (
                <SliderEntry
                  key={`carousel-entry-${index}`}
                  even={(index + 1) % 2 === 0}
                  {...entry}
                />
            );
        });
    }

    get example1() {
        return (
            <Carousel
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              firstItem={1}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.6}
              enableMomentum={false}
              autoplay
              autoplayDelay={500}
              autoplayInterval={4500}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContainer}
              showsHorizontalScrollIndicator={false}
              snapOnAndroid
              removeClippedSubviews={false}
            >
                { this.getSlides(ENTRIES1) }
            </Carousel>
        );
    }

    get example2() {
        return (
            <Carousel
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              enableMomentum
              autoplay
              autoplayDelay={500}
              autoplayInterval={4500}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContainer}
              showsHorizontalScrollIndicator={false}
              snapOnAndroid
              removeClippedSubviews={false}
            >
                  { this.getSlides(ENTRIES2) }
              </Carousel>
        );
    }

    render() {
        return (
          <View style={styles.container}>
            <Header headerText='Fill My Basket' />
            <ScrollView
              style={styles.scrollview}
              indicatorStyle={'white'}
              scrollEventThrottle={200}
            >
                { this.example1 }

              <View style={{ alignItems: 'center', paddingTop: 30 }}>

                <Text style={{ fontSize: 16 }}>
                  Vasanth
                </Text>
              </View>

            </ScrollView>

          </View>
        );
    }
}
