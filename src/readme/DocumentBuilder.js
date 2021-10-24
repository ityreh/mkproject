class DocumentBuilder {
    constructor() {
        this.sections = [];
    }

    append(section) {
        this.sections.push(section);
        return this;
    }

    build() {
        return this.sections.join('\n');
    }
}

module.exports = DocumentBuilder;
