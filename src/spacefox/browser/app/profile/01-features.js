#filter dumbComments emptyLines substitution


// Disable built-in AI
pref("browser.preferences.aiControls", false);
pref("browser.ml.chat.enabled", false);
pref("browser.ml.chat.menu", false);
pref("browser.ml.chat.page", false);
pref("browser.ml.chat.page.footerBadge", false);
pref("browser.ml.chat.page.menuBadge", false);
pref("browser.ml.chat.shortcuts", false);
pref("browser.ml.chat.shortcuts.custom", false);
pref("browser.ml.chat.shortcuts.smartwindow", false);
pref("browser.ml.chat.sidebar", false);
pref("browser.ml.linkPreview.enabled", false);

// Disable activity stream features
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsored", false);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsoredTopSites", false);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.topsites", false);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.section.topstories", false);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.section.highlights", false);
pref("browser.newtabpage.activity-stream.showWeather", false);
pref("browser.newtabpage.activity-stream.images.smart", false);
pref("browser.newtabpage.activity-stream.unifiedAds.tiles.enabled", false);
pref("browser.newtabpage.activity-stream.unifiedAds.spocs.enabled", false);
pref("browser.newtabpage.activity-stream.unifiedAds.ohttp.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.promoCard.visible", false);

// Don't fetch data about top sites
pref("browser.topsites.useRemoteSetting", false);
pref("browser.topsites.contile.enabled", false);

// Remove VPN advertisiments
pref("browser.vpn_promo.enabled", false);
pref("browser.contentblocking.report.hide_vpn_banner", true);

// What?
pref("browser.smartwindow.worldcup.enabled", false);
