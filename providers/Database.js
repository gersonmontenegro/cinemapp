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

    constructor() {
        console.log("lili????");
    }



}

export default Database;