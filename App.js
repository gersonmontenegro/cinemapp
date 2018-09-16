import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Splash from './screens/Splash';
import SplashScreen from 'react-native-splash-screen';
import MainContainer from './screens/MainContainer';
import { screenWidth } from './assets/css/general';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      splash: true,
      isReady: true,
      status: null,
      quality: null,
      error: null
    };
  }

  changeSplashState = (value) => {
    this.setState({ splash: false });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {this.openCloseSplash()}
      </View>
    );
  }

  openCloseSplash() {
    if (this.state.splash) {
      return (<Splash changeSplashState={this.changeSplashState} />);
    } else {
      return (<MainContainer />);
    }
  }

  componentDidMount() {
    SplashScreen.hide();
  }
}