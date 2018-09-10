import React, { PureComponent } from 'react';
import { TouchableHighlight, View, Animated } from 'react-native';
import { screenWidth } from '../../assets/css/general';
import BottomButton from './BottomButton';

class BottomButtons extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Animated.View style={{ top: this.props.top }}>
                <View style={{ width: screenWidth, flexDirection: "row", height: 30 }}>
                    <BottomButton width={30} height={30} type={0} alignItems="flex-end" />
                    <BottomButton width={100} height={80} type={1} alignItems="center" />
                    <BottomButton width={30} height={30} type={2} alignItems="flex-start" />
                </View>
            </Animated.View>
        );
    }

}

export default BottomButtons;