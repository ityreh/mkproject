class Description {
    constructor(text, markup) {
        this.text = markup.text(text);
    }

    get() {
        return this.text;
    }
}

module.exports = Description;
