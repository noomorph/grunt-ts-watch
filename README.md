# grunt-ts-watch
[![Build Status](https://travis-ci.org/noomorph/grunt-ts-watch.svg?branch=master)](https://travis-ci.org/noomorph/grunt-ts-watch)
[![View this project on NPM](https://img.shields.io/npm/v/grunt-ts-watch.svg)](https://npmjs.org/package/grunt-ts-watch)
[![View this project on NPM](https://img.shields.io/npm/dm/grunt-ts-watch.svg)](https://npmjs.org/package/grunt-ts-watch)

A bit hacky but also a bit smarter Grunt TypeScript task exploiting `tsc --watch` mode for faster execution between runs.

## How to use?

Add a section for `ts-watch` with a target (e.g. `app`) in `Gruntfile.js` like below:

```javascript
{
/* ... */
    'ts-watch': {
        'app': { /*** below are the default values: ***/
            compiler: './node_modules/.bin/tsc',
            compilerArgs: [],
            timeout: 30000,
        }
    }
/* ... */
}
```

Make sure you load it somewhere like this (or any other suitable way for you):

```
grunt.loadNpmTasks('grunt-ts-watch');
```

Check task's functioning by running in CLI:

```
grunt --verbose ts-watch:app
```

## Credits

This solution originated in [this StackOverflow discussion](https://stackoverflow.com/questions/44342584/how-can-i-make-typescript-avoid-rewriting-files-if-the-content-has-not-been-chan).

Many thanks to [@unional](https://github.com/unional) who suggested to look here [at his workaround](https://github.com/unional/color-map/blob/master/scripts/watch.js).

I owe you my inspiration.

## License

Copyright (c) 2017- Yaroslav Serhieiev @noomorph

Licensed under the MIT license.
