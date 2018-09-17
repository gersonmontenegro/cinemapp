import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
import { _barHeight, screenWidth } from './../../assets/css/general';
import TextInfo from './TextInfo';
import Process from './../../providers/Process';
import MovieList from './../categories/MovieList';
import { CREDITS_URL } from '../../providers/Data';
import FetchData from '../../providers/FetchData';

class MovieDetails extends PureComponent {
    constructor(props) {
        super(props);
        this.settingState();
        this.creatingSingletonGroup();
    }

    creatingSimpleValues() {
        this.refMovieList = null;
    }

    creatingSingletonGroup() {
        this.Process = Process.getInstance();
        this.FetchData = FetchData.getInstance();
    }

    settingState() {
        this.state = {
            genres: '',
            url: '',
            searchResults: {},
        }
    }

    setURLCredits() {
        let credits = CREDITS_URL;
        credits = credits.replace('%ID_MOVIE%', this.props.data.item.id);
        this.refMovieList.loadCredits(credits);
    }

    componentDidUpdate() {
        this.setURLCredits();
        this.loadGenres();
    }

    loadGenres = () => {
        if (this.props.data.item.genre_ids != undefined) {
            this.Process.getGenres(this.Process.getGenreStringList(this.props.data.item)).then((data) => {
                this.setState({ genres: data });
            });
        }
    }

    render() {
        return (
            <Animated.ScrollView style={{
                width: screenWidth,
                height: this.props.mainMovieHeight,
                backgroundColor: 'black',
                position: 'absolute',
                left: -screenWidth
            }}>
                <TextInfo fontSize={20} center={false} top={10} text={this.props.data.item.title} />
                <TextInfo center={true} top={0} fontSize={15} text={this.state.genres} />
                <TextInfo height={50} fontSize={16} center={false} top={-10} text={this.props.data.item.overview} />
                <TextInfo fontSize={16} center={false} top={-10} text="Cast" />
                <MovieList top={-20} textColor="white" ref={ref => (this.refMovieList = ref)} searchResults={this.state.searchResults} flag={false} url={this.state.url} height={50} />
            </Animated.ScrollView>
        );
    }

}

export default MovieDetails;