class HandleWebpackPlugin {
	apply(compiler) {
		compiler.hooks.emit.tapAsync(
			'HandleWebpackPlugin',
			(compilation, callback) => {
				console.log('自定义插件')
				// console.log('资源的单次构建的compilation对象', compilation)
				compilation.addModule()
				callback()
			}
		)
	}
}

module.exports = HandleWebpackPlugin