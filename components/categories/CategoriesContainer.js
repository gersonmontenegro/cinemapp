import React, { PureComponent } from 'react';
import { Text, Animated } from 'react-native';
import { CategoriesStyle, _barHeight, screenWidth } from './../../assets/css/general';
import { Categories } from './../../providers/Data';
import FetchData from './../../providers/FetchData';
import MovieList from './MovieList';

class CategoriesContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.creatingSingletonGroup();
    }

    creatingSingletonGroup() {
        this.FetchData = FetchData.getInstance();
    }

    render() {
        return (
            <Animated.View style={{ width: screenWidth }}>
                {
                    Categories.map((item) => (
                        <Animated.View
                            key={item.id}
                            style={{ backgroundColor: '#555555', height: 155, marginTop: 2 }}>
                            <Text style={CategoriesStyle.titleStyle}>
                                {item.name}
                            </Text>
                            <MovieList url={item.url} height={this.props.height} changeFunction={this.props.changeFunction} />
                        </Animated.View>
                    ))
                }
            </Animated.View>
        );
    }

}

export default CategoriesContainer;