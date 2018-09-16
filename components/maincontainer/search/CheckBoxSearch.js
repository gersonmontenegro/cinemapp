import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native'
import { CheckBox, Text } from 'native-base';

class CheckBoxSearch extends PureComponent {
    constructor(props) {
        super(props);
        this.bindingFunctions();
    }

    bindingFunctions() {
        this.onPressCheckBox = this.onPressCheckBox.bind(this);
    }

    onPressCheckBox = () => {
        this.props.onPress(this.props.value);
    }

    render() {
        return (
            <TouchableOpacity style={{ flexDirection: 'row', width: this.props.width}} 
                onPress={this.onPressCheckBox} >
                <CheckBox color={this.props.color} onPress={this.onPressCheckBox} checked={this.props.opt} />
                <Text style={{ left: 13, fontFamily: 'JosefinSans' }}>{this.props.name}</Text>
            </TouchableOpacity>
        );
    }

}

export default CheckBoxSearch;