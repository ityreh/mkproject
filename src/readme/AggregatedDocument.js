class AggregatedDocument {
    constructor() {
        this.document = '';
    }

    appendSection(section, linebreak) {
        this.document = this.document.concat(section);
        if (linebreak) this.linebreak();
    }

    linebreak() {
        this.document = this.document.concat('\n');
    }

    get() {
        return this.document;
    }
}

module.exports = AggregatedDocument;
