import React, { PureComponent } from 'react'
import { Animated, TouchableHighlight } from 'react-native'
import { YTStyle, screenWidth, finalHeighMainMovie, backColorToRemoveWink, CLOSE_ICON } from '../../assets/css/general';
import YouTube from 'react-native-youtube';
import BasicButton from '../general/BasicButton';

class YouTubePlayer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            play: this.props.play,
            fullscreen: this.props.fullscreen,
            loop: this.props.loop,
            isReady: this.props.isReady,
            idvideo: this.props.idvideo,
            movieData: this.props.movieData
        };
        this.onPressClose = this.onPressClose.bind(this);
    }

    componentDidUpdate() {
        console.log("LOAD THIS MOVIE: " + JSON.stringify(this.props.movieData));

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
                <BasicButton onPressClose={this.onPressClose} buttonStyle={YTStyle.closeButton} icon={CLOSE_ICON} />
            </Animated.View>
        );
    }

}

export default YouTubePlayer;