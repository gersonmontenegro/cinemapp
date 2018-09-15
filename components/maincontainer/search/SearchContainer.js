import React, { PureComponent } from 'react';
import { Animated, TextInput } from 'react-native'
import { screenWidth, SEARCH_MORE_ICON } from '../../../assets/css/general';
import BasicButton from '../../general/BasicButton';
import Actions from './../../../providers/Actions';

class SearchContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.bindingFunctions();
        this.settingState();
        this.creatingSingletonGroup();
    }

    creatingSingletonGroup() {
        this.Actions = Actions.getInstance();
    }

    bindingFunctions() {
        this.onPressMore = this.onPressMore.bind(this);
    }

    settingState() {
        this.state = { height: this.props.height }
    }

    onPressMore = () => {
        this.Actions.changeVariable(this.props.height, 200, 0).start();
    }

    startSearch() {

    }

    render() {
        return (
            <Animated.View style={{ width: screenWidth, height: this.state.height, backgroundColor: 'gray' }}>
                <Animated.View style={{ flexDirection: 'row', height: 30, width: screenWidth }}>
                    <TextInput
                        autoCapitalize="characters"
                        maxLength={35}
                        placeHolder="Tab to start the search"
                        placeholderTextColor="red"
                        clearButtonMode="always"
                        style={{
                            fontFamily: 'ObliviousFont',
                            width: screenWidth - 30,
                            marginLeft: 2,
                            height: 30,
                            backgroundColor: 'white',
                            borderColor: 'gray',
                            borderWidth: 1
                        }} />
                    {/* <BasicButton onPressButton={} buttonStyle={{ marginLeft: 5, justifyContent: 'center' }} width={20} height={20} icon={SEARCH_ICON} /> */}
                    <BasicButton onPressButton={this.onPressMore}
                        buttonStyle={{
                            marginLeft: 5,
                            justifyContent: 'center',
                            backgroundColor: 'gray'
                        }} width={25} height={20} icon={SEARCH_MORE_ICON} />
                </Animated.View>

            </Animated.View>
        );
    }

}

export default SearchContainer;