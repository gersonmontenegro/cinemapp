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
        this.creatingSimpleValues();
        this.bindingFunction();
        this.creatingSingletinGroup();
        this.loadMovies();
    }

    creatingSimpleValues() {
        this.credits = false;
    }

    bindingFunction() {
        this.onReceiveMovieList = this.onReceiveMovieList.bind(this);
        this.createMiniMovie = this.createMiniMovie.bind(this);
    }

    creatingSingletinGroup() {
        this.FetchData = FetchData.getInstance();
        this.Database = Database.getInstance();
        this.Process = Process.getInstance();
    }

    settingState() {
        this.state = {
            movies: [],
            searchResults: {},
            flag: this.props.flag
        };
    }

    _keyExtractor = (item) => item.id.toString();

    loadMovies = () => {
        if (this.props.url != undefined && this.props.url != 'undefined' && this.props.url != '') {
            this.loadFromURL();
        }
    }

    componentDidUpdate() {
        this.setMoviesState();
    }

    setMoviesState() {
        if (this.props.searchResults.length != undefined && this.props.searchResults.length > 0) {
            this.setState({ movies: this.props.searchResults });
        }
    }

    loadCredits(url) {
        this.credits = true;
        this.FetchData.getData(url).then(this.onReceiveMovieList);
    }

    loadFromURL() {
        this.FetchData.getData(this.props.url).then(this.onReceiveMovieList);
    }

    onReceiveMovieList = (data) => {
        if (data.cast != undefined) {
            this.credits = false;
            this.setState({ movies: data.cast });
        } else {
            this.setState({ movies: data.results });
            this.Database.saveMovies(data.results, this.props.idCategory);
        }
    }

    createMiniMovie = ({ item }) => {
        if (!this.state.flag) {
            return (
                <MiniMovie textColor={this.props.textColor} item={item} height={this.props.height} changeFunction={this.props.changeFunction} />
            );
        } else {
            if (this.props.searchResults.length > 0) {
                return (
                    <MiniMovie textColor={this.props.textColor} item={item} height={this.props.height} changeFunction={this.props.changeFunction} />
                );
            } else {
                return null;
            }
        }
    }


    getMovieList = () => {
        return (
            <FlatList
                style={{ marginTop: this.props.top != undefined ? this.props.top : 10 }}
                horizontal={true}
                data={this.state.movies}
                keyExtractor={this._keyExtractor}
                renderItem={this.createMiniMovie}
            />)
    }

    render() {
        return (
            this.getMovieList()
        );
    }

}

export default MovieList;