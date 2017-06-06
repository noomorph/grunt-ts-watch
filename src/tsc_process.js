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

function instantiate(options, storages) {
    var processHandle = cp.spawn(options.compiler, options.compilerArgs, { shell: false });

    processHandle.stdout.on('data', function (data) {
        var text = data.toString();

        if (/.*Compilation complete/.test(text)) {
            var storage = storages.get(options.target);
            onCompilationComplete(storage);
        }
    });

    return processHandle;
}

module.exports = {
    instantiate: instantiate,
};
