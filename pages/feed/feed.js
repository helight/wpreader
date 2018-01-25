var requests = require('../../utils/request.js');
var utils = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"黑光技术",
    totalRecord: 0,
    isInit: true, //是否第一次进入应用
    result: [],   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    requests.requestFeed((data) => {
        _this.setData({
          result: data.items,
          totalRecord: 1 // len(data.items) 
        });
    }, () => {
      ;
    }, () => {
      ;
    });
    // console.log("totalRecord:" + _this.totalRecord);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.getSystemInfo({
      success: (res) => {
        // console.log(res)
        this.setData({
          scrollHeight: res.windowHeight - (100 * res.windowWidth / 750) 
          //80为顶部搜索框区域高度 rpx转px 屏幕宽度/750
        });
      }
    })
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
   //跳转到详细页面
  toDetailPage: function (e) {
    var index = e.currentTarget.dataset.index; // [data-index]
    // console.log("index" + index);
    var id = index.split("?")[1].split("=")[1];
    // console.log("id:" + id);
    wx.navigateTo({
      url: '../detail/detail?id=' + id
    });
  }
})