const Markup = require('./Markup');
const FileWriter = require('./FileWriter');
const Title = require('./Title');
const Description = require('./Description');
const AggregatedDocument = require('./AggregatedDocument');

function generate(markupLanguage) {
    this.markup = new Markup(markupLanguage);
    let title = new Title('mkreadme', this.markup);
    let description = new Description('This is the description of my program and it will be written to the reamde file.', this.markup);
    write(aggregate(title, description));
}

function write(document) {
    let fileWriter = new FileWriter('md');
    fileWriter.open();
    fileWriter.append(document.get());
}

function aggregate(title, description) {
    let aggregatedDocument = new AggregatedDocument();
    aggregatedDocument.appendSection(title.get(), true);
    aggregatedDocument.appendSection(description.get(), false);
    return aggregatedDocument;
}

module.exports = {
    generate
}
