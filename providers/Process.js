import React, { PureComponent } from 'react';
import { HEART_EMPTY_ICON, MORE_EMPTY_ICON, PLAY_ICON } from './../assets/css/general';
import Database from './Database';
import FetchData from './FetchData';
import { SEARCH_ONLINE_URL, IMAGE_URL, CHARACTER_PROFILE_PHOTO_URL } from './Data';

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

    existsImageBackground(img, state) {
        return img != '' && img != undefined && img != null && img != 'null' ? img : state.poster_path;
    }

    getGenres(ids_str) {
        return new Promise((resolve, reject) => {
            if (ids_str != null) {
                let query = `select name from genre where id in (${ids_str})`;
                this.db.executeQuery(query).then(
                    (data) => {
                        let genres = this.query2JSON(data);
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

    removingApostrophe(text) {
        return text.replace(new RegExp("\'", 'g'), "");
    }

    truncateTitle(text, item) {
        if (item.name != undefined) {
            return item.name;
        } else {
            return text.length != '' && text != undefined && text != 'null' && text != '' ? (text.length > 30 ? text.substring(0, 30) + "..." : text) : '';
        }
    }

    getImgPath(poster_path, item) {
        if (item.profile_path != '' && item.profile_path != undefined) {
            return CHARACTER_PROFILE_PHOTO_URL + item.profile_path;
        } else {
            return IMAGE_URL + poster_path;
        }
    }

    searchMovie(text, filter) {
        return new Promise((resolve, reject) => {
            this.db = this.db == null ? Database.getInstance() : this.db;
            let query = `select * from movie where title like '%${text}%'`;
            if (filter != '') {
                query += ` and idcategory in (${filter})`;
            }
            query += ` order by vote_average desc`;
            this.db.executeQuery(query).then((data) => {
                resolve(this.query2JSON(data));
            });
        });
    }

    searchMovieOnline(text) {
        return new Promise((resolve, reject) => {
            let fetchData = FetchData.getInstance();
            fetchData.getData(SEARCH_ONLINE_URL + text).then(
                (data) => {
                    resolve(data);
                }
            );
        });
    }

    query2JSON = (resQuery) => {
        var quantity = resQuery.rows.length;
        var data = [];
        for (var r = 0; r < quantity; r++) {
            data.push(resQuery.rows.item(r));
        }
        return data;
    }

    createFilter(baseState) {
        let filter = [];
        if (baseState.optPopular) {
            filter.push(1);
        }
        if (baseState.optTopRated) {
            filter.push(2);
        }
        if (baseState.optUpcoming) {
            filter.push(3);
        }
        return filter.join(',');
    }

    getGenreStringList(item) {
        if (typeof (item.genre_ids) == 'object') {
            return item.genre_ids.join(",");
        } else {
            return item.genre_ids;
        }
    }

}

export default Process;