var webpack = require('webpack');
const path =require("path")

module.exports = {
    //插件项
    //页面入口文件配置
    entry: {
        main : './dist/Hajj/ChartComponent.js'
    },
    //入口文件输出配置
    output: {
        filename: 'buddle.js'
    },
    module: {
        //加载器配置

    },
    //其它解决方案配置
    resolve: { //绝对路径
        alias: {
                leaflet:path.resolve(__dirname, 'lib/leaflet/dist/leaflet-src'),
                underscore:path.resolve(__dirname, 'lib/underscore/underscore'),
                jquery:path.resolve(__dirname, 'lib/jquery/dist/jquery'),
                bootstrap:path.resolve(__dirname, 'lib/bootstrap/dist/js/bootstrap'),
                d3:path.resolve(__dirname, 'lib/d3/d3'),
                
        }
    },
    resolveLoader: {
        alias: {
            // Support for require('text!file.json').
           text:path.resolve(__dirname,"node_modules/text-loader/index")
        }
    }
};