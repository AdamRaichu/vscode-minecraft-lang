const vscode = require("vscode");
var index1 = {
  // Contains top level keys (entity, chat, action, etc...)
  "": "",
  accessibility: "For keys pertaining to text-to-speech translation",
};

vscode.languages.registerHoverProvider("mc-lang", {
  provideHover(document, position, token) {
    var word = document.getText(document.getWordRangeAtPosition(position));
    if (word in index1) {
      return new vscode.Hover(`**${word}**\n${index1[word]}`);
    } else {
      return new vscode.Hover("No information available");
    }
  },
});
