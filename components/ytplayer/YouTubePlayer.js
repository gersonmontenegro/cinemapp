import React, { PureComponent } from 'react'
import { Animated, TouchableHighlight } from 'react-native'
import { screenWidth, finalHeighMainMovie } from '../../assets/css/general';
import YouTube from 'react-native-youtube';

class YouTubePlayer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            fullscreen: false,
            loop: false,
            isReady: true,
            idvideo: ''
        };
        this.onPressClose = this.onPressClose.bind(this);
    }

    onPressClose = () => {
        this.props.changeMainMoviePosition(0);
    }

    render() {
        return (
            <Animated.View style={{ width: screenWidth, height: 30 }}>
                <YouTube
                    videoId={this.state.idvideo}
                    play={this.state.play}
                    fullscreen={this.state.fullscreen}
                    loop={this.loop}
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}
                    style={{ alignSelf: 'stretch', height: finalHeighMainMovie }}
                />
                <TouchableHighlight onPress={() => this.onPressClose()} style={{ position: 'absolute', top: 0, left: 0, width: 30, height: 30, borderRadius: 20, backgroundColor: 'white' }}>
                    <Animated.Image style={{ width: 30, height: 30 }} source={require('./../../assets/img/icon/close.png')} />
                </TouchableHighlight>
            </Animated.View>
        );
    }

}

export default YouTubePlayer;