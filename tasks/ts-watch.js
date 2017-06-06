var storages = require('../src/storages');
var map_options = require('../src/map_options');
var tsc_process = require('../src/tsc_process');

module.exports = function gruntTsWatchRegistration(grunt) {
    grunt.registerMultiTask('ts-watch', 'Run TypeScript in a bit smarter watch mode', function gruntTsWatchTask() {
        var target = this.target,
            options = map_options(this.target, this.options()),
            storage = storages.get(target);

        storage.done = this.async();
        storage.timeoutHandle = setTimeout(storage.done, options.timeout, false);

        if (!storage.processHandle) {
            storage.processHandle = tsc_process.instantiate(options, storages);
        }
    });
};
