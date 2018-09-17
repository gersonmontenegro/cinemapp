import React, { PureComponent } from 'react';
import { Animated, TextInput } from 'react-native'
import { screenWidth, SEARCH_MORE_ICON, finalHeighMainMovie, initHeighMainMovie, blueCheckBox, greenCheckBox, SearchStyle, TXT_TAB_TO_START_THE_SEARCH, SPINNER } from '../../../assets/css/general';
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
        this.tmp = {};
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
            text: '',
            flag: true,
            spinnerOpacity: 0
        }
    }

    onPressMore = () => {
        if (this.props.height.__getValue() < finalHeighMainMovie) {
            this.openSearch();
        } else {
            this.closeSearch();
        }
    }

    openSearch() {
        this.Actions.changeVariable(this.props.height, finalHeighMainMovie, 0).start();
    }

    closeSearch() {
        // this.Actions.changeVariable(this.props.height, initHeighMainMovie, 0).start();
    }

    setCheckBoxState = (value) => {
        switch (value) {
            case 1: {
                this.setState({
                    optPopular: !this.state.optPopular,
                    optOnline: false
                }, () => {
                    this.initSearch(this.state.text)
                });
                break;
            }
            case 2: {
                this.setState({ optTopRated: !this.state.optTopRated, optOnline: false }, () => {
                    this.initSearch(this.state.text)
                });
                break;
            }
            case 3: {
                this.setState({ optUpcoming: !this.state.optUpcoming, optOnline: false }, () => {
                    this.initSearch(this.state.text)
                });
                break;
            }
            case 4: {
                this.setState({
                    optOnline: !this.state.optOnline,
                    optPopular: false,
                    optTopRated: false,
                    optUpcoming: false
                }, () => {
                    console.log("Online?", this.state.optOnline);

                    if (this.state.optOnline) {
                        console.log("Online yes");
                        this.initSearchOnline(this.state.text)
                    } else {
                        console.log("Online no");
                        this.initSearch(this.state.text)
                    }
                });
                break;
            }
        }
    }

    initSearchOnline(text) {
        this.setState({ spinnerOpacity: 1 });
        this.Process.searchMovieOnline(text).then((data) => {
            this.setState({ searchResults: data.results, spinnerOpacity: 0 });
        });
    }

    onChangeText = (text) => {
        this.setState({ text: text }, () => {
            if (text.length > 0) {
                if (this.state.optOnline) {
                    this.initSearchOnline(text);
                } else {
                    this.initSearch(text);
                }
            } else {
                console.log("closing???");
                this.closeSearch();
                this.setState({ flag: !this.state.flag }, () => {
                    this.setState({ searchResults: [] });
                });
            }
        });
    }

    initSearch(text) {
        let filter = this.Process.createFilter(this.state);
        this.Process.searchMovie(text, filter).then((data) => {
            this.setState({ searchResults: data }, () => {
                if (this.state.searchResults.length > 0) {
                    this.openSearch();
                } else {
                    this.closeSearch();
                }
            });
        });
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
                    <MovieList flag={this.state.flag} height={this.props.height} search="xxx" searchResults={this.state.searchResults} />
                    <Animated.Image style={[SearchStyle.spinnerStyle, { opacity: this.state.spinnerOpacity }]} source={SPINNER} />
                </Animated.View>
            </Animated.View>
        );
    }

}

export default SearchContainer;