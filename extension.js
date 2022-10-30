// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

vscode.languages.registerHoverProvider("mc-lang", {
  provideHover(document, position, token) {
    return new vscode.Hover("I am a hover!");
  },
});
