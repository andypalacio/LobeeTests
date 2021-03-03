"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
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
        showColors: true,
    },
    cucumberOpts: {
        // require step definitions
        require: [
            './src/specs/*.js',
        ],
        format: ['progress'],
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSVcsUUFBQSxNQUFNLEdBQVc7SUFDMUIsNENBQTRDO0lBQzVDLGtEQUFrRDtJQUNsRCxhQUFhLEVBQUUsSUFBSTtJQUNuQixTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUUvRCx1REFBdUQ7SUFDdkQsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7UUFFckIsYUFBYSxFQUFFO1lBQ2IsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDO1NBQ3JCO0tBQ0Y7SUFFRCx1RUFBdUU7SUFDdkUsMkNBQTJDO0lBQzNDLGtDQUFrQztJQUNsQyxLQUFLLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztJQUVwQyx3Q0FBd0M7SUFDeEMsZUFBZSxFQUFFO1FBQ2YsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFFRCxZQUFZLEVBQUU7UUFDWiwyQkFBMkI7UUFDM0IsT0FBTyxFQUFFO1lBQ1Asa0JBQWtCO1NBQ25CO1FBQ0QsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0tBQ3JCO0NBQ0YsQ0FBQyJ9