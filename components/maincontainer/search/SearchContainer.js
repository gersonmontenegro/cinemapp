import React, { PureComponent } from 'react';
import { Animated, TextInput } from 'react-native'
import { screenWidth, SEARCH_MORE_ICON, finalHeighMainMovie, initHeighMainMovie, blueCheckBox, greenCheckBox, SearchStyle, TXT_TAB_TO_START_THE_SEARCH } from '../../../assets/css/general';
import BasicButton from '../../general/BasicButton';
import Actions from './../../../providers/Actions';
import MovieList from '../../categories/MovieList';
import Process from '../../../providers/Process';
import CheckBoxSearch from './CheckBoxSearch';
import FilterContainer from './FilterContainer';

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
        this.setCheckBoxState = this.setCheckBoxState.bind(this);
    }

    settingState() {
        this.state = {
            height: this.props.height,
            searchText: '',
            searchResults: {},
            optPopular: false,
            optTopRated: false,
            optUpcoming: false,
            optOnline: false,
        }
    }

    onPressMore = () => {
        if (this.props.height.__getValue() < finalHeighMainMovie) {
            this.Actions.changeVariable(this.props.height, finalHeighMainMovie, 0).start();
        } else {
            this.Actions.changeVariable(this.props.height, initHeighMainMovie, 0).start();
        }
    }

    setCheckBoxState = (value) => {
        switch (value) {
            case 1: {
                this.setState({ optPopular: !this.state.optPopular });
                this.setState({ optOnline: false });
                break;
            }
            case 2: {
                this.setState({ optTopRated: !this.state.optTopRated });
                this.setState({ optOnline: false });
                break;
            }
            case 3: {
                this.setState({ optUpcoming: !this.state.optUpcoming });
                this.setState({ optOnline: false });
                break;
            }
            case 4: {
                this.setState({ optOnline: !this.state.optOnline });
                this.setState({ optPopular: false });
                this.setState({ optTopRated: false });
                this.setState({ optUpcoming: false });
                break;
            }
        }
    }

    onChangeText = (text) => {
        this.setState({ text: text });
        if (text.length >= 2) {
            this.Process.searchMovie(text).then((data) => {
                this.setState({ searchResults: data });
            });
        }
    }

    render() {
        return (
            <Animated.View style={[SearchStyle.containerStyle, { height: this.state.height }]}>
                <Animated.View style={{ flexDirection: 'row', height: 30, width: screenWidth }}>
                    <TextInput
                        autoCapitalize="characters"
                        maxLength={35}
                        placeHolder={TXT_TAB_TO_START_THE_SEARCH}
                        clearButtonMode="always"
                        value={this.state.searchText}
                        onChangeText={this.onChangeText}
                        style={SearchStyle.textInputStyle} />
                    <BasicButton onPressButton={this.onPressMore}
                        buttonStyle={{
                            justifyContent: 'center',
                            backgroundColor: 'lightgray'
                        }} width={25} height={20} icon={SEARCH_MORE_ICON} />
                </Animated.View>
                <Animated.View style={[SearchStyle.listContainer, { height: this.props.height }]}>
                    <FilterContainer setCheckBoxState={this.setCheckBoxState} optPopular={this.state.optPopular} optTopRated={this.state.optTopRated} optUpcoming={this.state.optUpcoming} optOnline={this.state.optOnline} />
                    <MovieList height={this.props.height} search="xxx" searchResults={this.state.searchResults} />
                </Animated.View>
            </Animated.View>
        );
    }

}

export default SearchContainer;