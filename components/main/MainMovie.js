import React, { PureComponent } from 'react';
import { View, TouchableHighlight, Animated, Text } from 'react-native'
import { IMAGE_URL, screenWidth } from '../../assets/css/general';
import Process from './../../providers/Process';
import TextInfo from './TextInfo';
import BottomButtons from './BottomButtons';

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
                <BottomButtons top={-130} />

            </Animated.View>
        );
    }

}

export default MainMovie;