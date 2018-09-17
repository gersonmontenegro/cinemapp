import { StyleSheet, Dimensions } from "react-native";

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
export const defaultTimeAnimation = 400;
export const _barHeight = 75;
export const finalHeighMainMovie = 240;
export const initHeighMainMovie = 30;

export const miniMovieHeight = 210;

export const MORE_EMPTY_ICON = require('./../img/more_empty.png');
export const HEART_EMPTY_ICON = require('./../img/heart_empty.png');
export const HEART_FULL_ICON = require('./../img/heart_full.png');
export const PLAY_ICON = require('./../img/play.png');
export const CLOSE_ICON = require('./../../assets/img/icon/close.png');
export const SEARCH_ICON = require('./../../assets/img/icon/search.png');
export const SEARCH_MORE_ICON = require('./../../assets/img/icon/more.png');

export const SPINNER = require('./../../assets/gif/spinner.gif');

export const TXT_NO_VIDEOS = "There is no videos for this movie yet.";
export const TXT_TAB_TO_START_THE_SEARCH = "Tab to start the search";

export const backColorToRemoveWink = '#ffffff00';
export const blueCheckBox = '#3399ff';
export const greenCheckBox = '#7c9885';
export const veryLightGray = '#f8f8f8';

export const defaultIconSize = 30;

const _imageSize = 256;

// this._imageSize = new Animated.Value(this.state.iconSize);

export const SplashStyle = StyleSheet.create({
    BwImageContainer: {
        position: "absolute",
        justifyContent: "center",
        width: screenWidth,
        height: screenHeight
    },
    BwImage: {
        width: _imageSize,
        height: _imageSize,
        alignSelf: "center"
    },
    ColorImageContainer: {
        position: "absolute",
        width: screenWidth,
        height: screenHeight,
        zIndex: 10
    },
    ColorImage: {
        alignSelf: "center",
    },
    textCinemaContainer: {
        position: "absolute",
        width: (screenWidth / 2),
        justifyContent: 'center',
        height: _barHeight,
    },
    textCinema: {
        fontFamily: 'JosefinSans-Bold',
        fontSize: 30,
        color: 'white',
        alignSelf: "flex-end",
    },
    textAppContainer: {
        position: "absolute",
        width: (screenWidth / 2),
        justifyContent: 'center',
        marginLeft: (screenWidth / 2),
        height: _barHeight,
    },
    textApp: {
        fontFamily: 'JosefinSans-Bold',
        fontSize: 30,
        color: 'white',
        alignSelf: "flex-start",
    },
    barContainer: {
        position: "absolute",
        width: screenWidth,
        backgroundColor: 'black',
        opacity: 0.7
    }
});

export const MainMovieStyle = StyleSheet.create({
    textMainMovie: {
        left: 5,
        fontFamily: 'JosefinSans-Bold',
        color: 'white',
        backgroundColor: '#00000055',
        textAlignVertical: 'top',
        flexWrap: 'wrap'
    }
});

export const CategoriesStyle = StyleSheet.create({
    titleStyle: {
        fontFamily: 'JosefinSans-Bold',
        fontSize: 16,
        left: 5,
        top: 3,
        color: 'black'
    }
});

export const YTStyle = StyleSheet.create({
    closeButton: {
        backgroundColor: backColorToRemoveWink,
        position: 'absolute',
        top: 0,
        left: 0,
        width: 30,
        height: 30,
    }
});

export const MiniMovieStyle = StyleSheet.create({
    touchStyle: {
        marginLeft: 5,
        height: 150,
        borderRadius: 10,
    },
    imageContainer: {
        shadowColor: "lightgrey",
        shadowOffset: { width: 2, height: 4 },
        shadowRadius: 2,
        shadowOpacity: 1,
    },
    imageStyle: {
        width: 90,
        height: 130,
        borderRadius: 10,
    },
    titleStyle: {
        top: 5,
        fontFamily: 'JosefinSans',
        textAlign: 'center',
        width: 90,
    }
});

export const SearchStyle = StyleSheet.create({
    containerStyle: {
        width: screenWidth,
    },
    textInputStyle: {
        fontFamily: 'JosefinSans',
        width: screenWidth - 30,
        marginLeft: 2,
        height: 30,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1
    },
    listContainer: {
        width: screenWidth,
        flexDirection: 'column',
        backgroundColor: veryLightGray
    },
    spinnerStyle: {
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 10,
        top: 80
    }
});