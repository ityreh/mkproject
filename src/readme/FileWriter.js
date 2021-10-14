const fs = require('fs');

class FileWriter {
    constructor(fileExtension) {
        this.fileName = 'test-readme.'.concat(fileExtension);
    }

    open() {
        fs.writeFile(this.fileName, '', function (error, result) {
            if (error) console.log('error', error);
        });
    }

    append(text) {
        fs.writeFile(this.fileName, text, { flag: 'a' }, function (error, result) {
            if (error) console.log('error', error);
        });
    }
}

module.exports = FileWriter;
