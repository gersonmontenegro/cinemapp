import React, { PureComponent } from 'react';
import { ScrollView, Animated, View, Text } from 'react-native';
import HeaderComponent from './../components/general/HeaderComponent';
import { _barHeight, screenWidth, initHeighMainMovie } from './../assets/css/general';
import Actions from './../providers/Actions';
import MainMovie from './../components/mainmovie/MainMovie';
import CategoriesContainer from './../components/categories/CategoriesContainer';
import YouTubePlayer from '../components/ytplayer/YouTubePlayer';
import SearchContainer from '../components/maincontainer/search/SearchContainer';
import MovieDetails from '../components/mainmovie/MovieDetails';

class MainContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.settingState();
        this.creatingAnimatedValues();
        this.creatingSingletonGroup();
    }

    creatingSingletonGroup() {
        this.Actions = Actions.getInstance();
    }

    creatingAnimatedValues() {
        this.mainMovieHeight = new Animated.Value(0);
        this.mainMoviePosition = new Animated.Value(0);
        this.SearchContainerHeight = new Animated.Value(initHeighMainMovie);
    }

    settingState() {
        this.state = {
            animatedValue: new Animated.Value(0),
            currentMovie: { item: { backdrop_path: '' } },
            state: false,
            playVideo: false,
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderComponent />
                <ScrollView
                    scrollEventThrottle={16}
                    style={{ marginTop: _barHeight }}
                >
                    {this.renderItems()}
                </ScrollView>
            </View>
        );
    }

    changeState = (item) => {
        this.setState({
            currentMovie: { item }
        });
        this.changeMainMoviePosition(0);
    }

    changeMainMoviePosition = (value) => {
        this.Actions.changeVariable(this.mainMoviePosition, value, 0).start();
        if (value < 0) {
            this.Actions.playVideo = true;
            this.setState({ playVideo: true });
        } else {
            this.Actions.playVideo = false;
            this.setState({ playVideo: false });
        }
    }

    renderItems = () => {
        return (
            <Animated.View style={{ width: screenWidth }}>
                <Animated.View style={{ flexDirection: "row", marginLeft: this.mainMoviePosition }}>
                    <MovieDetails mainMovieHeight={this.mainMovieHeight} data={this.state.currentMovie} />
                    <MainMovie height={this.mainMovieHeight} data={this.state.currentMovie} changeMainMoviePosition={this.changeMainMoviePosition} />
                    <Animated.View
                        style={{
                            width: screenWidth,
                            height: this.mainMovieHeight,
                            backgroundColor: 'black'
                        }}
                    >
                        <YouTubePlayer play={this.state.playVideo} movieData={this.state.currentMovie} changeMainMoviePosition={this.changeMainMoviePosition} />
                    </Animated.View>
                </Animated.View>
                <SearchContainer height={this.SearchContainerHeight} changeFunction={this.changeState} />
                <CategoriesContainer height={this.mainMovieHeight} changeFunction={this.changeState} />
            </Animated.View>
        );
    }
}

export default MainContainer;