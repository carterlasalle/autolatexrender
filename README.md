# AutoLaTeXRenderer

## Overview

AutoLaTeXRenderer is a userscript that automatically converts LaTeX on web pages into formatted math using MathJax. It scans the document for LaTeX expressions and renders them as formatted math, making it easier to read and understand mathematical content on web pages.

## Installation

To install the AutoLaTeXRenderer userscript, follow these steps:

1. Install a userscript manager extension for your browser, such as Tampermonkey or Greasemonkey.
2. Create a new userscript in the userscript manager.
3. Copy and paste the content of `AutoLaTeXRenderer.js` into the new userscript.
4. Save the userscript and enable it.

## Usage

Once the userscript is installed and enabled, it will automatically render LaTeX expressions on web pages. You don't need to do anything else. The script will observe the DOM for changes and render LaTeX expressions as they appear.

Here are some examples of LaTeX expressions that will be rendered by the script:

- Inline math: `$E = mc^2$`
- Display math: `$$\int_{a}^{b} f(x) \, dx$$`

The script supports both inline and display math, as well as escaping dollar signs using `\$`.

## Contributing

If you would like to contribute to the development of AutoLaTeXRenderer, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Tests

To use the tests, follow these steps:

1. Ensure you have Node.js and npm installed on your system.
2. Clone the repository and navigate to the project directory.
3. Install the necessary dependencies by running `npm install`.
4. Run the tests using a test runner like Mocha or Jest. For example, you can run `npm test` if you have a test script defined in your `package.json` file.

The tests will verify that the script works as expected and will catch potential issues early. They include unit tests for the `addMathJax` function to verify MathJax is loaded correctly and the `renderLatex` function to ensure LaTeX is rendered properly.
