//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  },
  toDetail: function (event) {
    console.log(event)
    var path = event.currentTarget.dataset.path;
    wx.navigateTo({
      url: '../' + path
    })
  },
  onLoad: function () {
    console.log('onLoad');
  }
})
