const Markup = require('./Markup');
const FileWriter = require('./FileWriter');
const AggregatedDocument = require('./AggregatedDocument');

const Title = require('./sections/Title');
const Description = require('./sections/Description');
const Badge = require('./sections/Badge');
const Visual = require('./sections/Visual');
const Installation = require('./sections/Installation');
const Usage = require('./sections/Usage');
const Support = require('./sections/Support');
const Roadmap = require('./sections/Roadmap');
const Contributing = require('./sections/Contributing');
const Acknowledgement = require('./sections/Acknowledgement');
const License = require('./sections/License');
const Project = require('./sections/Project');

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
    let acknowledgement = new Acknowledgement('- [Ityreh](https://github.com/ityreh)', this.markup);
    let license = new License('[GNU GPLv3](./LICENSE)', this.markup);
    let project = new Project('Working on version 1.0', this.markup);
    write(aggregate(title, description, badge, visual, installation, usage, support, roadmap, contributing, acknowledgement, license, project));
}

function write(document) {
    let fileWriter = new FileWriter('md');
    fileWriter.open();
    fileWriter.append(document.get());
}

function aggregate(title, description, badge, visual, installation, usage, support, roadmap, contributing, acknowledgement, license, project) {
    let aggregatedDocument = new AggregatedDocument();
    aggregatedDocument.appendSection(title.get(), true);
    aggregatedDocument.appendSection(description.get(), true);
    aggregatedDocument.appendSection(badge.get(), true);
    aggregatedDocument.appendSection(visual.get(), true);
    aggregatedDocument.appendSection(installation.get(), true);
    aggregatedDocument.appendSection(usage.get(), true);
    aggregatedDocument.appendSection(support.get(), true);
    aggregatedDocument.appendSection(roadmap.get(), true);
    aggregatedDocument.appendSection(contributing.get(), true);
    aggregatedDocument.appendSection(acknowledgement.get(), true);
    aggregatedDocument.appendSection(license.get(), true);
    aggregatedDocument.appendSection(project.get(), false);
    return aggregatedDocument;
}

module.exports = {
    generate
}
