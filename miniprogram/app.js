//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
  },
  onShow: function() {

  },
  onHide: function() {

  },
  onError: function(msg) {
    console.log(msg)
  },
  globalData: '我是全局数据'
})
