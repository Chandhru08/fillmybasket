import React from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import index from './';

export const RouComponent = () => {
  return (
    <Router>
      <Scene key="ItemList" component={index} tittle="Categrories" />
    </Router>
  );
};
