class Title {
    constructor(title, markup) {
        this.title = markup.title(title, 1);
    }

    get() {
        return this.title;
    }
}

module.exports = Title;
