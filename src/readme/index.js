const Markup = require('./Markup');
const FileWriter = require('./FileWriter');
const Title = require('./Title');
const Description = require('./Description');
const AggregatedDocument = require('./AggregatedDocument');
const Badge = require('./Badge');
const Visual = require('./Visual');
const Installation = require('./Installation');
const Usage = require('./Usage');
const Support = require('./Support');
const Roadmap = require('./Roadmap');
const Contributing = require('./Contributing');

function generate(markupLanguage) {
    this.markup = new Markup(markupLanguage);
    let title = new Title('mkreadme', this.markup);
    let description = new Description('This is the description of my program and it will be written to the reamde file.', this.markup);
    let badge = new Badge(this.markup);
    let visual = new Visual(this.markup);
    let installation = new Installation('You can install this software with npm:\n\n    npm i', this.markup);
    let usage = new Usage('Use the CLI with or without arguments:\n\n    mkreadme', this.markup);
    let support = new Support('If you have any problems using this tool or feature reqeusts, please feel free to [open an issue](https://www.google.de).', this.markup);
    let roadmap = new Roadmap('TODO: roadmap', this.markup);
    let contributing = new Contributing('You are welcome to contribute and make pull requests. If you want to introduce a new bigger feature you can [open an issue](https://www.google.com) to discuss it.', this.markup);
    write(aggregate(title, description, badge, visual, installation, usage, support, roadmap, contributing));
}

function write(document) {
    let fileWriter = new FileWriter('md');
    fileWriter.open();
    fileWriter.append(document.get());
}

function aggregate(title, description, badge, visual, installation, usage, support, roadmap, contributing) {
    let aggregatedDocument = new AggregatedDocument();
    aggregatedDocument.appendSection(title.get(), true);
    aggregatedDocument.appendSection(description.get(), true);
    aggregatedDocument.appendSection(badge.get(), true);
    aggregatedDocument.appendSection(visual.get(), true);
    aggregatedDocument.appendSection(installation.get(), true);
    aggregatedDocument.appendSection(usage.get(), true);
    aggregatedDocument.appendSection(support.get(), true);
    aggregatedDocument.appendSection(roadmap.get(), true);
    aggregatedDocument.appendSection(contributing.get(), false);
    return aggregatedDocument;
}

module.exports = {
    generate
}
