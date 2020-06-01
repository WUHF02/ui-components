const module = typeof window !== `undefined` ? require('module') : null;

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	if (stage === 'build-html') {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /bad-module/,
						use: loaders.null(),
					},
				],
			},
		});
	}
};
