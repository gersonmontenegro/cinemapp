import React, { PureComponent } from 'react';
import { Animated, Image } from 'react-native'

class MainMovie extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Animated.View style={{ height: this.props.height }}>
                <Image source={require('./../../assets/img/movie.jpg')} />
            </Animated.View>
        );
    }

}

export default MainMovie;