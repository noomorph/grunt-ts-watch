var storages;

function init(initialStorage) {
    storages = initialStorage || {};
}

function get(target, initial) {
    storages[target] = storages[target] || initial || {};
    return storages[target];
}

module.exports = {
    init: init,
    get: get,
};

