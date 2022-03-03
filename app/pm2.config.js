module.exports = {
    apps : [{
        name   : "HA WiFi",
        script : "/ha/app/start_wifi.js",
        cwd: "/ha/app/",
        watch: true,
        ignore_watch : ["node_modules", "config/settings*"],
        env_production: {
            NODE_ENV: "production"
        },
        env_development: {
            NODE_ENV: "development"
        },
        version: "1.0.0",
        interpreter: "node@16.13.0",
    }, {
        name   : "HA App",
        script : "/ha/app/start_app.js",
        cwd: "/ha/app/",
        watch: true,
        "restart-delay": 1500,
        ignore_watch : ["node_modules", "config/settings*"],
        env_production: {
            NODE_ENV: "production"
        },
        env_development: {
            NODE_ENV: "development"
        },
        version: "1.0.0",
        interpreter: "node@16.13.0",
    }]
}
