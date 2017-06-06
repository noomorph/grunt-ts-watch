var cp = require('child_process');

function onCompilationComplete(storage) {
    if (storage.hasOwnProperty('timeoutHandle')) {
        clearTimeout(storage.timeoutHandle);
        delete storage.timeoutHandle;
    }

    if (storage.hasOwnProperty('done')) {
        storage.done();
        delete storage.done;
    }
}

function instantiate(grunt, options, storage) {
    grunt.verbose.writeln('spawning %s with %O', options.compiler, options.compilerArgs);

    var processHandle = cp.spawn(options.compiler, options.compilerArgs, { shell: true });

    processHandle.stdout.on('data', function (data) {
        var text = data.toString();
        grunt.log.writeln(data);

        if (/.*Compilation complete/.test(text)) {
            onCompilationComplete(storage);
        }
    });

    processHandle.stderr.on('data', function (data) {
        grunt.log.error(data.toString());
    });

    return processHandle;
}

module.exports = {
    instantiate: instantiate,
};
