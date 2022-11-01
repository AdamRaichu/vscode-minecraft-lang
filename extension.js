const vscode = require("vscode");
var index1 = {
  // Contains top level keys (entity, chat, action, etc...)
  accessibility: "For text pertaining to text-to-speech translation",
  accounts: "For keys relating to signed in accounts",
  achievement: "Use these to alter the text of achievement pop-ups.",
  action:
    "`action` keys define text for actions such as milking cows, dismounting horses, etc.",
  advMode:
    "*I'm unsure exactly what these do, but they appear to be related to commands*",
  apple:
    "`apple` keys only appear when playing on iOS devices. They relate to connecting to iCloud or LAN.",
  attribute: "`attribute` keys relate to entity attributes",
  attribution:
    "`attribution` has only two keys, one of them being `attribution.goBack=Go Back`. The other has a link to https://minecraft.net/attritbution ",
  authentication:
    "`authentication` keys are used for logging in and purchasing (EE)",
  eula: "`eula` keys contain text for prompting user to accept EULA (End User License Agreement)",
  book: "`book` keys contain text relating to books and quills, as well as written books.",
  build:
    "`build` texts control the messages shown when players try to violate the build limit",
  chalkboardScreen:
    "`chalkboard` contains button labels for a discontinued EE block",
  chat: "`chat` keys contain text for chat settings, game messages, etc.",
  chestScreen:
    "`chestScreen` keys control inventory labels in chests and large chests",
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
          `**${word}**\n\n*Hover hints do not yet support non-primary keys.*`
        );
      }
    }
  },
});
