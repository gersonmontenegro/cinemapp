import React, { PureComponent } from 'react';
import { View, Text } from 'react-native'
import Pie from 'react-native-pie';

class PieRank extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ top: this.props.top }}>
                <Pie
                    radius={30}
                    innerRadius={25}
                    series={[this.props.average]}
                    colors={['#f00']}
                    backgroundColor='white'
                />
                <View style={{
                    position: 'absolute',
                    width: 60,
                    height: 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        alignSelf: 'center',
                        fontFamily: 'ObliviousFont',
                        fontSize: 16,
                    }}>{this.props.average}%</Text>
                </View>
            </View>
        );
    }

}

export default PieRank;