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
