const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	 entry : './src/main.js'
	,output : {
		 path		: __dirname +  '/dist/lib/js'
		,filename	: 'bundle.js'
	}
	,devtool : 'source-map'
	,module : {
		rules : [
			{
				 test	: /\.vue$/
				,loader	: 'vue-loader'
 				,options: {
					loaders : {
					}
				}
			}
			,{
				 test	: /\.js$/
				,loader	: 'babel-loader'
				,exclude: /node_modules/
 				,query	: {
 					 presets : ['es2015']
				}
			}
			,{
				 test	: /\.(png|jpg|gif|svg)$/
				,loader	: 'file-loader'
				,options: {
					name: '[name].[ext]?[hash]'
				}
			}
			,{
				 test	: /\.css$/
				,use	: ['style-loader', 'css-loader']
			}
		]
	}
	,plugins : [
		// moment.js
		 new webpack.IgnorePlugin(/\.\/locale$/)
		// Minimize
		//,new webpack.optimize.UglifyJsPlugin()
	]
	,devServer: {
		 contentBase	: 'dist'
		,port			: 8080
	}
	,resolve : {
		alias : {
			 'vue'			: 'vue/dist/vue.js'
			,'vue-router'	: 'vue-router/dist/vue-router.js'
		}
	}
}
