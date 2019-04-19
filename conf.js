exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['specs/*.js'],
	capabilities: {
		browserName: 'chrome',
		chromeOptions: {
	   	args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
	}
},

framework: 'jasmine',
onPrepare: function() {
	var jasmineReporters = require('jasmine-reporters');
	var junitReporter = new jasmineReporters.JUnitXmlReporter({
		savePath: '${CIRCLE_TEST_REPORTS}/output/',
		consolidateAll: true
	});
	jasmine.getEnv().addReporter(junitReporter);
}
};