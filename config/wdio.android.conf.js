const { config } = require('./wdio.shared.conf');

 //
    // ====================
    // Runner Configuration
    // ====================
    //
    config.port = 4723;

//
    // ============
    // Specs
    // ============
config.specs = [
    './test/specs/android/add-note-screen*.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName: "Android",
        "appium:platformVersion": "11.0",
        "appium:deviceName": "Pixel_3",
        "appium:automationName": "UIAutomator2",
        "appium:app": "/Users/wallaqa/webdriverio-appium/app/android/ColorNote+Notepad.apk",
        // "appium:app": "/Users/wallaqa/webdriverio-appium/app/android/ColorNote+Notepad.apk",
        "appium:autoGrantPermissions": true
        }
]

config.services [
    ['appium', {
        args: {
            address: 'localhost',
            port: 4723
        },
        logPath: './'
    }]
];

exports.config = config;