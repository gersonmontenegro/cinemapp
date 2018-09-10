import React, { PureComponent } from 'react';
import { Image, ScrollView, FlatList, List, ListItem, Animated, View, Text, StyleSheet } from 'react-native';
import HeaderComponent from './../components/general/HeaderComponent';
import { _barHeight, screenHeight, screenWidth } from './../assets/css/general';

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
            <View style={{ width: screenWidth }}>
                <View>
                    <Image source={require('./../assets/img/movie.jpg')} />
                </View>
                <View style={{ width: screenWidth }}>
                    {
                        data.map((item) => (
                            <View
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
                                            <View style={{ marginLeft: 5, height: 150 }}>
                                                <Image source={require('./../assets/img/movie_small.jpg')} />
                                            </View>
                                        )}
                                    />
                                </View>
                            </View>
                        ))
                    }
                </View>
            </View>
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