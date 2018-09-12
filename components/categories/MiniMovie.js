import React, { PureComponent } from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { IMAGE_URL, finalHeighMainMovie } from './../../assets/css/general';
import Actions from './../../providers/Actions';
import { IMAGE_URL } from './../../providers/Data';

class MiniMovie extends PureComponent {
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
            <TouchableHighlight key={this.props.item.id} onPress={() => this.onPressMovie()} style={{ marginLeft: 5, height: 150 }}>
                <Image style={{ width: 90, height: 130 }} source={{ uri: IMAGE_URL + this.props.item.poster_path }} />
            </TouchableHighlight>
        );
    }

}

export default MiniMovie;