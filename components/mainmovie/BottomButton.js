import React, { PureComponent } from 'react';
import { TouchableHighlight, View, Animated } from 'react-native';
import { screenWidth } from '../../assets/css/general';
import Process from './../../providers/Process';

class BottomButton extends PureComponent {
    constructor(props) {
        super(props);
        this.onPressButton = this.onPressButton.bind(this);
        this.Process = Process.getInstance();
    }

    onPressButton = () => {

    }

    render() {
        return (
            <TouchableHighlight onPress={() => this.onPressButton()} style={{ width: (screenWidth / 3), backgroundColor: '#00ff0000', justifyContent: "center", alignItems: this.props.alignItems }}>
                <Animated.Image style={{ width: this.props.width, height: this.props.height }} source={this.Process.getIconType(this.props.type)} />
            </TouchableHighlight>
        );
    }
}

export default BottomButton;