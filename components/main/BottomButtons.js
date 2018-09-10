import React, { PureComponent } from 'react';
import { TouchableHighlight, View, Animated } from 'react-native';
import { screenWidth } from '../../assets/css/general';

class BottomButtons extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <Animated.View style={{ top: -130 }}>
            <Animated.View style={{ top: this.props.top }}>
                <View style={{ width: screenWidth, flexDirection: "row", height: 30 }}>
                    <TouchableHighlight style={{ width: (screenWidth / 3), backgroundColor: '#00ff0000', justifyContent: "center", alignItems: "flex-end" }}>
                        <Animated.Image style={{ width: 30, height: 30 }} source={require('./../../assets/img/heart_empty.png')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={{ width: (screenWidth / 3), backgroundColor: '#ff00ff00', justifyContent: "center", alignItems: "center" }}>
                        <Animated.Image style={{ width: 100, height: 80 }} source={require('./../../assets/img/play.png')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={{ width: (screenWidth / 3), backgroundColor: '#00ff0000', justifyContent: "center", alignItems: "flex-start" }}>
                        <Animated.Image style={{ width: 30, height: 30 }} source={require('./../../assets/img/more_empty.png')} />
                    </TouchableHighlight>
                </View>
            </Animated.View>
        );
    }

}

export default BottomButtons;