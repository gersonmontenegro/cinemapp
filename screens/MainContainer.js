import React, { PureComponent } from 'react';
import { ScrollView, FlatList, List, ListItem, Animated, View } from 'react-native';
import HeaderComponent from './../components/general/HeaderComponent';
import { finalHeighMainMovie, _barHeight, screenWidth } from './../assets/css/general';
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

        // this.mainMovieHeight = new Animated.Value(finalHeighMainMovie);
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

                title: item.title,

    renderItems = () => {
        let movieDetails =
        {
            "vote_count": 7720,
            "id": 299536,
            "video": false,
            "vote_average": 8.3,
            "title": "Avengers: Infinity War",
            "popularity": 260.161,
            "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
            url_img: require('./../assets/img/movie.jpg'),
            "original_language": "en",
            "original_title": "Avengers: Infinity War",
            "genre_ids": [
                12,
                878,
                14,
                28
            ],
            "backdrop_path": "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
            "adult": false,
            "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
            "release_date": "2018-04-25"
        }
        return (
            <Animated.View style={{ width: screenWidth }}>
                <MainMovie height={this.mainMovieHeight} data={movieDetails} />
                <CategoriesContainer height={this.mainMovieHeight} />
            </Animated.View>
        );
    }

    getMovieList = () => {
        let dataMovies = [
            { id: 1, name: "Mov 1" },
            { id: 2, name: "Mov 2" },
            { id: 3, name: "Mov 3" },
            { id: 4, name: "Mov 4" },
        ];
        return (
            <List>
                <FlatList
                    keyExtractor={item => item.id}
                    data={dataMovies}
                    renderItem={({ item }) => (
                        <ListItem
                            title={`${item.name}`}
                        />
                    )}
                />
            </List>
        );
    }

}

export default MainContainer;