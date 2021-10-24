const Markup = require('./Markup');
const FileWriter = require('./FileWriter');
const SectionBuilder = require('./sections/SectionBuilder');
const DocumentBuilder = require('./DocumentBuilder');

function generate(markupLanguage) {
    let markup = new Markup(markupLanguage);

    let readme = aggregate(
        new SectionBuilder(markup).title('mkreadme').build(),
        new SectionBuilder(markup).description('This is the description of my program and it will be written to the reamde file.').build(),
        new SectionBuilder(markup).badge().build(),
        new SectionBuilder(markup).visual().build(),
        new SectionBuilder(markup).installation('You can install this software with npm:\n\n    npm i').build(),
        new SectionBuilder(markup).usage('Use the CLI with or without arguments:\n\n    mkreadme').build(),
        new SectionBuilder(markup).support('If you have any problems using this tool or feature reqeusts, please feel free to [open an issue](https://www.google.de).').build(),
        new SectionBuilder(markup).roadmap('TODO: roadmap').build(),
        new SectionBuilder(markup).contributing('You are welcome to contribute and make pull requests. If you want to introduce a new bigger feature you can [open an issue](https://www.google.com) to discuss it.').build(),
        new SectionBuilder(markup).acknowledgement('- [Ityreh](https://github.com/ityreh)').build(),
        new SectionBuilder(markup).license('[GNU GPLv3](./LICENSE)').build(),
        new SectionBuilder(markup).project('Working on version 1.0').build()
    );

    write(readme);
}

function write(document) {
    let fileWriter = new FileWriter('md');
    fileWriter.open();
    fileWriter.append(document);
}

function aggregate(title, description, badge, visual, installation, usage, support, roadmap, contributing, acknowledgement, license, project) {
    return new DocumentBuilder()
        .append(title)
        .append(description)
        .append(badge)
        .append(visual)
        .append(installation)
        .append(usage)
        .append(support)
        .append(roadmap)
        .append(contributing)
        .append(acknowledgement)
        .append(license)
        .append(project)
        .build();
}

module.exports = {
    generate
}
