// https://bilalbudhani.com/chokidar-esbuild/

const esbuild = require('esbuild');
const chokidar = require('chokidar');
const postcss = require('esbuild-postcss');

const watchDirectories = [
    './app/assets/css/**/*.css',
    './app/assets/js/**/*.js',
    './app/**/*.njk',
]

const config = {
    entryPoints: ['app/assets/js/main.js'],
    entryNames: '[ext]/[name]',
    outdir: '_site/static',
    bundle: true,
    minify: true,
    external: ['*.woff', '*.woff2', '*.ttf'],
    plugins: [
        postcss(),
    ],
    watch: process.argv.includes("--watch"),
    incremental: process.argv.includes("--watch"),
    sourcemap: process.argv.includes("--watch"),
};

if (process.argv.includes("--watch")) {

    (async () => {
        const result = await esbuild.build(config);
        chokidar.watch(watchDirectories).on('all', (event, path) => {
        console.log(`Rebuilding ${path}`)
        result.rebuild()
        })
    })();

} else {
    esbuild.build(config).catch(() => process.exit(1))
}