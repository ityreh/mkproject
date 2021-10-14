const Title = require('./Title');
const ArgumentParser = require('./ArgumentParser');

function start(title) {
    this.title = new Title(title);
    this.title.print();
    this.args = new ArgumentParser();
}

module.exports = {
    start
}
