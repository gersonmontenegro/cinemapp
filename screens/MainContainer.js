import React, { PureComponent } from 'react';
import { TouchableHighlight, Image, ScrollView, FlatList, List, ListItem, Animated, View, Text, StyleSheet } from 'react-native';
import HeaderComponent from './../components/general/HeaderComponent';
import { defaultTimeAnimation, _barHeight, screenHeight, screenWidth } from './../assets/css/general';
import Actions from './../providers/Actions';
import MainMovie from './../components/main/MainMovie';

const data = [
    { id: 1, name: "Popular" },
    { id: 2, name: "Top rated" },
    { id: 3, name: "Upcoming" }
];

class MainContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            animatedValue: new Animated.Value(0),
            finalHeighMainMovie: 280
        };
        this.onPressMovie = this.onPressMovie.bind(this);
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

    onPressMovie = () => {
        this.Actions.changeVariable(this.mainMovieHeight, this.state.finalHeighMainMovie, 0).start();
    }

    renderItems = () => {
        let moviesData = [
            { key: '1', name: 'Captain America' },
            { key: '2', name: 'AntMan' },
            { key: '3', name: 'SpiderMan' },
            { key: '4', name: 'SuperMan' },
            { key: '5', name: 'CornMan' },
            { key: '6', name: 'Conan' },
            { key: '7', name: 'Superboy' },
            { key: '8', name: 'The call' },
        ];
        return (
            <Animated.View style={{ width: screenWidth }}>
                <MainMovie height={this.mainMovieHeight} />
                <Animated.View style={{ width: screenWidth }}>
                    {
                        data.map((item) => (
                            <Animated.View
                                key={item.id}
                                style={{ backgroundColor: '#555555', height: 150 }}>
                                <Text style={{
                                    fontFamily: 'ObliviousFont',
                                    fontSize: 15,
                                    left: 5,
                                    top: 3,
                                    color: 'white'
                                }}>
                                    {item.name}
                                </Text>
                                <View style={{ marginTop: 5 }}>
                                    <FlatList
                                        horizontal={true}
                                        data={moviesData}
                                        renderItem={({ item }) => (
                                            <TouchableHighlight onPress={() => this.onPressMovie()} style={{ marginLeft: 5, height: 150 }}>
                                                <Image source={require('./../assets/img/movie_small.jpg')} />
                                            </TouchableHighlight>
                                        )}
                                    />
                                </View>
                            </Animated.View>
                        ))
                    }
                </Animated.View>
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