const vscode = require("vscode");
var index1 = {
  // Contains top level keys (entity, chat, action, etc...)
  "": "",
  accessibility: "For keys pertaining to text-to-speech translation",
};
var index2 = {};

vscode.languages.registerHoverProvider("mc-lang", {
  provideHover(document, position, token) {
    var word = document.getText(document.getWordRangeAtPosition(position));
    var line = document.lineAt(position);
    if (line.text.startsWith(word)) {
      if (word in index1) {
        // Top level keys
        return new vscode.Hover(`**${word}**\n\n${index1[word]}`);
      } else {
        return new vscode.Hover("No information available");
      }
    } else {
      if (word in index2) {
        // Anything else
        return new vscode.Hover(
          `**${word}**\n\n${index2[word]}\n\n*Hover hints do not yet support non-primary keys.*`
        );
      }
    }
  },
});
