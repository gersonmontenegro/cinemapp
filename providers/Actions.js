import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
import { defaultTimeAnimation } from './../assets/css/general';

class Actions extends PureComponent {
    playVideo = false;

    static instance = null;

    static createInstance() {
        var object = new Actions();
        return object;
    }

    static getInstance() {
        if (!Actions.instance) {
            Actions.instance = Actions.createInstance();
        }
        return Actions.instance;
    }

    changeVariable(variable, v, delay) {
        return Animated.timing(
            variable, {
                toValue: v,
                duration: defaultTimeAnimation,
                delay: delay
            }
        );
    }

}

export default Actions;