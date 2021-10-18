class Support {
    constructor(text, markup) {
        this.text = markup.title('Support', 2);
        this.text = this.text.concat('\n');
        this.text = this.text.concat(markup.text(text));
    }

    get() {
        return this.text;
    }
}

module.exports = Support;
