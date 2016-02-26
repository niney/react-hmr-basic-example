module.exports = {
    context: __dirname + '/app',
    //entry: "./app.js",
    entry: {
        javascript: "./app.js",
        html: "./index.html"
    },
    output: {
        filename: "app/app.js",
        path: __dirname + '/dist'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
        ]
    }
};
/*
module.exports = {
    context: __dirname + '/app',
    entry: './app.js',
    output: {
        filename: 'app.js',
        path: __dirname + '/dist'
    }
};*/
