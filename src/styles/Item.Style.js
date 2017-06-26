import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    cardSectionStyle: {
      borderColor: '#000'
    },
      imageContainerStyle: {
      //flex: 0.5,
      justifyContent: 'space-around',
      marginLeft: 10,
      marginRight: 10
    },
      imageStyle: {
      height: 100,
      width: 100
    },
    innerContainerStyle: {
      paddingLeft: 5, //for Rs text
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    detailStyle: {

      flexDirection: 'column'
    },
    priceTextStyle: {
      flexDirection: 'column'
    },
    descriptionContainerStyle: {
      borderColor: '#333333',
      elevation: 2,
      opacity: 2,
      flex: 0.5
    },
    ImageCarouselStyle: {
      width: 375,
      color: '#000',
      //flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000'
    }
});
