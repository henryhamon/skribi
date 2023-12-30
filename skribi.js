const Pattern = class {
    /**
     * Constructor for the class.
     *
     * @param {type} regex - description of the regex parameter
     * @param {type} replacement - description of the replacement parameter
     */
    constructor(regex, replacement) {
        this.regex = regex;
        this.replacement = replacement;
    }

    /**
     * Apply the given replacement to the raw string.
     *
     * @param {string} raw - The raw string to apply the replacement to.
     * @return {string} - The string with the replacement applied.
     */
    apply(raw) {
        return raw.replace(this.regex, this.replacement);
    }
    
}

const Skribi = class {
    /**
     * Initializes a new instance of the Constructor class.
     *
     * @param {Element} el - The element to be associated with the instance.
     */
    constructor(el) {
        this.el = el;
        this.el.style.whiteSpace = 'pre-wrap';
        this.el.contentEditable = true;
        this.content = this.el.innerHTML;
    }

}

document.querySelectorAll("[data-skribi]").forEach( el => {
    let s = new Skribi(el);
});