const { JSDOM } = require('jsdom');
const { expect } = require('chai');
const sinon = require('sinon');

describe('AutoLaTeXRenderer', () => {
    let window, document;

    beforeEach(() => {
        const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`, { runScripts: 'dangerously' });
        window = dom.window;
        document = window.document;
        global.window = window;
        global.document = document;
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should load MathJax correctly', (done) => {
        const addMathJax = require('../AutoLaTeXRenderer').addMathJax;

        const scriptStub = sinon.stub(document, 'createElement').callsFake(() => {
            const script = document.createElement('script');
            script.onload = () => {
                expect(window.MathJax).to.exist;
                done();
            };
            return script;
        });

        addMathJax();
    });

    it('should render LaTeX properly', (done) => {
        const renderLatex = require('../AutoLaTeXRenderer').renderLatex;

        window.MathJax = {
            typesetPromise: () => Promise.resolve()
        };

        const consoleErrorStub = sinon.stub(console, 'error');

        renderLatex();

        setTimeout(() => {
            expect(consoleErrorStub.called).to.be.false;
            done();
        }, 100);
    });
});
