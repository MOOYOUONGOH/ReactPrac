'user strict'
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        main: ['./src/main.js']
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },
    module:{
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, './src'),
            loaders: 'babel-loader'
        },{
            test: /\.css$/,
            loader: "style-loader!css-loader"
             
        },
        {
            test: /\.(png|jp(e*)g|svg)$/,  
            use: [{
                loader: 'url-loader',
                options: { 
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'images/[hash]-[name].[ext]'
                } 
            }]
        }
    ]
    },    
    plugins: [
        new CopyWebpackPlugin([{
            context: './public',
            from: '*.*' 
        }])
    ],
    devServer: {
        contentBase: './public',
        host: 'localhost',
        port: 8080
    }
}