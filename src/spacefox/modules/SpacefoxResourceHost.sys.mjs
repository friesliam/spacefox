export const SpacefoxResourceHost = {
    registerAll() {
        // spacefoxre -> $profile/spacefox
        const dir = Services.dirsvc.get("ProfD", Ci.nsIFile);
        dir.append("spacefox");
        const uri = Services.io.newFileURI(dir);
        Services.io.getProtocolHandler("resource")
            .QueryInterface(Ci.nsIResProtocolHandler)
            .setSubstitution("spacefoxre", uri);
    }
};
