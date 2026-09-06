document.addEventListener("MozBeforeInitialXULLayout", () => {
    document
        .getElementById("spacefoxCommandSet")
        .addEventListener("command", (event) => {
            const command = event.target.id;
            console.log(`[Spacefox] Command: ${command}`);
            switch (command) {
                case "cmd_sf_tabTelescope":
                    break;
            }
        });
});
