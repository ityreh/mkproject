class Acknowledgement {
    constructor(text, markup) {
        this.text = markup.title('Authors and acknowledgement', 2);
        this.text = this.text.concat('\n');
        this.text = this.text.concat(markup.text(text));
    }

    get() {
        return this.text;
    }
}

module.exports = Acknowledgement;
