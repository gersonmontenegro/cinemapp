import React, { PureComponent } from 'react';
import { View, TouchableHighlight, Animated, Text } from 'react-native'
import { IMAGE_URL, screenWidth } from '../../assets/css/general';
import Process from './../../providers/Process';
import TextInfo from './TextInfo';

class MainMovie extends PureComponent {
    constructor(props) {
        super(props);
        this.Process = Process.getInstance();
    }

    render() {
        return (
            <Animated.View style={{ height: this.props.height }}>
                <Animated.Image
                    style={{ width: screenWidth, height: this.props.height }}
                    source={{ uri: IMAGE_URL + this.props.data.backdrop_path }} />

                <TextInfo top={-105} fontSize={15} text={this.Process.toUpper(this.props.data.title)} />
                <TextInfo center={true} top={-118} fontSize={12} text="Action | Fiction | Fantasy" />
                <TextInfo top={-135} fontSize={12} text={this.Process.cutText(this.props.data.overview, 95)} />


                <Animated.View style={{ top: -130 }}>
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
            </Animated.View>
        );
    }

}

export default MainMovie;