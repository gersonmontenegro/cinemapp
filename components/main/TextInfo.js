import React, { PureComponent } from 'react';
import { Animated, Text } from 'react-native';
import { screenWidth } from './../../assets/css/general';

class TextInfo extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Animated.View style={{ width: screenWidth, height: 30 }}>
                <Text style={{
                    top: this.props.top,
                    left: 5,
                    fontFamily: 'ObliviousFont',
                    fontSize: this.props.fontSize,
                    color: 'white',
                    backgroundColor: '#00000055',
                    alignSelf: this.props.center ? "center" : "flex-start"
                }}>
                    {this.props.text}
                </Text>
            </Animated.View>
        );
    }

}

export default TextInfo;