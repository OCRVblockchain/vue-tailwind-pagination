module.exports = {
    purge: {
        enabled: true,
        content: [
            './src/**/*.vue',
            './src/**/*.js',
            './public/**/*.html',
        ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'montserrat': ['Montserrat'],
            }
        },
    },
    variants: {
        extend: {
            borderRadius: ['first', 'last']
        },
    },
    plugins: [],
};
