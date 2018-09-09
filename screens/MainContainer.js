import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import HeaderComponent from './../components/general/HeaderComponent';

class MainContainer extends PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View>
                <HeaderComponent />
                <Text>
                    Main CONTAINER!!
                </Text>
            </View>
        );
    }

}

export default MainContainer;