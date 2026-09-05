export const SpacefoxResourceURIMapper = {
    registerSpacefoxre() {
        const host = "spacefoxre";
        const relPath = "spacefox";
        const dir = Services.dirsvc.get("ProfD", Ci.nsIFile);
        dir.append(relPath);
        const uri = Services.io.newFileURI(dir);
        Services.io.getProtocolHandler("resource")
            .QueryInterface(Ci.nsIResProtocolHandler)
            .setSubstitution(host, uri);
    }
};
