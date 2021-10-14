class Markup {
    constructor(markupLanguage) {
        //TODO: this is not used yet, but is a preparation for the support of multiple markup languages
        this.markupLanguage = markupLanguage;
        this.suffix = '\n';
    }

    title(title, depth) {
        let prefix = '#'.repeat(depth).concat(' ');
        return prefix.concat(title).concat(this.suffix);
    }

    text(text) {
        return text.concat(this.suffix);
    }

    markupLanguage() {
        return this.markupLanguage;
    }
}

module.exports = Markup;
