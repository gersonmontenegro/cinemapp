import React, { PureComponent } from 'react';
import { TouchableHighlight, Image, Text, View, FlatList, Animated } from 'react-native';
import { finalHeighMainMovie, _barHeight, screenWidth } from './../../assets/css/general';
import Actions from './../../providers/Actions';

const data = [
    { id: 1, name: "Popular" },
    { id: 2, name: "Top rated" },
    { id: 3, name: "Upcoming" }
];

const moviesData = [
    { key: '1', name: 'Captain America' },
    { key: '2', name: 'AntMan' },
    { key: '3', name: 'SpiderMan' },
    { key: '4', name: 'SuperMan' },
    { key: '5', name: 'CornMan' },
    { key: '6', name: 'Conan' },
    { key: '7', name: 'Superboy' },
    { key: '8', name: 'The call' },
];

class CategoriesContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.onPressMovie = this.onPressMovie.bind(this);
        this.Actions = Actions.getInstance();
    }

    onPressMovie = () => {
        this.Actions.changeVariable(this.props.height, finalHeighMainMovie).start();
    }

    render() {
        return (
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
                                            <Image source={require('./../../assets/img/movie_small.jpg')} />
                                        </TouchableHighlight>
                                    )}
                                />
                            </View>
                        </Animated.View>
                    ))
                }
            </Animated.View>
        );
    }

}

export default CategoriesContainer;