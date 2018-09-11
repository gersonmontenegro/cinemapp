import React, { PureComponent } from 'react';
import { Text, View, FlatList, Animated } from 'react-native';
import { CategoriesStyle, _barHeight, screenWidth } from './../../assets/css/general';
import { MoviesQuery } from './../../providers/Data';
import MiniMovie from './MiniMovie';
import { Categories } from './../../providers/Data';
import FetchData from './../../providers/FetchData';

class CategoriesContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.FetchData = FetchData.getInstance();
    }

    _keyExtractor = (item) => item.id.toString();

    getMovieCategories = (url) => {
        // this.FetchData.getData(url).then(
        //     (data) => {
        //         console.log("R>>" + JSON.stringify(data));
        //     }
        // );
        return (
            <FlatList
                style={{ marginTop: 10 }}
                horizontal={true}
                data={MoviesQuery.results}
                keyExtractor={this._keyExtractor}
                renderItem={({ item }) => (
                    <MiniMovie item={item} height={this.props.height} />
                )}
            />
        );
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
                            {this.getMovieCategories(item.url)}
                        </Animated.View>
                    ))
                }
            </Animated.View>
        );
    }

}

export default CategoriesContainer;