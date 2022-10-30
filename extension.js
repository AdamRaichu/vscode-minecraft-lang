// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

vscode.languages.registerHoverProvider("mc-lang", {
  provideHover(document, position, token) {
    var word = document.getText(document.getWordRangeAtPosition(position));
    return new vscode.Hover(`This word is "${word}".`);
  },
});
