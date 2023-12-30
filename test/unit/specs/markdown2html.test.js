
// Import the Markdown2Html class
const {Markdown2Html} = require('../../../skribi.js');

// Test suite for the Markdown2Html class
describe('Markdown2Html', () => {
    // Test case for the constructor
    test('should create an instance of Markdown2Html', () => {
        const markdown2Html = new Markdown2Html();
        expect(markdown2Html).toBeInstanceOf(Markdown2Html);
    });

    // Test case for the render method
    test('should render markdown heading to HTML', () => {
        const markdown2Html = new Markdown2Html();

        // Example markdown content
        const markdownContent = '# Heading';

        // Call the render method
        const htmlResult = markdown2Html.render(markdownContent);

        // Assert that the rendered HTML contains expected tags and content
        expect(htmlResult).toContain('<h1>Heading</h1>');
    });

    // Test case for the render method
    test('should render heading', () => {
        const markdown2Html = new Markdown2Html();

        // Call the render method
        let md = '#';
        for (let index = 1; index < 6; index++) {
            md += '#';
            let htmlResult = markdown2Html.render(md + ' Heading');
            expect(htmlResult).toContain(`<h${index+1}>Heading</h${index+1}>`);
        }
    });

    test('should render bold', () => {
        const markdown2Html = new Markdown2Html();
        let htmlResult = markdown2Html.render('This text contains **some bold** words.')
        expect(htmlResult).toContain('This text contains <strong>some bold</strong> words.')
        htmlResult = markdown2Html.render('It is possible to use __two underscores__ too.') 
        expect(htmlResult).toContain('It is possible to use <strong>two underscores</strong> too.')
    });


    // Add more test cases as needed for specific functionality
});
