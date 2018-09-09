import React, { PureComponent } from 'react';
import { Animated } from 'react-native';

class HeaderComponent extends PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Animated.View>
                <Animated.Text>
                    HEADER
                </Animated.Text>
            </Animated.View>
        );
    }

}

export default HeaderComponent;