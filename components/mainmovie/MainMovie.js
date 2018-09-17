import React, { PureComponent } from 'react';
import { View, Animated, Text } from 'react-native'
import { screenWidth } from '../../assets/css/general';
import Process from './../../providers/Process';
import { IMAGE_URL } from './../../providers/Data';
import TextInfo from './TextInfo';
import BottomButtons from './BottomButtons';
import Pie from 'react-native-pie';
import YouTubePlayer from '../ytplayer/YouTubePlayer';

class MainMovie extends PureComponent {
    constructor(props) {
        super(props);
        this.creatingSingletonGroup();
        this.settingState();
    }

    creatingSingletonGroup() {
        this.Process = Process.getInstance();
    }

    settingState() {
        this.state = { genres: '', average: 0, backdrop_path: '', title: '', overview: '', poster_path: '' };
    }

    settingBasicDetails = () => {
        this.loadGenres();
        this.settingAvergage();
    }

    getGenreStringList() {
        if (typeof (this.props.data.item.genre_ids) == 'object') {
            return this.props.data.item.genre_ids.join(",");
        } else {
            return this.props.data.item.genre_ids;
        }
    }

    loadGenres = () => {
        if (this.props.data.item.genre_ids != undefined) {
            this.Process.getGenres(this.getGenreStringList()).then((data) => {
                this.setState({ genres: data });
            });
        }
    }

    settingAvergage() {
        if (this.props.data.item.vote_average != undefined) {
            this.setState({ average: parseInt(parseFloat(this.props.data.item.vote_average) * 10) })
        }
    }

    componentDidUpdate() {
        this.setState({ backdrop_path: this.Process.existsImageBackground(this.props.data.item.backdrop_path, this.state) });
        this.setState({ poster_path: this.props.data.item.poster_path });
        this.setState({ title: this.props.data.item.title });
        this.setState({ overview: this.props.data.item.overview });
        this.settingBasicDetails();
    }

    render() {
        return (
            <Animated.View style={{ height: this.props.height }}>
                <Animated.Image
                    style={{ width: screenWidth, height: this.props.height }}
                    source={{ uri: IMAGE_URL + this.Process.existsImageBackground(this.props.data.item.backdrop_path, this.state) }}
                />
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
                <TextInfo top={-165} fontSize={20}
                    text={this.Process.toUpper(this.Process.exists(this.state.title))}
                />
                <TextInfo center={true} top={-178} fontSize={15}
                    text={this.state.genres}
                />
                <TextInfo top={-195} fontSize={15}
                    text={this.Process.cutText(this.Process.exists(this.state.overview), 95)}
                />
                <BottomButtons top={-190} changeMainMoviePosition={this.props.changeMainMoviePosition} />
            </Animated.View>
        );
    }

}

export default MainMovie;