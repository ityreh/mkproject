const Title = require('./Title');
const Description = require('./Description');
const Badge = require('./Badge');
const Visual = require('./Visual');
const Installation = require('./Installation');
const Usage = require('./Usage');
const Support = require('./Support');
const Roadmap = require('./Roadmap');
const Contributing = require('./Contributing');
const Acknowledgement = require('./Acknowledgement');
const License = require('./License');
const Project = require('./Project');

class SectionBuilder {
    constructor(markup) {
        this.markup = markup;
        this.first = true;
    }

    title(text) {
        this.section = new Title(text, this.markup);
        return this;
    }

    description(text) {
        this.section = new Description(text, this.markup);
        return this;
    }

    badge() {
        this.section = new Badge(this.markup);
        return this;
    }

    visual() {
        this.section = new Visual(this.markup);
        return this;
    }

    installation(text) {
        this.section = new Installation(text, this.markup);
        return this;
    }

    usage(text) {
        this.section = new Usage(text, this.markup);
        return this;
    }

    support(text) {
        this.section = new Support(text, this.markup);
        return this;
    }

    roadmap(text) {
        this.section = new Roadmap(text, this.markup);
        return this;
    }

    contributing(text) {
        this.section = new Contributing(text, this.markup);
        return this;
    }

    acknowledgement(text) {
        this.section = new Acknowledgement(text, this.markup);
        return this;
    }

    license(text) {
        this.section = new License(text, this.markup);
        return this;
    }

    project(text) {
        this.section = new Project(text, this.markup);
        return this;
    }

    build() {
        return this.section.get();
    }
}

module.exports = SectionBuilder;
