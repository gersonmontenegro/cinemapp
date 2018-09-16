import React, { PureComponent } from 'react';
import { TouchableOpacity, Animated, TextInput } from 'react-native'
import { screenWidth, SEARCH_MORE_ICON, finalHeighMainMovie, initHeighMainMovie, blueCheckBox, greenCheckBox } from '../../../assets/css/general';
import BasicButton from '../../general/BasicButton';
import Actions from './../../../providers/Actions';
import MovieList from '../../categories/MovieList';
import Process from '../../../providers/Process';
import { CheckBox, Text } from 'native-base';
import CheckBoxSearch from './CheckBoxSearch';

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
                <Animated.View style={{
                    height: this.props.height,
                    width: screenWidth,
                    flexDirection: 'column',
                    backgroundColor: 'lightgray'
                }}>
                    <Animated.View style={{ top: 3, width: screenWidth, flexDirection: 'row' }}>
                        <CheckBoxSearch color={blueCheckBox} name="Popular" opt={this.state.optPopular} value={1} onPress={this.setCheckBoxState} width={80} />
                        <CheckBoxSearch color={blueCheckBox} name="Top rated" opt={this.state.optTopRated} value={2} onPress={this.setCheckBoxState} width={100} />
                        <CheckBoxSearch color={blueCheckBox} name="Upcoming" opt={this.state.optUpcoming} value={3} onPress={this.setCheckBoxState} width={100} />
                        <CheckBoxSearch color={greenCheckBox} name="Online" opt={this.state.optOnline} value={4} onPress={this.setCheckBoxState} width={100} />
                    </Animated.View>
                    <MovieList height={this.props.height} search="xxx" searchResults={this.state.searchResults} />
                </Animated.View>
            </Animated.View>
        );
    }

}

export default SearchContainer;