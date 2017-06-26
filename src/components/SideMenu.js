import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import JellySideMenu from 'react-native-jelly-side-menu';

class JellySideMenuPage extends Component {

  constructor(props) {
    super(props);
    this.itemStyle = { padding: 16, backgroundColor: 'transparent' };
    this.itemTextStyle = { color: '#000000', fontWeight: 'bold', fontSize: 20 };
    this.renderMenu = this.renderMenu.bind(this);
  }

  renderItem(text, onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={this.itemStyle}>
          <Text style={this.itemTextStyle}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  renderMenu() {
    return (
      <View>
        {this.renderItem('Jelly Side Menu by Vanport', () => {})}
        {this.renderItem('Toggle Side Menu', () => { this.jsm.toggleSideMenu(); })}
        {this.renderItem('Close Side Menu', () => { this.jsm.toggleSideMenu(false); })}
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FF6644' }}>
        <JellySideMenu
          ref={(view) => { this.jsm = view; }}
          fill={'#FFF'} fillOpacity={1.0}
          renderMenu={this.renderMenu}
        >


          <Text style={this.itemTextStyle}>Openm Jelly Menu</Text>

        </JellySideMenu>
      </View>
    );
  }
}

export default JellySideMenuPage;
