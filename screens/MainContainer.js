import React, { PureComponent } from 'react';
import { ScrollView, Animated, View, Text } from 'react-native';
import HeaderComponent from './../components/general/HeaderComponent';
import { _barHeight, screenWidth, finalHeighMainMovie } from './../assets/css/general';
import Actions from './../providers/Actions';
import MainMovie from './../components/mainmovie/MainMovie';
import CategoriesContainer from './../components/categories/CategoriesContainer';
import YouTubePlayer from '../components/ytplayer/YouTubePlayer';

class MainContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            animatedValue: new Animated.Value(0),
            currentMovie: {}
        };
        this.mainMovieHeight = new Animated.Value(0);
        this.mainMoviePosition = new Animated.Value(0);
        this.Actions = Actions.getInstance();
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
        // this.setState({
        //     currentMovie: {
        //         title: item.title,
        //         overview: item.overview,
        //         backdrop_path: item.backdrop_path == null ? item.poster_path : item.backdrop_path,
        //         genre_ids: item.genre_ids,
        //         vote_average: item.vote_average,
        //         id: item.id,
        //     }
        // });
    }

    changeMainMoviePosition = (value) => {
        this.Actions.changeVariable(this.mainMoviePosition, value, 0).start();
    }

    renderItems = () => {
        return (
            <Animated.View style={{ width: screenWidth }}>
                <Animated.View style={{ flexDirection: "row", marginLeft: this.mainMoviePosition }}>
                    <MainMovie height={this.mainMovieHeight} data={this.state.currentMovie} changeMainMoviePosition={this.changeMainMoviePosition} />
                    <Animated.View
                        style={{
                            width: screenWidth,
                            height: this.mainMovieHeight,
                            backgroundColor: 'black'
                        }}
                    >
                        <YouTubePlayer movieData={this.state.currentMovie} changeMainMoviePosition={this.changeMainMoviePosition} />
                    </Animated.View>
                </Animated.View>
                <CategoriesContainer height={this.mainMovieHeight} changeFunction={this.changeState} />
            </Animated.View>
        );
    }
}

export default MainContainer;