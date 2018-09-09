import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Splash from './screens/Splash';
import SplashScreen from 'react-native-splash-screen';
import MainContainer from './screens/MainContainer';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { splash: true };
  }

  changeSplashState = (value) => {
    this.setState({ splash: false });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'gray' }}>
        {this.openCloseSplash()}
      </View>
    );
  }

  openCloseSplash() {
    if (this.state.splash) {
      return (<Splash changeSplashState={this.changeSplashState} />);
    } else {
      console.log("MAIN!");
      return (<MainContainer />);
    }
  }

  componentDidMount() {
    SplashScreen.hide();
  }
}