// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

export function activate() {
  vscode.languages.registerHoverProvider("mc-lang", {
    provideHover(document, position, token) {
      return new Hover("I am a hover!");
    },
  });
}

// this method is called when your extension is deactivated
export function deactivate() {}
