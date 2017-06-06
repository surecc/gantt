var fs = require('fs'),
    xml2js = require('xml2js'),
    jsonfile = require('jsonfile')
 
var parser = new xml2js.Parser();
var file = __dirname + '/result.json';

fs.readFile(__dirname + '/data.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        jsonfile.writeFile(file, result, function (err) {
		  console.error(err)
		})
        console.log('Done');
    });
});