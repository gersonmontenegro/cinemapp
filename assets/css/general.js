import { StyleSheet, Dimensions } from "react-native";

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
export const defaultTimeAnimation = 400;
export const _barHeight = 75;
export const finalHeighMainMovie = 280;

export const MORE_EMPTY_ICON = require('./../img/more_empty.png');
export const HEART_EMPTY_ICON = require('./../img/heart_empty.png');
export const HEART_FULL_ICON = require('./../img/heart_full.png');
export const PLAY_ICON = require('./../img/play.png');
export const CLOSE_ICON = require('./../../assets/img/icon/close.png');

export const TXT_NO_VIDEOS = "There is no videos for this movie yet.";

export const backColorToRemoveWink = '#ffffff00';

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
        fontFamily: 'ObliviousFont',
        fontSize: 20,
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
        fontFamily: 'ObliviousFont',
        fontSize: 20,
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
        fontFamily: 'ObliviousFont',
        color: 'white',
        backgroundColor: '#00000055',
    }
});

export const CategoriesStyle = StyleSheet.create({
    titleStyle: {
        fontFamily: 'ObliviousFont',
        fontSize: 15,
        left: 5,
        top: 3,
        color: 'white'
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