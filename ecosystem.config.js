module.exports = {
    apps: [
        {
            name: 'social-website',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs',
            port: 39030
        }
    ]
}