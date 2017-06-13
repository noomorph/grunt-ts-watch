var path = require('path');

module.exports = function map_options(target, options) {
    var timeout = options.timeout || 30000;
    var compiler = path.resolve(options.compiler || './node_modules/.bin/tsc');
    var compilerArgs = ['-w'].concat(options.compilerArgs || []);

    return {
        target: target,
        compiler: compiler,
        compilerArgs: compilerArgs,
        timeout: timeout,
    };
};
