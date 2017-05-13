// conf.js

exports.config = {
    onPrepare: function () {
        browser.manage().timeouts().implicitlyWait(5000);
        browser.ignoreSynchronization = true;
    },
    // use this baseUrl if your angular serve on the localhost
    // baseUrl: 'http://localhost:4200/',
    baseUrl: 'https://www.google.com/',
    framework: 'jasmine',
    directConnect: true,
    specs: ['../specs/**spec.js'],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
          // use this in case errors happen when running headless browser
          // args: [ "--headless", "--disable-gpu", "--no-sandbox" ],
          prefs: {
            // disable chrome's annoying password manager
            "profile.password_manager_enabled": false,
            "credentials_enable_service": false,
            "password_manager_enabled": false
          }
        }
      },
    jasmineNodeOpts: {
        showColors: true,
        displayStacktrace: true,
        displaySpecDuration: true,
        defaultTimeoutInterval: 50000
    }
}
