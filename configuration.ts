import { Config } from 'protractor';
import { builtinParameterTypes } from '@cucumber/cucumber/lib/support_code_library_builder';
import { format } from 'path';

export let config: Config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',

    chromeOptions: {
      args: ['--headless'],
    },
  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ['../src/Features/*.feature'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },

  cucumberOpts: {
    // require step definitions
    require: [
      './src/specs/*.js', // accepts a glob
    ],
    format: ['progress'],
  },
};
