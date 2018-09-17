import React, { PureComponent } from 'react';
import { Animated, TextInput } from 'react-native'
import CheckBoxSearch from './CheckBoxSearch';
import { blueCheckBox, greenCheckBox, screenWidth } from '../../../assets/css/general';

class FilterContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.settingState();
    }

    settingState() {
        this.state = {
            optPopular: false,
            optTopRated: false,
            optUpcoming: false,
            optOnline: false,
        }
    }

    setCheckBoxState = (value) => {
        switch (value) {
            case 1: {
                this.setState({ optPopular: !this.state.optPopular });
                this.setState({ optOnline: false });
                break;
            }
            case 2: {
                this.setState({ optTopRated: !this.state.optTopRated });
                this.setState({ optOnline: false });
                break;
            }
            case 3: {
                this.setState({ optUpcoming: !this.state.optUpcoming });
                this.setState({ optOnline: false });
                break;
            }
            case 4: {
                this.setState({ optOnline: !this.state.optOnline });
                this.setState({ optPopular: false });
                this.setState({ optTopRated: false });
                this.setState({ optUpcoming: false });
                break;
            }
        }
    }

    render() {
        return (
            <Animated.View style={{ top: 3, width: screenWidth, flexDirection: 'row' }}>
                <CheckBoxSearch color={blueCheckBox} name="Popular" opt={this.state.optPopular} value={1} onPress={this.setCheckBoxState} width={80} />
                <CheckBoxSearch color={blueCheckBox} name="Top rated" opt={this.state.optTopRated} value={2} onPress={this.setCheckBoxState} width={100} />
                <CheckBoxSearch color={blueCheckBox} name="Upcoming" opt={this.state.optUpcoming} value={3} onPress={this.setCheckBoxState} width={100} />
                <CheckBoxSearch color={greenCheckBox} name="Online" opt={this.state.optOnline} value={4} onPress={this.setCheckBoxState} width={100} />
            </Animated.View>
        );
    }

}

export default FilterContainer;