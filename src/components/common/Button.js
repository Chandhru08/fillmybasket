import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ whenPress, children }) => {
  return (
    <TouchableOpacity onPress={whenPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '200',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    width: 100,
    //alignSelf: 'stretch',
    backgroundColor: '#ff4d4d',
    marginLeft: 10,
    marginRight: 5
  }
};

export { Button };
