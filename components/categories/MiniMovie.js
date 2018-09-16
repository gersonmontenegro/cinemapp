import React, { PureComponent } from 'react';
import { Animated, Image, TouchableHighlight } from 'react-native';
import { MiniMovieStyle, finalHeighMainMovie } from './../../assets/css/general';
import Actions from './../../providers/Actions';
import { IMAGE_URL } from './../../providers/Data';
import Process from '../../providers/Process';

class MiniMovie extends PureComponent {
    constructor(props) {
        super(props);
        this.bindingFunctions();
        this.creatingSingletonGroup();
    }

    bindingFunctions() {
        this.onPressMovie = this.onPressMovie.bind(this);
    }

    creatingSingletonGroup() {
        this.Actions = Actions.getInstance();
        this.Process = Process.createInstance();
    }

    onPressMovie = (changeMovieFunction, Movie) => {
        this.Actions.changeVariable(this.props.height, finalHeighMainMovie).start();
        changeMovieFunction(Movie);

    }

    render() {
        return (
            <TouchableHighlight key={this.props.item.id} onPress={() => this.onPressMovie(this.props.changeFunction, this.props.item)}
                style={MiniMovieStyle.touchStyle}>
                <Animated.View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Animated.View style={MiniMovieStyle.imageContainer}>
                        <Image style={MiniMovieStyle.imageStyle}
                            source={{ uri: IMAGE_URL + this.props.item.poster_path }}
                        />
                    </Animated.View>
                    <Animated.View >
                        <Animated.Text style={MiniMovieStyle.titleStyle}>
                            {this.Process.truncateTitle(this.props.item.title)}
                        </Animated.Text>
                    </Animated.View>
                </Animated.View>
            </TouchableHighlight>
        );
    }

}

export default MiniMovie;