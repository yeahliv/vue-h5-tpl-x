// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-aspect-ratio-mini': {},
    'postcss-write-svg': {
      utf8: false
    },
    'postcss-cssnext': {},
    'postcss-px-to-viewport': {
      // The width of the window, corresponding to the width of our design draft, is generally 750
      viewportWidth: 750,
      // The height of the window, specified according to the width of 750 devices, generally specified 1334, but may not be configured
      viewportHeight: 1334,
      // Specifies the number of decimal places in which 'px' is converted to the window unit value
      unitPrecision: 3,
      // Specify the window unit to be converted to. Vw is recommended
      viewportUnit: 'vw',
      // Specify classes that will not be converted to window units, which can be customized or added indefinitely. It is recommended to define one or two generic class names
      selectorBlackList: ['.ignore', '.hairlines'],
      // Less than or equal to '1px' does not convert to window units, you can also set it to the value you want
      minPixelValue: 1,
      // Exclude node_modules
      exclude: /(\/|\\)(node_modules)(\/|\\)/,
      // Allows conversion of 'px' in media queries
      mediaQuery: false
    },
    'postcss-viewport-units': {
      // No warning
      silence: true
    },
    cssnano: {
      // If you need a way, you can open the preset，I've commented that out
      // preset: 'advanced',
      autoprefixer: false,
      'postcss-zindex': false
    }
  }
}

