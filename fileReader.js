const fs = require('fs');

exports.readTextFile = function (filename) {
    const handleReading = (err, content) => {
        if (err) throw new Error(err);
        return content;
    };

    fs.readFile(filename, 'utf-8', handleReading);
};