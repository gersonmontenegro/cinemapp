import React, { PureComponent } from 'react';
import { View, TouchableHighlight, Animated, Text } from 'react-native'
import { IMAGE_URL, screenWidth } from '../../assets/css/general';
import Process from './../../providers/Process';
import TextInfo from './TextInfo';
import BottomButtons from './BottomButtons';
import Pie from 'react-native-pie';

class MainMovie extends PureComponent {
    constructor(props) {
        super(props);
        this.Process = Process.getInstance();
    }

    render() {
        return (
            <Animated.View style={{ height: this.props.height }}>
                <Animated.Image
                    style={{ width: screenWidth, height: this.props.height }}
                    source={{ uri: IMAGE_URL + this.props.data.backdrop_path }} />
                <View style={{ top: -280 }}>
                    <Pie
                        radius={30}
                        innerRadius={25}
                        series={[60]}
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
                        }}>60%</Text>
                    </View>
                </View>
                <TextInfo top={-165} fontSize={15} text={this.Process.toUpper(this.props.data.title)} />
                <TextInfo center={true} top={-180} fontSize={12} text="Action | Fiction | Fantasy" />
                <TextInfo top={-195} fontSize={12} text={this.Process.cutText(this.props.data.overview, 95)} />
                <BottomButtons top={-190} />
            </Animated.View>
        );
    }

}

export default MainMovie;