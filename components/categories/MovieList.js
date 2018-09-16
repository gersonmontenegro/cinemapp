import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import MiniMovie from './MiniMovie';
import FetchData from './../../providers/FetchData';
import Database from '../../providers/Database';
import Process from '../../providers/Process';

class MovieList extends PureComponent {
    constructor(props) {
        super(props);
        this.settingState();
        this.creatingSingletinGroup();
        this.loadMovies();
    }

    creatingSingletinGroup() {
        this.FetchData = FetchData.getInstance();
        this.Database = Database.getInstance();
        this.Process = Process.getInstance();
    }

    settingState() {
        this.state = { movies: [] };
    }

    _keyExtractor = (item) => item.id.toString();

    loadMovies = () => {
        if (this.props.search != undefined) {
            this.loadFromLocalSearch();
        } else {
            this.loadFromURL();
        }
    }

    loadFromLocalSearch() {

    }

    loadFromURL() {
        this.FetchData.getData(this.props.url).then(this.onReveiveMovieList);
    }

    onReveiveMovieList = (data) => {
                this.setState({ movies: data.results });
                this.Database.saveMovies(data.results, this.props.idCategory);
            }

    getMovieList = () => {
        return (
            <FlatList
                style={{ marginTop: 10 }}
                horizontal={true}
                data={this.state.movies}
                keyExtractor={this._keyExtractor}
                renderItem={({ item }) => (
                    <MiniMovie item={item} height={this.props.height} changeFunction={this.props.changeFunction} />
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