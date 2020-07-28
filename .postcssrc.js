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
      // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportWidth: 750,
      // The height of the window, specified according to the width of 750 devices, generally specified 1334, but may not be configured
      // 窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      viewportHeight: 1334,
      // Specifies the number of decimal places in which 'px' is converted to the window unit value
      // 指定`px`转换为视窗单位值的小数位数
      unitPrecision: 3,
      // Specify the window unit to be converted to. Vw is recommended
      // 指定需要转换成的视窗单位，建议使用vw
      viewportUnit: 'vw',
      // Specify classes that will not be converted to window units, which can be customized or added indefinitely. It is recommended to define one or two generic class names
      // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      selectorBlackList: ['.ignore', '.hairlines'],
      // Less than or equal to '1px' does not convert to window units, you can also set it to the value you want
      // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      minPixelValue: 1,
      // Exclude node_modules
      // 排除转换 node_modules 下的 css
      exclude: /(\/|\\)(node_modules)(\/|\\)/,
      // Allows conversion of 'px' in media queries
      // 允许在媒体查询中转换`px`
      mediaQuery: false
    },
    'postcss-viewport-units': {
      // No warning
      // 去除警告
      silence: true
    },
    cssnano: {
      // If you need a way, you can open the preset，I've commented that out
      // 如果你有需要，可以自己开启 preset
      // preset: 'advanced',
      autoprefixer: false,
      'postcss-zindex': false
    }
  }
}

