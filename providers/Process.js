import React, { PureComponent } from 'react';
import { HEART_EMPTY_ICON, MORE_EMPTY_ICON, PLAY_ICON } from './../assets/css/general';

class Process extends PureComponent {
    static instance = null;

    static createInstance() {
        var object = new Process();
        return object;
    }

    static getInstance() {
        if (!Process.instance) {
            Process.instance = Process.createInstance();
        }
        return Process.instance;
    }

    cutText(text, characters) {
        return text != '' ? text.substring(0, characters) + "..." : "";
    }

    toUpper(text) {
        return text != '' ? text.toUpperCase() : '';
    }

    getIconType(type) {
        return type == 0 ? HEART_EMPTY_ICON : type == 1 ? PLAY_ICON : MORE_EMPTY_ICON;
    }
}

export default Process;