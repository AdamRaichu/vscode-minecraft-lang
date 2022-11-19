const vscode = require("vscode");

/* export*/ function activate() {
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
    chooseRealmScreen:
      "`choosRealmScreen` controls text in Realms menu in Play menu",
    customTemplatesScreen:
      "`customTemplatesScreen` has one key, which controls templates",
    craftingScreen: "`craftingScreen` controls names of tabs",
    credits: "`credits.skip` controls name of skip button when showing credits",
    cauldronScreen: '`cauldronScreen.header` is set to "Cauldron" by default.',
    codeScreen:
      "`codeScreen` appears to set controls for a code editor, but I have no idea which one",
    color: "`color` controls display names of colors",
    commandBlockScreen:
      "`commandBlockScreen` controls text in the command block menu",
    seargeSays: "I have no idea what the heck `seargeSays` is for man",
    commandBlock:
      "`commandBlock` controls the default name of a command block in chat (`@`), as well as it's `genericName` (`Command Block`)",
    commands:
      "`commands` contains descriptions of commands shown in chat autocomplete, as well as success and error messages",
    connect: "`connect` controls messages shown when connecting to a server",
    connect_gamepad:
      "`connect_gamepad` appears to be used for text whown when connecting controllers",
    gamepad_disconnect:
      "`gamepad_disconnect` seems to control text shown when a control unexpectedly disconnects",
    container:
      "`container` controlls labels of interactive blocks (e.g. beacon, hopper, stonecutter, etc.) when interacting",
    controller:
      "`controller` texts control action labels in inventory and modifying keybinds",
    course: "`course` is used by EE courses, whatever those are",
    crafting:
      "I have never seen the messages in `crafting` in normal gameplay, but they seem to be error messages",
    createWorld:
      "`createWorld` texts are used for creating highly customized worlds",
    createWorldUpsell: "Exactly what it sounds like",
    createWorldScreen:
      "`createWorldScreen` contains labels for contorls in creating and editing world settings",
    crossPlatformToggle:
      "`crossPlatformToggle` controls settings menu for controlling cross-platform play",
    realmsPendingInvitationScreen:
      "These texts are used when viewing pending realm invites.",
    realmsInvitationScreen: "Controls menu for inviting players to realms",
    realmJoining:
      "`realmJoining.progressTitle` is the message shown when joining a realm",
    realmsClearMembers:
      "`realmsClearMembers` is used when clearing members from a realm",
    realmsSharingScreen: "Fairly self-explanatory",
    realmsCreateScreen:
      "`realmsCreateScreen` texts are used when creating a realm",
    realmsConfigurationScreen: "These texts are used when configuring a realm.",
    realmsWorld: "`realmsWorld` texts contain information about realms",
    realmsPlus: "For texts about realms plus",
    raytracing: "`raytracing.RTX.name` = `RTX`",
    network: "For the network menu of the friends tab of the Play menu",
    networkWorld: "For LAN-related features",
    localWorld:
      "`localWorld` texts are used when user has no single-player worlds",
    thirdPartyWorld: "For texts related to servers",
    realmsSlotsScreen: "realms",
    realmsSettingsScreen: "self-explanatory",
    xblLogin: "I believe `xblLogin` keys are used for signing in to xbox live",
    xbl: "I believe `xbl` means for xbox live",
    playfab: "`playfab` appears to contain ban messages. See vanilla files",
    store: "These keys seem to be prompts to sign in",
    date: "`date` keys contain shortnames for the months",
    dayOneExperience:
      "These keys contain text shown to players when they first download the game",
    death: "These keys contain death messages",
    deathScreen: "`deathScreen` keys contain texts shown in the respawn menu",
    demo: "For texts shown in the demo version of the game",
    difficulty:
      "`difficutly.lock` texts contain prompts for locking a world's difficulty",
    dimension: "`dimension` contains the names of the 3 dimensions",
    disabledSkin:
      "for prompts given to players when they are using a server-disabled skin",
    disconnect:
      "`disconnect` texts contain the messages given when disconnected from a server",
    disconnectionScreen:
      "`disconnectionScreen` contains the errors shown when trying to connect to a server",
    storageSpaceWarningScreen:
      "`storageSpaceWarningScreen` contains the messages shown when you run out of storage",
    edu: "For EE keys",
    effect: "`effect` contains the names of the effects",
    enchantment: "`enchantment` contains the names of enchantments",
    entity: "`entity` keys contain the names of entities",
    exports: "`exports` keys are shown when downloading a world",
    addExternalServerScreen:
      "These texts are shown when adding a server to your server list",
    feature: "`feature` keys contain the display names of generated structures",
    feed: "`feed` seems to be connected to some kind of feed (as in content feed)",
    comment:
      "`comment` texts are shown in some kind of comments section? idek :/",
    furnaceScreen: "`furnaceScreen` texts are used for labels in furnace menu",
    gameArgument:
      "`gameArgument.featureUnsupported` = This version of Minecraft doesn't support this feature",
    gameMode:
      "`gameMode` contains names of gamemodes and game mode update message",
    gameTip: "For hints",
    generator:
      "`generator` seems to relate to custom world generation settings (old, amplified, etc.)",
    globalPauseScreen:
      "`globalPauseScreen` seems to contain text shown in the global pause screen",
    gui: "seems to contain gui labels",
    updateScreen: "Contains texts shown when Minecraft needs an update",
    hostOption: "`hostOption` contains texts shown in operator quick commands",
    howtoplay: "`howtoplay` contains texts shown in the how to play menus",
    immersive_reader: "idk",
    level:
      "`level` apperas to contain texts shown when importing/exporting a world",
    invite: "`invite` contains keys shown when inviting a player to a world",
    inventory: "`inventory.binSlot` = Destroy Item",
    item: "`item` keys contain the names of items in the inventory",
    itemGroup:
      "`itemGroup` contains the names of groups in the creative inventory",
    jigsaw:
      "For displays in the jigsaw block. See https://minecraft.fandom.com/wiki/Jigsaw_Block ",
    joincode: "EDU joincode",
    key: "`key` contains names of keybinds (e.g. Jump, Inventory, etc.",
    keyboard:
      "`keyboard` contains names of keys. (e.g. ESCAPE, RETURN, A, 1, F7, etc.)",
    lanServer: "For texts relating to LAN worlds",
    licensed_content:
      "`licensed_content.viewLicensedContent` has a link to https://minecraft.net/licensed-content/ ",
    livingroom: "`livingroom` seems to relate to immersion",
    map: "Contains texts relating to maps",
    mcoServer: "`mcoServer.title` = Minecraft Online World",
    menu: "`menu` contains the labels for menu buttons",
    merchant: "`merchant.deprecated` = Trade something else to unlock!",
    mount: "`mount.onboard` = Press %1$s to dismount",
    multiplayer: "`multiplayer` contains server-related texts",
    notification:
      "`notification` contains the display messages of items with lock_in_inventory [components](https://minecraft.fandom.com/wiki/Item_components)",
    npcscreen: "`npcscreen` contains the texts shown in the NPC editor menu",
    npcUri: "Contains texts relating to opening links in NPCs",
    offer: "`offer` contains texts used in marketplace",
    options: "`options` contains labels for settings",
    patchNotes:
      "`patchNotes` contains the default messages shown in an update popup",
    sunsetting:
      "Contains messages shown when user device is no longer supported",
    pauseScreen: "`pauseScreen` contains texts shown in pause screen",
    permissionsScreen: "For kick or ban player menu",
    hudScreen: "`hudScreen` contains labels for actions (used in Xbox for ex)",
    playscreen: "`playscreen` contains the texts used in the Play menu",
    permissions: "`permissions` contains labels for editing player permissions",
    portfolioScreen:
      "For use with the deprecated [camera](https://minecraft.fandom.com/wiki/Camera)",
    potion: "`potion` contains potion names and other potion-related labels",
    profileScreen: "For texts relating to dressing room",
    progressScreen:
      "`progressScreen` contains texts shown when joining a world",
    quiz: "HUH? See vanilla files",
    raid: "Contains the texts shown in the raid bar",
    recipeBook: "self-explanatory",
    record: "`record.nowPlaying` = Now playing: %s",
    resourcePack:
      "`resourcePack` texts are shown in rp menu or when adding a resource pack\n\nAlso other resource pack related featuers",
    sidebar: "`sidebar` contains more marketplace texts",
    storageManager: "These texts are shown in the Storage Manager menu",
    tile: "`tile` contains the names of blocks",
    raycasting:
      "`raycasting` contains the errors shown when user does not have a rtx-compatible device",
    review: "These texts are used for rating and reviewing a pack",
    roaming: "`roaming` texts seem to relate to skins",
    screenshot: "`screenshot` contains screenshot-related texts",
    seedPicker:
      "`seedPicker` contains the texts shown when picking a preset seed",
    selectServer: "Texts shown on the server tab under the play menu",
    selectWorld:
      "`selectWorld` contains labels for Worlds menu and edit world menu",
    selectTemplate:
      "`selectTemplate` contains the texts shown when creating a new world from template",
    sign: "`sign.edit` = Edit sign message",
    skin: "`skin` contains the names of skins and create skin button",
    skinpack: "`skinpack.Education` = Education Edition Skins",
    skins: "`skins` contains texts shown in the dressing room",
    soundCategory:
      "`soundCategory` contains generic sound type categories. See vanilla files",
    stat: "Contains names of statistics",
    stats: "Contains the names of the statistics categories",
    start: "`start.beta.icon` = Beta",
    store: "`store` contains texts shown in the store",
    stream:
      "`stream` contains texts seen when streaming through a connected twitch account",
    profanity_filter:
      "`profanity_filter` appears to contain labels for a profanity filter",
    terms_and_conditions:
      "`terms_and_conditions.viewTermsAndConditions` contains a link to https://minecraft.net/terms ",
    tipped_arrow: "`tipped_arrow` contains the names of tipped arrows",
    structure_block: "contains the labels for the structure block menu",
    "3d_export": "`3d_export` appears to be a deprecated feature",
    title:
      "`title` contains error messages for using an outdated graphics card",
    editorMode: "`editorMode.text` = coming soon",
    translation: "`translation` keys are used for tests. **DO NOT EDIT**",
    typeface: "`typeface` contains the names of typefaces available for chat",
    worldConversionErrorPrompt:
      "`worldConversionErrorPrompt` contains error messages that occur when converting a world",
    worldError:
      "`worldError` contains error messages that occur when trying to open a world",
    userData:
      "`userData` texts contain error messages that occur when recovering user data",
    trial: "`trial` contains texts that appear when playing the trial version",
    ratingPopUp: "`ratingPopUp.title` = Are you enjoying Minecraft?`",
    feedbackPopup: "`feedbackPopup.title` = Do you have any feedback for us?",
    tutorial:
      "`tutorial` is labeled **Edu Tutorial strings** in the source code",
    utility: "`utility` contains keys which are labeled Zip File and PDF file",
    verification:
      "`verification` contains error messages that occur when MC can't verify user license",
    autosave: "`autosave` contains informative keys relating to autosaving",
    xbox: "`xbox` is probably related to xbox in some way",
    safety: "`safety` seems to contain chat mute messages",
    authserver: "`authserver` texts seem to relate to ",
    platform: "`platform.model.unknown` = UNKNOWN",
    compliance: "`compliance` seems to have warning in case of exessive gaming",
    packdiscoveryerror: "> resource pack validation errors",
    packupgradewarning:
      "`packupgradewarning` seems to have warnings in case of invalid `.mcpack` import attempt",
    pack: "`pack` contains default texts for authors of packs",
    manifestvalidation:
      "`manifestvalidation` has texts for the status messages for resource and behavior packs",
    uiPackError: "`uiPackError` contains several resource pack errors",
    jsonValidationError:
      "`jsonValidationError` contains several JSON parse errors",
    serverUI: "`serverUI` contains errors for creating forms",
    content: "`content` messages pertain to importing packs and worlds",
    worldTemplate:
      "`worldTemplate` contains names of packs which are built in (Festive Mash-up 2016, Greek Mythology Mash-up, etc.)",
    eduTemplateWorld: "Similar to `worldTemplate` but for EE",
    worldConversionComplete:
      "`worldConversionComplete` appears to contain texts for converting worlds",
    tips: '`tips` contains the text that is shown when a world is loading. For example, "Do people actually read these?"',
    splitscreen:
      "`splitscreen` contains messages relating to players joining a world in splitscreen mode",
    usermanagement: "`usermanagement.changeUser` = Change User",
    lateJoinScreen:
      "`lateJoinScreen.waitingForUserReady` = Getting things ready",
    storage_migration: "`storage_migration` keys relate to migrating storage",
    trade: "`trade` contains labels in villager trade menus",
    contentlog:
      "`contentlog` contains labels for buttons in content log settings",
    client:
      "`client` has update names for 1.0-1.5 and 1.11. I don't know what they are there for.",
    cloud_upload:
      "`cloud_upload` seems to have support messages for uploading a world to Mojang Player Support",
    dr: "`dr` contains marketplace texts",
    onlinePlay:
      "`onlinePlay` contains the messages warning players that online play is not rated",
    copyCoordinates:
      "`copyCoordinates` contains texts shown in copy coordinate UI",
    emotes: "`emotes` contains texts shown in emote selection menu",
    dynamicPackage: "> Google Play APK Expansion file downloader notification",
    gameTest:
      "`gameTest` contains messages relating to gametest debug messages",
    script: "`script` contains messages relating to gametest debug messages",
    clientscript:
      "`clientscript` contains messages relating to gametest debug messages",
    world_recovery:
      "`world_recovery` contains messages shown when recovering worlds",
    osk: "`osk` seems to contain messages relating to truncated texts",
    gathering: "`gathering` seems to contain Minecraft Live messages",
  };

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
      } else if (word.includes("§")) {
        return new vscode.Hover(
          "Note: The styling of `§` operators is a work in progress, but they should still all have an effect in-game.\n\nIn Java Edition, if a color code is used after a formatting code, the formatting code is disabled beyond the color code point. Therefore, when using a color code in tandem with a formatting code, ensure the color code is used first and reuse the formatting code when changing colors.\n\nIn Bedrock Edition, formatting codes persist after a color code. Furthermore, if an obfuscated code is used and a reset code is not used before the end of the line, the client GUI continues to obfuscate text past the MOTD and into the version number display."
        );
      }
    },
  });
}
// export function deactivate() {}
