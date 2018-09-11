import React, { PureComponent } from 'react';
import { Animated, Text } from 'react-native';
import { MainMovieStyle, screenWidth } from './../../assets/css/general';

class TextInfo extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Animated.View style={{ width: screenWidth, height: 30 }}>
                <Text style={[MainMovieStyle.textMainMovie, {
                    fontSize: this.props.fontSize,
                    alignSelf: this.props.center ? "center" : "flex-start",
                    top: this.props.top,
                }]}>
                    {this.props.text}
                </Text>
            </Animated.View>
        );
    }

}

export default TextInfo;