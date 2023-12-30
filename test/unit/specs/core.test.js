
// Import the Pattern and Rules class
const {Pattern, Rule} = require('../../../skribi.js');

// Test suite for the Pattern class
describe('Pattern', () => {
    // Test case for the constructor
    test('should create a Pattern instance with the given regex and replacement', () => {
        const regex = /test/g;
        const replacement = 'example';
        const pattern = new Pattern(regex, replacement);

        expect(pattern.regex).toBe(regex);
        expect(pattern.replacement).toBe(replacement);
    });

    // Test case for the apply method
    test('should apply the replacement to the raw string', () => {
        const regex = /fox/g;
        const replacement = 'dog';
        const pattern = new Pattern(regex, replacement);

        const rawString = 'The quick brown fox jumps over the lazy fox';
        const result = pattern.apply(rawString);

        expect(result).toBe('The quick brown dog jumps over the lazy dog');
    });
});

// Test suite for the Rules class
describe('Rules', () => {
    // Test case for the constructor
    test('should create a Rules instance with the given name and patterns', () => {
        const name = 'TestRules';
        const patterns = [new Pattern(/test/g, 'example')];
        const rule = new Rule(name, patterns);

        expect(rule.name).toBe(name);
        expect(rule.patterns).toEqual(patterns);
    });

    // Test case for the apply method
    test('should apply the patterns to the raw input', () => {
        const name = 'TestRules';
        const patterns = [new Pattern(/fox/g, 'dog'), new Pattern(/brown/g, 'red')];
        const rule = new Rule(name, patterns);

        const rawInput = 'The quick brown fox jumps over the lazy fox';
        const result = rule.apply(rawInput);

        expect(result).toBe('The quick red dog jumps over the lazy dog');
    });
});

