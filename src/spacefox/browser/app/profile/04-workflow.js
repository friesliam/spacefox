#filter dumbComments emptyLines substitution


// Open bookmarks in new tabs
pref("browser.tabs.loadBookmarksInTabs", true);

// Do not allow JS to move & resize windows
pref("dom.disable_window_move_resize", true);

// Do not show the session-restore infobar on startup
pref("browser.startup.couldRestoreSession.count", -1);

// Do not warn on 'Close Multiple Tabs'
pref("browser.tabs.warnOnCloseOtherTabs", false);

// Disable the accessibility panel
pref("devtools.accessibility.enabled", false);

// Resume previous browser session on startup
pref("browser.startup.page", 3);

// Show a tab's PID and activeness in tooltip
pref("browser.tabs.tooltipsShowPidAndActiveness", true);

// Disable UI tours
pref("browser.uitour.enabled", false);
pref("services.sync.prefs.sync.browser.firefox-view.feature-tour", false);
pref("services.sync.prefs.sync.browser.pdfjs.feature-tour", false);

// Do not hide the download button when not used
pref("browser.download.autohideButton", false);

// Do not check if default browser
pref("browser.shell.checkDefaultBrowser", false);
pref("browser.shell.didSkipDefaultBrowserCheckOnFirstRun", true);

// Show the homepage on the first run
pref("browser.startup.firstrunSkipsHomepage", false);

// Do not show the upgrade dialog on startup
pref("services.sync.prefs.sync.browser.startup.upgradeDialog.enabled", false);

// Do not show 'More from Mozilla'
pref("browser.preferences.moreFromMozilla", false);

pref("browser.search.widget.removeAfterDaysUnused", 0);
