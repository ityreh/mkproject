const Markup = require('./Markup');
const FileWriter = require('./FileWriter');
const Title = require('./Title');
const Description = require('./Description');
const AggregatedDocument = require('./AggregatedDocument');
const Badge = require('./Badge');
const Visual = require('./Visual');
const Installation = require('./Installation');

function generate(markupLanguage) {
    this.markup = new Markup(markupLanguage);
    let title = new Title('mkreadme', this.markup);
    let description = new Description('This is the description of my program and it will be written to the reamde file.', this.markup);
    let badge = new Badge(this.markup);
    let visual = new Visual(this.markup);
    let installation = new Installation('You can install this software with npm:\n\n    npm i', this.markup);
    write(aggregate(title, description, badge, visual, installation));
}

function write(document) {
    let fileWriter = new FileWriter('md');
    fileWriter.open();
    fileWriter.append(document.get());
}

function aggregate(title, description, badge, visual, installation) {
    let aggregatedDocument = new AggregatedDocument();
    aggregatedDocument.appendSection(title.get(), true);
    aggregatedDocument.appendSection(description.get(), true);
    aggregatedDocument.appendSection(badge.get(), true);
    aggregatedDocument.appendSection(visual.get(), true);
    aggregatedDocument.appendSection(installation.get(), false);
    return aggregatedDocument;
}

module.exports = {
    generate
}
