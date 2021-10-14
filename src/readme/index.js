const Markup = require('./Markup');
const Title = require('./Title');

function generate(markupLanguage) {
    let markup = new Markup(markupLanguage);
    let title = new Title('mkreadme', markup);
    console.log(title.get());
}

function write() {

}

module.exports = {
    generate
}
