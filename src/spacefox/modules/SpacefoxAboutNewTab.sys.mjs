import { SpacefoxResourceHost } from "resource://spacefox/modules/SpacefoxResourceHost.sys.mjs"; // TODO: temporary

const ABOUT_URL = "resource://spacefoxre/newtab/index.html";
const NEWTAB_PREF = "spacefox.about.newtab.override";

// Used in browser/modules/AboutNewTab.sys.mjs
//
// this._newTabURL = ABOUT_URL;                      <-- for every line like this
// this._newTabURL = SpacefoxAboutNewTab.newTabURL;  <-- replace it with this
//
const SpacefoxAboutNewTab = {
    _newTabURL: ABOUT_URL,

    init() {
        SpacefoxResourceHost.registerAll(); // TODO: temporary until a better spot is found

        Services.prefs.addObserver(NEWTAB_PREF, (subject, topic, data) => {
            this.onPrefAboutNewTabOverrideChange();
        });
        // call initially to ensure if the pref is set at launch, it does not use ABOUT_URL
        this.onPrefAboutNewTabOverrideChange();
    },

    onPrefAboutNewTabOverrideChange() {
        const url = Services.prefs.getStringPref(NEWTAB_PREF, "");
        if (url !== "") {
          this._newTabURL = url;
          AboutNewTab.newTabURL = url;
        } else {
            this._newTabURL = ABOUT_URL;
            AboutNewTab.resetNewTabURL();
        }
    },

    get newTabURL() {
        return this._newTabURL;
    }
};
