import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from './index.style';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const cardHeight = viewportHeight * 0.1;
const cardWidth = wp(100);

export const cardHolderWidth = viewportWidth;
export const itemHorizontalMargin = wp(5);
export const itemWidth = cardWidth + (itemHorizontalMargin * 2);

export default StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center',
    backgroundColor: '#F4F4F4',
    height: cardHeight,
    width: cardWidth,
    marginTop: 7,


    marginBottom: 2
  }
});
