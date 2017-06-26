import React, { Component } from 'react';
import Drawer from 'react-native-drawer';

import SideBarContent from './SideBarContent';
import HomeCategories from './HomeCategories';

export default class SideDrawer extends Component {
  state={
    drawerOpen: false,
    drawerDisabled: false,
  };
  closeDrawer = () => {
    this.drawer.close();
  };
  openDrawer = () => {
    this.drawer.open();
  };
  render() {
    return (
      <Drawer
        ref={(ref) => this.drawer = ref}
        type="static"
        content={
          <SideBarContent closeDrawer={this.closeDrawer} />
        }
        acceptDoubleTap
        openDrawerOffset={0.35}
        styles={{ main: { shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15 } }}
        onOpen={() => {
          console.log('onopen');
          this.setState({ drawerOpen: true });
        }}
        onClose={() => {
          console.log('onclose');
          this.setState({ drawerOpen: false });
        }}
        captureGestures
        tweenDuration={100}
        negotiatePan={true}
        panThreshold={0.08}
        panOpenMask={0.35}
        disabled={this.state.drawerDisabled}
        tweenHandler={Drawer.tweenPresets.parallax}
      >
        <Drawer
          captureGestures
          negotiatePan
          ref={(ref) => this.drawer2 = ref}
          onOpen={() => {
            console.log('onopenInner');
          }}
          onClose={() => {
            console.log('oncloseInner');
          }}
          side="right"
        >
          <HomeCategories />
        </Drawer>
      </Drawer>
    );
  }
}
