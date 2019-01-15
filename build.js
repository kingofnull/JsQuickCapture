var fs   = require('fs');
var UglifyJS = require("uglify-js")

srcFile = fs.readFileSync('./src/quick-capture.js').toString('ascii');
b64src = fs.readFileSync('./src/dom-to-image.js').toString('base64');

finalFile=(srcFile.replace('%DOM_TO_IMG_BASE64%',b64src));
fs.writeFileSync("./dist/quick-capture.js", finalFile);
minResult=UglifyJS.minify(finalFile);
fs.writeFileSync("./dist/quick-capture.min.js", minResult.code);