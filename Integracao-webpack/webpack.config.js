const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "production", // poderia ser o development 
    entry: "./src/main.ts", // arquivo de entrada
    devServer: {
        static: path.join(__dirname, "dist"),
        port: 9000,
        hot: true
    },
    output: {
        filename: "app.min.js",
        path: path.join(__dirname, "dist")
    }, // Saída
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'public', to: "" },
            ]
        })
    ],
    resolve: {
        extensions: [".ts", ".js"]
    }, // extensões as quais ele vai ter suporte 
    module: {
        rules: [{
            test: /\.ts$/,
            use: "ts-loader",
            exclude: /node_modules/
        }]
    }
}