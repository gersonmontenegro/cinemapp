import React, { PureComponent } from 'react';
import { View, TouchableHighlight, Animated, Text } from 'react-native'
import { screenWidth } from '../../assets/css/general';
import Process from './../../providers/Process';
import { IMAGE_URL } from './../../providers/Data';
import TextInfo from './TextInfo';
import BottomButtons from './BottomButtons';
import Pie from 'react-native-pie';

class MainMovie extends PureComponent {
    constructor(props) {
        super(props);
        this.Process = Process.getInstance();
        this.state = { genres: '', average: 0 };
    }

    loadGenres = () => {
        if (this.props.data.genre_ids != undefined) {
            this.Process.getGenres(this.props.data.genre_ids.join(",")).then((data) => {
                this.setState({ genres: data });
            });
        }
        if (this.props.data.vote_average != undefined) {
            this.setState({ average: parseInt(parseFloat(this.props.data.vote_average) * 10) })
        }
    }

    componentDidUpdate() {
        this.loadGenres();
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
                        series={[this.state.average]}
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
                        }}>{this.state.average}%</Text>
                    </View>
                </View>
                <TextInfo top={-165} fontSize={15} text={this.Process.toUpper(this.Process.exists(this.props.data.title))} />
                <TextInfo center={true} top={-180} fontSize={12} text={this.state.genres} />
                <TextInfo top={-195} fontSize={12} text={this.Process.cutText(this.Process.exists(this.props.data.overview), 95)} />
                <BottomButtons top={-190} />
            </Animated.View>
        );
    }

}

export default MainMovie;