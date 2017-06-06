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
