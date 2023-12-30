// Import jsdom to set up a DOM environment
const { JSDOM } = require('jsdom');

// Create a fake DOM environment
const dom = new JSDOM('<!DOCTYPE html><div data-skribi></div>');
global.document = dom.window.document;

// Import the Skribi, Pattern and Rules class
const {Skribi} = require('../../../skribi.js');


// Test suite for the Skribi class
describe('Skribi', () => {
    // Test case for the constructor
    test('should initialize a new instance of the Skribi class', () => {
        // Create a new Skribi instance
        const element = document.querySelector('[data-skribi]');
        const skribi = new Skribi(element);

        // Assert that the instance was created successfully
        expect(skribi).toBeInstanceOf(Skribi);

        // Assert that the element properties were set correctly
        expect(skribi.el).toBe(element);
        expect(skribi.el.style.whiteSpace).toBe('pre-wrap');
        expect(skribi.el.contentEditable).toBe(true);
        expect(skribi.content).toBe(skribi.el.innerHTML);
    });
});

