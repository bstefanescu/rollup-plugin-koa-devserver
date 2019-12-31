import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

const plugins = [nodeResolve({preferBuiltins:true}), commonjs()];
const external = ['koa-devserver'];

export default [{
    input: './src/index.js',
    output: {
        file: './lib/index.esm.js',
        format: 'esm'
    },
    external: external,
    plugins: plugins
}, {
    input: './src/index.js',
    output: {
        file: './lib/index.cjs.js',
        format: 'cjs'
    },
    external: external,
    plugins: plugins
}];
