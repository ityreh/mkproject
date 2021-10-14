const ArgumentParser = require('./ArgumentParser');
const Title = require('./Title');

function start(title) {
    this.title = new Title(title);
    this.title.print();
    this.args = new ArgumentParser();
}

module.exports = {
    start
}
