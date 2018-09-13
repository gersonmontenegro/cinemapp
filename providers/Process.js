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

    getGenres(ids_str) {
        return new Promise((resolve, reject) => {
            if (ids_str != null) {
                let query = `select name from genre where id in (${ids_str})`;
                console.log("IDS>" + ids_str);
                console.log("Q>" + query);

                this.db.executeQuery(query).then(
                    (data) => {
                        let genres = this.db.query2JSON(data);
                        let genresList = [];
                        genres.forEach((item) => {
                            genresList.push(item.name);
                        });
                        resolve(genresList.join(' | '));
                    }
                );
            } else {
                resolve(false);
            }
        });
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