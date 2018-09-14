import React, { PureComponent } from 'react';
import { TouchableHighlight, Animated } from 'react-native';
import { screenWidth, HEART_FULL_ICON } from '../../assets/css/general';
import Process from './../../providers/Process';

class BottomButton extends PureComponent {
    constructor(props) {
        super(props);
        this.onPressButton = this.onPressButton.bind(this);
        this.Process = Process.getInstance();
        this.state = { source: this.Process.getIconType(this.props.type) };
    }

    onPressButton = () => {
        if (this.props.type == 0) {
            this.setState({ source: HEART_FULL_ICON });
        } else if (this.props.type == 1) {
            this.props.changeMainMoviePosition(-screenWidth);
        }
    }

    render() {
        return (
            <TouchableHighlight underlayColor={'#ffffff00'} onPress={() => this.onPressButton()} style={{ width: (screenWidth / 3), backgroundColor: '#ffffff00', justifyContent: "center", alignItems: this.props.alignItems }}>
                <Animated.Image
                    style={{ width: this.props.width, height: this.props.height }}
                    source={this.state.source} />
            </TouchableHighlight>
        );
    }
}

export default BottomButton;