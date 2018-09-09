import React, { PureComponent } from 'react';
import { Text, Animated } from 'react-native';
import { screenWidth, screenHeight } from './../assets/css/general';

class Splash extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            iconSize: 256,
            baseTop: 20,
            barHeight: 75,
            finalIconSize: 50,
        };
        this._opacityColorIcon = new Animated.Value(0);
        this._opacityBWIcon = new Animated.Value(1);

        this._opacityTitle = new Animated.Value(0);
        this._initLeftMarginTitle = new Animated.Value(0);
        this._initRightMarginTitle = new Animated.Value(0);
        this._initMarginTitle = new Animated.Value(this.state.finalIconSize / 2);

        this._barHeight = new Animated.Value(0);
        this._imageSize = new Animated.Value(this.state.iconSize);
        this._iconMarginTop = new Animated.Value((screenHeight / 2) - (this.state.iconSize / 2));
    }

    componentWillMount() {
        this.initHideShow();
    }

    initHideShow = () => {
        var anim = [];
        anim.push(this.changeVariable(this._opacityBWIcon, 0, 0));
        anim.push(this.changeVariable(this._opacityColorIcon, 1, 500));
        Animated.parallel(anim).start(
            () => {
                this.moveIcon();
            }
        );
    }

    moveIcon = () => {
        const anim = [];
        anim.push(this.changeVariable(this._imageSize, this.state.finalIconSize, 0));
        anim.push(this.changeVariable(this._iconMarginTop, this.state.baseTop, 0));
        anim.push(this.changeVariable(this._barHeight, this.state.barHeight, 0));
        Animated.parallel(anim).start(
            () => {
                this.showUpTitle();
            }
        );
    }

    showUpTitle = () => {
        const anim = [];
        anim.push(this.changeVariable(this._opacityTitle, 1, 0));
        anim.push(this.changeVariable(this._initLeftMarginTitle, this.state.finalIconSize, 0));
        anim.push(this.changeVariable(this._initRightMarginTitle, this.state.finalIconSize, 0));
        Animated.parallel(anim).start();
    }

    changeVariable(variable, v, delay) {
        return Animated.timing(
            variable, {
                toValue: v,
                duration: 1000,
                delay: delay
            }
        );
    }

    render() {
        return (
            <Animated.View >
                <Animated.View style={{
                    opacity: this._opacityBWIcon,
                    position: "absolute",
                    justifyContent: "center",
                    width: screenWidth,
                    height: screenHeight
                }}>
                    <Animated.Image
                        style={{
                            width: this._imageSize,
                            height: this._imageSize,
                            alignSelf: "center",
                            marginLeft: (screenWidth / 2) - (this._imageSize / 2),
                            marginTop: (screenHeight / 2) - (this._imageSize / 2),
                        }}
                        source={require('./../assets/img/icon/icon_bw.png')} />
                </Animated.View>

                <Animated.View style={{
                    opacity: this._opacityColorIcon,
                    position: "absolute",
                    width: screenWidth,
                    height: screenHeight,
                    zIndex: 10
                }}
                >
                    <Animated.Image
                        style={{
                            width: this._imageSize,
                            height: this._imageSize,
                            alignSelf: "center",
                            marginLeft: (screenWidth / 2) - (this._imageSize / 2),
                            marginTop: this._iconMarginTop,
                        }}
                        source={require('./../assets/img/icon/icon.png')} />
                </Animated.View>

                <Animated.View style={{
                    position: "absolute",
                    width: screenWidth,
                    height: this._barHeight,
                    backgroundColor: 'black',
                    opacity: 0.7
                }}>
                </Animated.View>

                <Animated.View style={{
                    position: "absolute",
                    width: (screenWidth / 2),
                    height: this.state.barHeight,
                    justifyContent: 'center',
                    opacity: this._opacityTitle
                }}>
                    <Animated.Text style={{
                        fontFamily: 'ObliviousFont',
                        fontSize: 20,
                        color: 'white',
                        alignSelf: "flex-end",
                        marginRight: this._initLeftMarginTitle
                    }}>
                        Cinema
                    </Animated.Text>
                </Animated.View>

                <Animated.View style={{
                    position: "absolute",
                    width: (screenWidth / 2),
                    height: this.state.barHeight,
                    justifyContent: 'center',
                    marginLeft: (screenWidth / 2),
                    opacity: this._opacityTitle
                }}>
                    <Animated.Text style={{
                        fontFamily: 'ObliviousFont',
                        fontSize: 20,
                        color: 'white',
                        alignSelf: "flex-start",
                        marginLeft: this._initRightMarginTitle
                    }}>
                        App
                    </Animated.Text>
                </Animated.View>
            </Animated.View>
        );
    }
}

export default Splash;