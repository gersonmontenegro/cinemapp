import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
import { SplashStyle, screenHeight } from './../../assets/css/general';

class HeaderComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.settingState();
        this.creatingAnimatedValues();
    }

    creatingAnimatedValues() {
        this._imageSize = new Animated.Value(this.state.finalIconSize);
        this._opacityColorIcon = new Animated.Value(1);
        this._barHeight = new Animated.Value(this.state.barHeight);
        this._iconMarginTop = new Animated.Value((screenHeight / 2) - (this.state.iconSize / 2));
        this._opacityTitle = new Animated.Value(1);
        this._initLeftMarginTitle = new Animated.Value(this.state.finalIconSize);
        this._initRightMarginTitle = new Animated.Value(this.state.finalIconSize);
    }

    settingState() {
        this.state = {
            iconSize: 256,
            baseTop: 20,
            barHeight: 75,
            finalIconSize: 50,
        };
    }

    render() {
        return (
            <Animated.View >
                <Animated.View style={[SplashStyle.ColorImageContainer, { opacity: this._opacityColorIcon }]}>
                    <Animated.Image
                        style={[SplashStyle.ColorImage, {
                            marginTop: this.state.baseTop,
                            width: this._imageSize,
                            height: this._imageSize,
                        }]}
                        source={require('./../../assets/img/icon/icon.png')} />
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

export default HeaderComponent;