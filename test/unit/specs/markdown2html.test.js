
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

    test('should render markdown to HTML using default rules', () => {
        const markdown2Html = new Markdown2Html();

        // Example markdown content
        const markdownContent = 'Text\n**Bold Text**\n\n*Italic Text* ~~strike you out~~  \n>This is a simple blockquote.\nThe end of one section.\n-----\n\nThe start of another.\n ![picsum pic](https://fastly.picsum.photos/id/0/5000/3333.jpg) ';

        // Call the render method
        const htmlResult = markdown2Html.render(markdownContent);

        // Assert that the rendered HTML contains expected tags and content
        expect(htmlResult).toContain('<strong>Bold Text</strong>');
        expect(htmlResult).toContain('<i>Italic Text</i>');
        expect(htmlResult).toContain('<blockquote>This is a simple blockquote.</blockquote>');
        expect(htmlResult).toContain('<hr />');
        expect(htmlResult).toContain('<del>strike you out</del>');
        expect(htmlResult).toContain("<img src='https://fastly.picsum.photos/id/0/5000/3333.jpg' alt='picsum pic' >");
    });

    test('should render markdown with unordered list to HTML', () => {
        const markdown2Html = new Markdown2Html();
        // Example markdown content with an unordered list
        const markdownContent = '- Item 1\n- Item 2\n- Item 3';
        // Call the render method
        const htmlResult = markdown2Html.render(markdownContent);
        // Assert that the rendered HTML contains the unordered list tags and items
        expect(htmlResult).toContain('<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>');
    });
    // Add more test cases as needed for specific functionality
});
