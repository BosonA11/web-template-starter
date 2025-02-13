/*
 * @Description: 代码风格配置
 * @Author: Boson
 * @Date: 2024-11-28 11:28:57
 */
module.exports = {
  // 一行的字符数，如果超过会进行换行，默认为80
  printWidth: 100,
  // 字符串是否使用单引号，默认为false，true-使用单引号
  singleQuote: true,
  // 箭头函数，只有一个参数的时候, 是否需要括号，always需要括号 为avoid时可以忽略括号
  arrowParens: 'avoid',
  // 是否缩进Vue文件中<script>和<style>标签内的代码
  vueIndentScriptAndStyle: true,
  // 是否让prettier使用eslint的代码格式进行校验
  eslintIntegration: false,
  // 换行符使用 lf，默认就是"lf"，auto：不让prettier检测文件每行结束的格式,
  endOfLine: 'auto',
};
