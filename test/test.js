var bitcoinity = require(__dirname + "/../lib/bitcoinity");

bitcoinity.getCSV({
    data_type : "volume",
    timespan : "10m",
    volume_unit : "btc",
    r : 'minute'
}, function(err, csvData) { // Dump response on output
    if (err) {
        console.log("Encountered a download error. Exiting.");
        throw err;
    }
    wideData = bitcoinity.parseCSV(csvData);
    console.log(wideData);
    tallData = bitcoinity.parseCSVTall(csvData, function(timestamp) {
        return timestamp.replace(" UTC", "+00");
    });
    console.log(tallData);
});