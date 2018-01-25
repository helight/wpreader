// pages/detail/detail.js
var requests = require('../../utils/request.js');
var utils = require('../../utils/util.js');
var WxParse = require('../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    loadidngHidden: false,
    blogData: null,
    paycode: "感觉有意思？来鼓励鼓励我！<br><img src='https://zhwen.org/wp-content/uploads/2018/01/121.png' style='width: 300px; height: 300px; margin: 10px;'>"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.setData({
      id: options.id
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var id = this.data.id;
    var _this = this;
    requests.requestDetail(
      id,
      (data) => {
        // console.log(data)
        _this.setData({
          blogData: data.post          
        });
        console.log(_this.data.paycode);
        WxParse.wxParse('blogcontent', 'html', data.post.content.concat(_this.data.paycode), _this, 5);    
        // WxParse.wxParse('blogcontent', 'html', _this.data.paycode, _this, 5);     
      }, () => {
        wx.navigateBack();
      }, () => {
        _this.setData({
          loadidngHidden: true
        });        
      });    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
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
  
  }
})