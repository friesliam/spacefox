#filter dumbComments emptyLines substitution


// Allow unsigned extensions & langpacks
pref("extensions.langpacks.signatures.required", false);

// Allow unsigned extensions
pref("xpinstall.signatures.required", false);

// Don't show warning when visiting about:config
pref("browser.aboutConfig.showWarning", false);

// Move the default position of developer tools to the right
pref("devtools.toolbox.host", "right");

// More permissions for the browser toolbox
pref("devtools.browsertoolbox.scope", "everything");

// Do not hide the DOM tab in devtools
pref("devtools.dom.enabled", true);

// Show hidden addons in 'about:debugging#/runtime/this-firefox'
pref("devtools.aboutdebugging.showHiddenAddons", true);

// Allow user stylesheets
pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Cache about:home for better performance (firefox default value)
pref("browser.startup.homepage.abouthome_cache.enabled", true);
