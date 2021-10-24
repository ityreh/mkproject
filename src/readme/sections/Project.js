class Project {
    constructor(text, markup) {
        this.text = markup.title('Project status', 2);
        this.text = this.text.concat('\n');
        this.text = this.text.concat(markup.text(text));
    }

    get() {
        return this.text;
    }
}

module.exports = Project;
