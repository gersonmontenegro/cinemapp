import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
import { defaultTimeAnimation, SplashStyle, screenHeight } from './../assets/css/general';
import Database from './../providers/Database';
import FetchData from './../providers/FetchData';
import Process from './../providers/Process';
import { API_KEY } from './../providers/ApiAuth';
import { Genres_URL } from './../providers/Data';

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

        this.callBack = this.props.changeSplashState;

        this.db = Database.getInstance();
        this.FetchData = FetchData.getInstance();
        this.Process = Process.getInstance();

        this.db.init().then((data) => {
            this.loadGenres();
        });
    }

    loadGenres() {
        this.FetchData.getData(Genres_URL + "&api_key=" + API_KEY).then((data) => {
            this.Process.saveGenres(data);
            this.initHideShow();
        });
    }

    onLoadGenres(data) {
        this.Process.saveGenres(data);
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
        Animated.parallel(anim).start(
            () => {
                this.closeSplash();
            }
        );
    }

    closeSplash() {
        this.callBack(false);
    }

    changeVariable(variable, v, delay) {
        return Animated.timing(
            variable, {
                toValue: v,
                duration: defaultTimeAnimation,
                delay: delay
            }
        );
    }

    render() {
        return (
            <Animated.View >
                <Animated.View style={[SplashStyle.BwImageContainer, { opacity: this._opacityBWIcon }]}>
                    <Animated.Image
                        style={SplashStyle.BwImage}
                        source={require('./../assets/img/icon/icon_bw.png')} />
                </Animated.View>

                <Animated.View style={[SplashStyle.ColorImageContainer, { opacity: this._opacityColorIcon }]}>
                    <Animated.Image
                        style={[SplashStyle.ColorImage, {
                            marginTop: this._iconMarginTop,
                            width: this._imageSize,
                            height: this._imageSize,
                        }]}
                        source={require('./../assets/img/icon/icon.png')} />
                </Animated.View>

                <Animated.View style={[SplashStyle.barContainer, { height: this._barHeight }]}>
                </Animated.View>

                <Animated.View style={[SplashStyle.textCinemaContainer, { opacity: this._opacityTitle }]}>
                    <Animated.Text style={[SplashStyle.textCinema, { marginRight: this._initLeftMarginTitle }]}>
                        Cinema
                    </Animated.Text>
                </Animated.View>

                <Animated.View style={[SplashStyle.textAppContainer, { opacity: this._opacityTitle }]}>
                    <Animated.Text style={[SplashStyle.textApp, { marginLeft: this._initRightMarginTitle }]}>
                        App
                    </Animated.Text>
                </Animated.View>
            </Animated.View >
        );
    }
}

export default Splash;