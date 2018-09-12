import React, { PureComponent } from 'react';
import { ScrollView, Animated, View } from 'react-native';
import HeaderComponent from './../components/general/HeaderComponent';
import { _barHeight, screenWidth } from './../assets/css/general';
import Actions from './../providers/Actions';
import MainMovie from './../components/mainmovie/MainMovie';
import CategoriesContainer from './../components/categories/CategoriesContainer';

class MainContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            animatedValue: new Animated.Value(0),
            currentMovie: {}
        };
        this.mainMovieHeight = new Animated.Value(0);
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
            currentMovie: {
                title: item.title,
                overview: item.overview,
                backdrop_path: item.backdrop_path == null ? item.poster_path : item.backdrop_path,
                genre_ids: item.genre_ids
            }
        });
    }

    renderItems = () => {
        return (
            <Animated.View style={{ width: screenWidth }}>
                <MainMovie height={this.mainMovieHeight} data={this.state.currentMovie} />
                <CategoriesContainer height={this.mainMovieHeight} changeFunction={this.changeState} />
            </Animated.View>
        );
    }
}

export default MainContainer;