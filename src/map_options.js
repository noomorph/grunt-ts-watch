module.exports = function map_options(target, options) {
    var compiler = typeof options.compiler === 'string' ? options.compiler : 'tsc';
    var customCompilerArgs = Array.isArray(options.compilerArgs) ? options.compilerArgs : [];
    var timeout = typeof options.timeout === 'number' ? options.timeout : 30000;
    var project = typeof options.project === 'string' ? options.project : '';

    return {
        target: target,
        compiler: compiler,
        timeout: timeout,
        compilerArgs: ['-w']
            .concat(project ? ['-p', project] : [])
            .concat(customCompilerArgs),
    };
};
