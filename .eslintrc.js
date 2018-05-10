// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'generator-star-spacing': 0,//生成器函数*的前后空格
    "consistent-return": 0,//return 后面是否允许省略
    "no-else-return": 2,//如果if语句里面有return,后面不能跟else语句
    "no-use-before-define": 2,//未定义前不能使用
    "no-nested-ternary": 0,//禁止使用嵌套的三目运算
    "arrow-parens": 0,//箭头函数用小括号括起来
    "no-extend-native": 2,//禁止扩展native对象
    "no-bitwise": 0,//禁止使用按位运算符
    "no-cond-assign": 2,//禁止在条件表达式中使用赋值语句
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "ignore"
    }],
    "comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
    "curly": [2, "all"],//必须使用 if(){} 中的{}
    "object-curly-newline": 0,
    "function-paren-newline":  0,
    "no-restricted-globals": 0,
    "padded-blocks": 0,//块语句内行首行尾是否要空行
    "no-trailing-spaces": 0,//一行结束后面不要有空格
    "camelcase": 2,//强制驼峰法命名
    "quote-props":0,//对象字面量中的属性名是否强制双引号
    "semi": [0],
    "key-spacing": [0, { "beforeColon": false, "afterColon": false }],//对象字面量中冒号的前后空格
    "spaced-comment": 0,//注释风格要不要有空格
    "comma-spacing": 0,//逗号前后的空格
    "space-before-function-paren": 0,//函数定义时括号前面要不要有空格
    "indent":0,//缩进风格

   //  'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
   //  "indent":[0],
   //  "dot-location": 0,//对象访问符的位置，换行的时候在行首还是行尾
   //  "key-spacing": [0, { "beforeColon": false, "afterColon": false }],//对象字面量中冒号的前后空格
   //  "comma-spacing": 0,//逗号前后的空格
   //  "spaced-comment": 0,//注释风格要不要有空格什么的
   // "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
   //  "no-unused-vars": [2, {
   //    "vars": "local",
   //    "args": "none"
   //  }],
   //
   //  "no-multiple-empty-lines": [0, {"max": 100}],
   //  "no-mixed-spaces-and-tabs": [0],
   //  "no-spaced-func": 0,//函数调用时 函数名与()之间不能有空格
   //  "object-curly-spacing": [0, "never"]//大括号内是否允许不必要的空格
  }
}
