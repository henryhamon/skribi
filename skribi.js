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

const Rule = class {
    name;
    patterns;
    /**
     * Constructor for creating an instance of the class.
     *
     * @param {string} name - The name of the instance.
     * @param {Array} patterns - An optional array of patterns.
     */
    constructor(name, patterns) {
        this.name = name;
        this.patterns = patterns;
    }

    /**
     * Apply the given raw input to the list of patterns.
     *
     * @param {any} raw - The raw input to be processed.
     * @return {any} - The processed output.
     */
    apply(raw) {
        return this.patterns.reduce((acc, p) => p.apply(acc), raw);
    }
}

/*
* Regex Markdown parser to Html
*/
const Markdown2Html = class {
    rules = [];

    /**
     * Initializes a new instance of the class.
     */
    constructor() {
        this.#defaultRules();
    }

    #defaultRules() {
        this.rules.push(new Rule('Heading', [
            new Pattern(/(^|\n)(#\s+)(.*)/g,'<h1>$3</h1>'),
            new Pattern(/(^|\n)(#{2}\s+)(.*)/, '<h2>$3</h2>'),
            new Pattern(/(^|\n)(#{3}\s+)(.*)/, '<h3>$3</h3>'),
            new Pattern(/(^|\n)(#{4}\s+)(.*)/, '<h4>$3</h4>'),
            new Pattern(/(^|\n)(#{5}\s+)(.*)/, '<h5>$3</h5>'),
            new Pattern(/(^|\n)(#{6}\s+)(.*)/, '<h6>$3</h6>'),
        ]));

        this.rules.push(new Rule('Bold', [
            new Pattern(/(\*\*|__)(.*?)\1/, '<strong>$2</strong>'),
            new Pattern(/(\_\_|__)(.*?)\1/, '<strong>$2</strong>')
        ]));
    }

    render(markdown) {
        // Implement Markdown to HTML conversion logic here
        let output = markdown;
        this.rules.forEach(r => {
            output = r.apply(output)
        })
        return output
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

module.exports = {Pattern, Rule, Markdown2Html, Skribi}