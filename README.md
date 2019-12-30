# rollup-plugin-koa-devserver

A Rollup development server implemented using [koa-devserver](https://github.com/bstefanescu/koa-devserver).

## Features

* Built-in live reload using [livereload](https://github.com/napcs/node-livereload).
* Displaying build errors in the browser when build fails.
* Customizable build error page.
* Customizable middleware stack - you can use any existing Koa plugins to configure your middleware stack. Or you can write your own middleware if needed.

## Usage

To install:

```
npm install -D rollup-plugin-koa-devserver
```

In `rollup.config.js`:

```javascript
import devServer from 'rollup-plugin-koa-devserver';
import cors from '@koa/cors';

export default {
	input: './src/index.js',
	output: {
		// your build output here
	},
	plugins: [
		// your build plugins here:
    	// ...plugins,
	    devServer({
	    	port: 8088,
	    	open: '/build/dev/index.html',
	    	livereload: 'build/dev',
	    	use: [ cors() ]
	    })
    ]
}
```

For the full list of options see the [koa-devserver](https://github.com/bstefanescu/koa-devserver) documentation.

## License

[MIT](LICENSE)

## Authors

**[Bogdan Stefanescu](mailto:bogdan@quandora.com)** - *Intial Work* - [Quandora](https://quandora.com)
