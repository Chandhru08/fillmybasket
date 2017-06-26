import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import ItemDetail from './ItemDetail';
import jsonData from '../static/content/data.json';

class ItemList extends Component {
  state = { items: [] };
  componentWillMount() {
    this.setState({ items: jsonData });
  }
  renderItems() {
    return this.state.items.map(item =>
      <ItemDetail key={item.id} item={item} />);
  }
  render() {
    return (
      <ScrollView>
      {this.renderItems()}
      </ScrollView>
    );
  }
}

export default ItemList;
