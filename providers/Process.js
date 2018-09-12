import React, { PureComponent } from 'react';
import { HEART_EMPTY_ICON, MORE_EMPTY_ICON, PLAY_ICON } from './../assets/css/general';
import Database from './Database';

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

    exists(text) {
        return text != null ? text : '';
    }

    getIconType(type) {
        return type == 0 ? HEART_EMPTY_ICON : type == 1 ? PLAY_ICON : MORE_EMPTY_ICON;
    }

    saveGenres(genres) {
        this.db = Database.getInstance();
        let query = `delete from genre`;
        this.db.executeQuery(query).then((data) => {
            genres.genres.forEach(genre => {
                let query = `insert into genre (id, name) values('${genre.id}', '${genre.name}')`;
                this.db.executeQuery(query).then((data) => { });
            });
        });
    }
}

export default Process;