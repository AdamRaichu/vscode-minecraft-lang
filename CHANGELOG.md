# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

Currently no planned features.

## [2.2.0] - 2022-11-19

Added:

- Extension now contributes a default setting to `editor.tokenColorCustomizations.textMateRules`, which causes `§` format to be styled automatically. In case you already customize this setting, the extension's code is below.

```JSON
{"editor.tokenColorCustomizations":{"textMateRules":[{"scope":"string.lang","settings":{"foreground":"#ffffff"}},{"scope":"entity.name.function.format.0.lang","settings":{"foreground":"#000000"}},{"scope":"entity.name.function.format.1.lang","settings":{"foreground":"#0000aa"}},{"scope":"entity.name.function.format.2.lang","settings":{"foreground":"#00aa00"}},{"scope":"entity.name.function.format.3.lang","settings":{"foreground":"#00aaaa"}},{"scope":"entity.name.function.format.4.lang","settings":{"foreground":"#aa0000"}},{"scope":"entity.name.function.format.5.lang","settings":{"foreground":"#aa00aa"}},{"scope":"entity.name.function.format.6.lang","settings":{"foreground":"#ffaa00"}},{"scope":"entity.name.function.format.7.lang","settings":{"foreground":"#aaaaaa"}},{"scope":"entity.name.function.format.8.lang","settings":{"foreground":"#555555"}},{"scope":"entity.name.function.format.9.lang","settings":{"foreground":"#5555ff"}},{"scope":"entity.name.function.format.a.lang","settings":{"foreground":"#55ff55"}},{"scope":"entity.name.function.format.b.lang","settings":{"foreground":"#55ffff"}},{"scope":"entity.name.function.format.c.lang","settings":{"foreground":"#ff5555"}},{"scope":"entity.name.function.format.d.lang","settings":{"foreground":"#ff55ff"}},{"scope":"entity.name.function.format.e.lang","settings":{"foreground":"#ffff55"}},{"scope":"entity.name.function.format.f.lang","settings":{"foreground":"#ffffff"}},{"scope":"entity.name.function.format.g.lang","settings":{"foreground":"#ddd605"}},{"scope":"entity.name.function.format.k.lang","settings":{"fontStyle":"italic bold underline strikethrough"}},{"scope":"entity.name.function.format.l.lang","settings":{"fontStyle":"bold"}},{"scope":"entity.name.function.format.m.lang","settings":{"fontStyle":"strikethrough"}},{"scope":"entity.name.function.format.n.lang","settings":{"fontStyle":"underline"}},{"scope":"entity.name.function.format.o.lang","settings":{"fontStyle":"italic"}},{"scope":"entity.name.function.format.r.lang","settings":{"fontStyle":"","foreground":"#ffffff"}}]}}
```

## [2.1.2] - 2022-11-9

Added:

- Keybinding variables are now highlighted like escape characters (such as `\n`).
- Extension should now be available on other platforms, not just web interface. ([#9](https://github.com/AdamRaichu/vscode-minecraft-lang/issues/9))

## [2.0.2] - 2022-11-3

Fixed:

- Broken comment highlighting. ([#4](https://github.com/AdamRaichu/vscode-minecraft-lang/issues/4))

## [2.0.0] - 2022-11-2

Added:

- Hover hints now appear in code for top-level keys.

Fixed:

- Broken highlighting of `<>` bracket pairs. ([#1](https://github.com/AdamRaichu/vscode-minecraft-lang/issues/1))

## [1.0.0] - 2022-10-28

Initial release

Features:

- Basic syntax highlighting
- Extension is bascially a clone of `zz5840.minecraft-lang-colorizer`, which no longer appears to be maintained.
