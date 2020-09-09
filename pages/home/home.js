// pages/home/home.js
// const app = getApp()
// console.log(app.globalData.name)
Page({
  /**
   * 页面的初始数据
   */
  data: {
    message: 'hahahaha',
    list: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    wx.request({
      url: 'http://152.136.185.210:8000/api/z8/recommend',
      success: function (res) {
        // console.log(res)
        const data = res.data.data.list
        _this.setData({
          list: data
        })
      }

    })

  },
  /**
   * 生命周期函数--监听页面显示 
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 监听wxml中的相关事件
  handleGetUserInfo(event) {
    console.log(event)
  },
  handlBtnClick() {
    this.setData({
      message: 'hello world'
    })
  },
  // 监听其他事件
  onPageScroll(obj) {
  // console.log(obj)
  },
  onReachBottom() {
    console.log('触底')
  },
  onPullDownRefresh() {
    console.log('下拉')
  }
})