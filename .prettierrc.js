module.exports = {
    // ...require('prettier-airbnb-config'),
    tabWidth: 2, // 缩进4个字符
    printWidth: 80, //超过多少换行
    singleQuote: true, //字符串是否使用单引号，默认为false，使用双引号
    semi: true, //行位是否使用分号，默认为true
    trailingComma: 'all', //是否使用尾逗号，有三个可选值"<none|es5|all>"
    arrowParens: 'avoid', // x => x
    jsxBracketSameLine: true,
    requirePragma: false, //顶部注释
    htmlWhitespaceSensitivity: 'ignore',
}