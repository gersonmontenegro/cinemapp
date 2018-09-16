import React, { PureComponent } from 'react';
import { Animated, TextInput } from 'react-native'
import { screenWidth, SEARCH_MORE_ICON, finalHeighMainMovie, initHeighMainMovie } from '../../../assets/css/general';
import BasicButton from '../../general/BasicButton';
import Actions from './../../../providers/Actions';
import MovieList from '../../categories/MovieList';
import Process from '../../../providers/Process';

class SearchContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.bindingFunctions();
        this.settingState();
        this.creatingSingletonGroup();
    }

    creatingSingletonGroup() {
        this.Actions = Actions.getInstance();
        this.Process = Process.getInstance();
    }

    bindingFunctions() {
        this.onPressMore = this.onPressMore.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
    }

    settingState() {
        this.state = {
            height: this.props.height,
            searchText: '',
            searchResults: {}
        }
    }

    onPressMore = () => {
        if (this.props.height.__getValue() < finalHeighMainMovie) {
            this.Actions.changeVariable(this.props.height, finalHeighMainMovie, 0).start();
        } else {
            this.Actions.changeVariable(this.props.height, initHeighMainMovie, 0).start();
        }
    }

    onChangeText = (text) => {
        this.setState({ text: text });
        if (text.length >= 3) {
            this.Process.searchMovie(text).then((data) => {
                this.setState({ searchResults: data });
            });
        }
    }

    render() {
        return (
            <Animated.View style={{ width: screenWidth, height: this.state.height, backgroundColor: 'lightgray' }}>
                <Animated.View style={{ flexDirection: 'row', height: 30, width: screenWidth }}>
                    <TextInput
                        autoCapitalize="characters"
                        maxLength={35}
                        placeHolder="Tab to start the search"
                        placeholderTextColor="red"
                        clearButtonMode="always"
                        value={this.state.searchText}
                        onChangeText={this.onChangeText}
                        style={{
                            fontFamily: 'JosefinSans',
                            width: screenWidth - 30,
                            marginLeft: 2,
                            height: 30,
                            backgroundColor: 'white',
                            borderColor: 'gray',
                            borderWidth: 1
                        }} />
                    <BasicButton onPressButton={this.onPressMore}
                        buttonStyle={{
                            justifyContent: 'center',
                            backgroundColor: 'lightgray'
                        }} width={25} height={20} icon={SEARCH_MORE_ICON} />
                </Animated.View>
                <MovieList height={this.props.height} search="xxx" searchResults={this.state.searchResults} />
            </Animated.View>
        );
    }

}

export default SearchContainer;