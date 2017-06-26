import React, { Component } from 'react';
import { View } from 'react-native';
import ItemDescription from './components/ItemDescription';
import ItemList from './components/ItemList';
//import CategoryScroll from './components/CategoryScroll';
//import SideDrawer from './components/Drawer';

class App extends Component {
  render() {
    return (
      <View>
      <ItemDescription />
      </View>
    );
  }
}

export default App;
