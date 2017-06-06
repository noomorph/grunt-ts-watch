# grunt-ts-watch

## How to use?

Add a section in `Gruntfile.js`.

```javascript
{
    'ts-watch': {
        'app': {
            compiler: './node_modules/.bin/tsc',
            compilerArgs: [],
            timeout: 30000,
        }
    }
}
```

## Credits

Many thanks to [@unional](https://github.com/unional) who suggested to look here [at his workaround](https://github.com/unional/color-map/blob/master/scripts/watch.js).

I owe you my inspiration.

