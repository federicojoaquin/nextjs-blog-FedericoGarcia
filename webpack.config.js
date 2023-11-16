module.exports = {
    module: {
      rules: [
        {
            test: /\.(pdf|gif|png|jpe?g|svg)$/,
            use: 'file-loader?name=[path][name].[ext]',
            include: paths
        },
        {
          test: /\.svg$/, // Match SVG files
          use: ['@svgr/webpack', 'file-loader?name=[path][name].[ext]'], // Use @svgr/webpack for SVGs
          include: paths,
        },
      ],
    },
};
