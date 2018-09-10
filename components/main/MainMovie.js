import React, { PureComponent } from 'react';
import { TouchableHighlight, Animated, Text } from 'react-native'
import { IMAGE_URL, screenWidth } from '../../assets/css/general';
import Process from './../../providers/Process';

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
                <Animated.View style={{ width: screenWidth, height: 30 }}>
                    <Text style={{
                        top: -90,
                        left: 5,
                        fontFamily: 'ObliviousFont',
                        fontSize: 15,
                        color: 'white',
                        backgroundColor: '#00000055'
                    }}>
                        {this.Process.toUpper(this.props.data.title)}
                    </Text>
                </Animated.View>
                <Animated.View style={{ width: screenWidth, height: 30, alignItems: 'center' }}>
                    <Text style={{
                        top: -103,
                        fontFamily: 'ObliviousFont',
                        fontSize: 12,
                        color: 'white',
                        backgroundColor: '#00000055',
                        alignSelf: "center"
                    }}>
                        Action | Fiction | Fantasy
                    </Text>
                </Animated.View>
                <Animated.View style={{ width: screenWidth, height: 30 }}>
                    <Text style={{
                        top: -120,
                        left: 5,
                        width: screenWidth,
                        fontFamily: 'ObliviousFont',
                        fontSize: 12,
                        color: 'white',
                        backgroundColor: '#00000055',
                    }}>
                        {this.Process.cutText(this.props.data.overview, 95)}
                    </Text>
                </Animated.View>
                <Animated.View >
                    <TouchableHighlight>
                        <Text>
                            PLAY
                        </Text>
                    </TouchableHighlight>
                </Animated.View>
            </Animated.View>
        );
    }

}

export default MainMovie;