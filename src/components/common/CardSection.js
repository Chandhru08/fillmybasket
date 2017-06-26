import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
    {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 0.5,

    borderColor: '#ffe6e6',
    borderBottomWidth: 1,
    padding: 2,
    //height: 80,
    backgroundColor: '#fff',
    flexDirection: 'row',
    position: 'relative',
    //From Card
    elevation: 2,
    opacity: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 8
  }
};

export default CardSection;
