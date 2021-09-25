// bindviewtap.js
Page({
  bindViewTap: function (event) {
    event.target.dataset.alphBeta == 1 //-会转为驼峰写法
    event.target.dataset.alphBeta == 2 //-大写会转成小写
  }
})