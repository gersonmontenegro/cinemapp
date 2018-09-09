import { StyleSheet, Dimensions } from "react-native";

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

export const defaultTimeAnimation = 1000;

const _imageSize = 256;
const _barHeight = 75;
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