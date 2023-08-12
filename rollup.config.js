import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import css from "rollup-plugin-css-only";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import {less} from 'svelte-preprocess-less';
import {terser} from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

function serve() {
    let server;

    function toExit() {
        if (server) server.kill(0);
    }

    return {
        writeBundle() {
            if (server) return;
            server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
                stdio: ['ignore', 'inherit', 'inherit'],
                shell: true
            });

            process.on('SIGTERM', toExit);
            process.on('exit', toExit);
        }
    };
}

export default {
    input: 'src/embed.js',
    output: {
        format: 'iife',
        file: 'dist.js',
        sourcemap: false,
    },
    plugins: [
        svelte({
            preprocess: {
                style: less(),
            },
            emitCss: false,
        }),
        resolve({browser: true, dedupe: ['svelte']}),
        css({output: 'dist.css'}),

        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration -
        // consult the documentation for details:
        // https://github.com/rollup/plugins/tree/master/packages/commonjs
        resolve({
            browser: true,
            dedupe: ['svelte']
        }),
        commonjs(),

        // In dev mode, call `npm run start` once
        // the bundle has been generated
        !production && serve(),

        // Watch the `public` directory and refresh the
        // browser on changes when not in production
        !production && livereload(),
        
        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && terser()
    ],
}