module.exports = {
	entry: './src/index',
	output: {
		path: 'dist',
		libraryTarget: 'umd',
		library: 'starWarsNames'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel' },
			{ test: /\.json$/, loader: 'json' }
		]
	}
}
