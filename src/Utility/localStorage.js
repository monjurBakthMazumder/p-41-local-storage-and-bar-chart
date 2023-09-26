const GetData = () => {
    const getDataStore = localStorage.getItem("data")
    if(getDataStore){
        return JSON.parse(getDataStore)
    }
    return {
        "SSL" : 0,
        "SSD" : 0,
        "SSDro" : 0,
        "DDL" : 0,
        "DDD" : 0,
        "DDDro" : 0,
        "RRL" : 0,
        "RRD" : 0,
        "RRDro" : 0,
        "KTL" : 0,
        "KTD" : 0,
        "KTDro" : 0,
        "FBL" : 0,
        "FBD" : 0,
        "FBDro" : 0,
        "CVL" : 0,
        "CVD" : 0,
        "CVDro" : 0,
        "CCL" : 0,
        "CCD" : 0,
        "CCDro" : 0,
    }
}
const SavedData = (name) => {
    const dataStore = GetData();
        if (dataStore.hasOwnProperty(name)) {
            dataStore[name] += 1;
            localStorage.setItem("data", JSON.stringify(dataStore));
        }
}

export {GetData, SavedData}