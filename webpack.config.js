let path = require('path');

let conf = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: 'dist/'
	},
	module: {
		rules: [
		    {
		    	test: /\.css$/,
		    	use: [
		    	    'style-loader',
		    	    'css-loader'
		        ]
		    },
		    {
		    	test: /\.png$/,
		    	use: [
		    	    'url-loader',		    	
		    	    'img-loader'
		        ]
		    }
		]
	}
}

module.exports = conf;