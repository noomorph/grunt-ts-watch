var storages = require('../src/storages');
var map_options = require('../src/map_options');
var tsc_process = require('../src/tsc_process');

module.exports = function gruntTsWatchRegistration(grunt) {
    storages.init({});

    grunt.registerMultiTask('ts-watch', 'Run TypeScript in a bit smarter watch mode', function gruntTsWatchTask() {
        var target = this.target;
        var options = map_options(this.target, this.data);
        var storage = storages.get(target);

        storage.done = this.async();
        storage.timeoutHandle = setTimeout(storage.done, options.timeout, false);

        if (!storage.processHandle) {
            storage.processHandle = tsc_process.instantiate(grunt, options, storage);
        }
    });
};
