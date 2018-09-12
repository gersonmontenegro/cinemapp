import React, { PureComponent } from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { finalHeighMainMovie } from './../../assets/css/general';
import Actions from './../../providers/Actions';
import { IMAGE_URL } from './../../providers/Data';

class MiniMovie extends PureComponent {
    constructor(props) {
        super(props);
        this.onPressMovie = this.onPressMovie.bind(this);
        this.Actions = Actions.getInstance();
    }

    onPressMovie = (changeMovieFunction, Movie) => {
        this.Actions.changeVariable(this.props.height, finalHeighMainMovie).start();
        changeMovieFunction(Movie);

    }

    render() {
        return (
            <TouchableHighlight key={this.props.item.id} onPress={() => this.onPressMovie(this.props.changeFunction, this.props.item)} style={{ marginLeft: 5, height: 150 }}>
                <Image style={{ width: 90, height: 130 }} source={{ uri: IMAGE_URL + this.props.item.poster_path }} />
            </TouchableHighlight>
        );
    }

}

export default MiniMovie;