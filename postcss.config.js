module.exports = {
  plugins: {
    'postcss-inline-svg': {},
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 1,
    },
    "postcss-svgo": {
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              removeViewBox: true,
              removeComments: true,
              cleanupNumericValues: {
                floatPrecision: 3,
                leadingZero: true,
              },
            },
          },
        },
      ],
    },
  },
};