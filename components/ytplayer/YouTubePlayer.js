import React, { PureComponent } from 'react'
import { Animated } from 'react-native'
import { YTStyle, screenWidth, finalHeighMainMovie, CLOSE_ICON } from '../../assets/css/general';
import YouTube from 'react-native-youtube';
import BasicButton from '../general/BasicButton';
import FetchData from './../../providers/FetchData';
import Process from './../../providers/Process';
import Actions from './../../providers/Actions';
import { VIDEOS_URL } from '../../providers/Data';
import { API_KEY } from '../../providers/ApiAuth';

class YouTubePlayer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            play: this.props.play,
            fullscreen: this.props.fullscreen,
            loop: this.props.loop,
            isReady: this.props.isReady,
            idvideo: this.props.idvideo,
            movieData: this.props.movieData,
            videoList: [],
        };
        this.onPressClose = this.onPressClose.bind(this);
        this.FetchData = FetchData.getInstance();
        this.Process = Process.getInstance();
        this.Actions = Actions.getInstance();
    }

    componentWillReceiveProps() {
        this.setState({ movieData: this.props.movieData });
        this.setState({ play: this.props.play });
        if (this.props.movieData.item != undefined) {
            this.updateVideoData();
        }
    }

    updateVideoData() {
        if (this.props.movieData.item != undefined) {
            let url_videos = VIDEOS_URL.replace('%ID_VIDEO%', this.props.movieData.item.id) + API_KEY;
            this.FetchData.getData(url_videos).then(
                (data) => {
                    if (parseInt(data.results.length) > 0) {
                        if (this.Actions.playVideo) {
                            this.setState({ videoList: data.results });
                            this.setState({ idvideo: data.results[0].key });
                        } else {
                            this.setState({ idvideo: '0' });
                        }
                    }
                }
            );
        }
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