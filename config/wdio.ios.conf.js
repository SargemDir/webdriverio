const {config} = require('./wdio.shared.conf');

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
    './test/specs/ios/ios-todo-list-item-screen*.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName: "ios",
        "appium:platformVersion": "14.5",
        "appium:deviceName": "iPhone 12 Pro",
        "appium:automationName": "XCUITest",
        // "appium:app": "/Users/wallaqa/webdriverio-appium/app/ios/UIKitCatalog.app"
        "appium:app": "/Users/wallaqa/webdriverio-appium/app/ios/MVCTodo.app"
    }
]

 //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
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