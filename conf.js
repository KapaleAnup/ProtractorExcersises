exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Actions.js'],
    capabilities: {
        'browserName': 'chrome'
      }
  };