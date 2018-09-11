import React, { PureComponent } from 'react';
import { FlatList, Text, View } from 'react-native';
import MiniMovie from './MiniMovie';
import FetchData from './../../providers/FetchData';

class MovieList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { movies: [] };
        this.FetchData = FetchData.getInstance();
        this.loadMovies();
    }

    _keyExtractor = (item) => item.id.toString();

    loadMovies = () => {
        this.FetchData.getData(this.props.url).then(
            (data) => {
                this.setState({ movies: data.results });
            }
        );
    }

    getMovieList = () => {
        return (
            <FlatList
                style={{ marginTop: 10 }}
                horizontal={true}
                data={this.state.movies}
                keyExtractor={this._keyExtractor}
                renderItem={({ item }) => (
                    <MiniMovie item={item} height={this.props.height} />
                )}
            />)
    }

    render() {
        return (
            this.getMovieList()
        );
    }

}

export default MovieList;