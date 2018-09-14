import React, { PureComponent } from 'react'
import { TouchableHighlight, Animated } from 'react-native'
import { backColorToRemoveWink, CLOSE_ICON, defaultIconSize } from '../../assets/css/general';

class BasicButton extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight
                onPress={() => this.props.onPressClose()}
                underlayColor={backColorToRemoveWink}
                style={this.props.buttonStyle}>
                <Animated.Image
                    style={{
                        width: this.props.width != null ? this.props.width : defaultIconSize,
                        height: this.props.height != null ? this.props.height : defaultIconSize
                    }}
                    source={this.props.icon} />
            </TouchableHighlight>
        );
    }
}

export default BasicButton;