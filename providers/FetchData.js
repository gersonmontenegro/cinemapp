class FetchData {
    static instance = null;

    static createInstance() {
        var object = new FetchData();
        return object;
    }

    static getInstance() {
        if (!FetchData.instance) {
            FetchData.instance = FetchData.createInstance();
        }
        return FetchData.instance;
    }

    getData(url) {
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export default FetchData;