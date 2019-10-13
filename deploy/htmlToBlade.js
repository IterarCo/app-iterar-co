var fs = require('fs')
, cheerio = require('cheerio');

// html file we are working on
var htmlPath = __dirname + '/../dist/index.html';
// html file to output modified html to
var outPath = __dirname + '/../dist/app.blade.php';

// load in the json file with the replace values
var replaceValues = require('./replaceValues.json');

fs.readFile(htmlPath, {encoding: 'utf8'}, function(error, data) {

    var $ = cheerio.load(data, {decodeEntities: false}); // load in the HTML into cheerio
    $('meta[lang="blade"]').each(function() {
        const thisTag = $(this);
        const thisValue = thisTag.attr("value");
        $(this).replaceWith(thisValue);
    });
    fs.writeFile(outPath, $.html(), function(error, data){
        
    });
});