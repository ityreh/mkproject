class License {
    constructor(text, markup) {
        this.text = markup.title('License', 2);
        this.text = this.text.concat('\n');
        this.text = this.text.concat(markup.text(text));
    }

    get() {
        return this.text;
    }
}

module.exports = License;
