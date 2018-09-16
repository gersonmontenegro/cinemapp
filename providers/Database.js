let SQLite = require('react-native-sqlite-storage');
import Process from './Process';
import { IMAGE_URL } from './Data';

class Database {
    _db = null;
    _Process = Process.getInstance();

    static instance = null;

    static createInstance() {
        var object = new Database();
        return object;
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = Database.createInstance();
        }
        return Database.instance;
    }

    init() {
        this._db = SQLite.openDatabase('cinemapp.db', '1.0', 'Cinemapp database', 200000, this.openCB, this.errorCB);
        return this.createTables();
    }

    createTables = () => {
        return new Promise((resolve, reject) => {
            var tables = [];
            var query = `
            CREATE TABLE IF NOT EXISTS category (
              create_time timestamp NULL DEFAULT CURRENT_TIMESTAMP,
              update_time timestamp NULL DEFAULT NULL,
              active INTEGER NOT NULL DEFAULT 1,
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT DEFAULT NULL,
              url TEXT DEFAULT NULL
            );`;
            tables.push(query);
            query = `
            CREATE TABLE IF NOT EXISTS genre (
              create_time timestamp NULL DEFAULT CURRENT_TIMESTAMP,
              update_time timestamp NULL DEFAULT NULL,
              active INTEGER NOT NULL DEFAULT 1,
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT DEFAULT NULL
            );`;
            tables.push(query);
            query = `
            CREATE TABLE IF NOT EXISTS movie (
              create_time timestamp NULL DEFAULT CURRENT_TIMESTAMP,
              update_time timestamp NULL DEFAULT NULL,
              active INTEGER NOT NULL DEFAULT 1,
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              vote_count INTEGER DEFAULT NULL,
              vote_average INTEGER DEFAULT NULL,
              title TEXT DEFAULT NULL,
              popularity INTEGER DEFAULT NULL,
              poster_path TEXT DEFAULT NULL,
              original_language TEXT DEFAULT NULL,
              original_title TEXT DEFAULT NULL,
              genre_ids TEXT DEFAULT NULL,
              backdrop_path TEXT DEFAULT NULL,
              adult TEXT DEFAULT NULL,
              overview TEXT DEFAULT NULL,
              release_date TEXT,
              idcategory INTEGER
            );`;
            tables.push(query);
            query = `
            CREATE TABLE IF NOT EXISTS favorite (
              create_time timestamp NULL DEFAULT CURRENT_TIMESTAMP,
              update_time timestamp NULL DEFAULT NULL,
              active INTEGER NOT NULL DEFAULT 1,
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              iduser INTEGER,
              idmovie INTEGER
            );`;
            tables.push(query);

            tables.forEach((q, index) => {
                this.executeQuery(q).then(
                    (res) => {
                        console.log(index + ": RESULT: " + res);
                        if (index == tables.length - 1) {
                            resolve("at this time, it's supposed that is finished");
                        }
                    }
                );
            });
        });
    }

    updateMovie(item) {
        // console.log("updating movie...", item.id);
        let query = `select * from movie where id = ${item.id}`;
        this.executeQuery(query).then(
            (data) => {
                if (parseInt(data.rows.length) > 0) {
                    var item = data.rows.item(0);
                    // console.log("UPDATING:", item.id, this._Process.existsImageBackground(item.backdrop_path, item));
                    this.getBase64Img(item.id, this._Process.existsImageBackground(item.backdrop_path, item));
                }
            }
        );
    }

    insertMovie(item, category) {
        item.overview = this._Process.removingApostrophe(item.overview);
        item.title = this._Process.removingApostrophe(item.title);
        item.original_title = this._Process.removingApostrophe(item.original_title);
        let query = `insert into movie (
            id,vote_count,vote_average,title,
            popularity,poster_path,original_language,original_title,
            genre_ids,backdrop_path,adult,overview,
            release_date,idcategory
            ) values(
                ${item.id}, ${item.vote_count}, ${item.vote_average}, '${item.title}',
                '${item.popularity}', '${item.poster_path}', '${item.original_language}', '${item.original_title}',
                '${item.genre_ids}', '${item.backdrop_path}', '${item.adult}', '${item.overview}',
                '${item.release_date}', ${category}
            )`;
        this.executeQuery(query).then(
            (data) => {
                console.log("INSERTED:", data);
                this.getBase64Img(item.id, this._Process.existsImageBackground(item.backdrop_path, item));
            }
        );
    }

    getBase64Img(id, name) {
        // ImgToBase64.getBase64String(IMAGE_URL + name)
        //     .then(base64String => this.saveBase64Img(base64String))
        //     .catch(err => this.saveBase64Img(err));
    }

    saveBase64Img(base64img) {
        console.log("ResultBase64", base64img);

    }

    saveMovies(movies, category) {
        movies.forEach((item, index) => {
            let idQuery = `select count(1) cantidad from movie where id = ${item.id}`;
            this.executeQuery(idQuery).then(
                (data) => {
                    if (parseInt(data.rows.item(0)["cantidad"]) > 0) {
                        this.updateMovie(item);
                    } else {
                        this.insertMovie(item, category);
                    }
                }
            );
        });
    }

    executeQuery = (query) => {
        return new Promise((resolve, reject) => {
            this._db.transaction((tx) => {
                tx.executeSql(query, [], (tx, results) => {
                    resolve(results);
                }, (err) => {
                    // console.log("Error: ", err, "With QUERY:", query);
                });
            });
        });
    }

    openCB = () => {
        console.log("Open?");
    }

    errorCB = () => {
        console.log("Error?");
    }



}

export default Database;