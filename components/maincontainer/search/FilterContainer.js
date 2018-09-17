import React, { PureComponent } from 'react';
import { Animated, TextInput } from 'react-native'
import CheckBoxSearch from './CheckBoxSearch';
import { blueCheckBox, greenCheckBox, screenWidth } from '../../../assets/css/general';

class FilterContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Animated.View style={{ top: 3, width: screenWidth, flexDirection: 'row' }}>
                <CheckBoxSearch color={blueCheckBox} name="Popular" opt={this.props.optPopular} value={1} onPress={() => this.props.setCheckBoxState(1)} width={80} />
                <CheckBoxSearch color={blueCheckBox} name="Top rated" opt={this.props.optTopRated} value={2} onPress={() => this.props.setCheckBoxState(2)} width={100} />
                <CheckBoxSearch color={blueCheckBox} name="Upcoming" opt={this.props.optUpcoming} value={3} onPress={() => this.props.setCheckBoxState(3)} width={100} />
                <CheckBoxSearch color={greenCheckBox} name="Online" opt={this.props.optOnline} value={4} onPress={() => this.props.setCheckBoxState(4)} width={100} />
            </Animated.View>
        );
    }
}

export default FilterContainer;