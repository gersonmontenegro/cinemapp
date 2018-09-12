let SQLite = require('react-native-sqlite-storage');

class Database {
    _db = null;
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
    }



}

export default Database;