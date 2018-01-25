var api = require('./api.js');
var utils = require('./util.js');

/**
 * 网络请求
 */
function request(url, successCb, errorCb, completeCb) {
  wx.request({
    url: url,
    method: 'GET',
    success: function (res) {
      if (res.statusCode == 200)
        utils.isFunction(successCb) && successCb(res.data);
      else
        console.log('请求异常', res);
    },
    error: function () {
      utils.isFunction(errorCb) && errorCb();
    },
    complete: function () {
      utils.isFunction(completeCb) && completeCb();
    }
  });
}

/**
 * 获取feed
 */
function requestFeed(successCb, errorCb, completeCb) {
  request(api.API_FEED, successCb, errorCb, completeCb);
}

/**
 * 或许指定页面
 */
function requestDetail(id, successCb, errorCb, completeCb) {

  request(api.API_DETAIL.replace(':id', id), successCb, errorCb, completeCb);
}

module.exports = {
  requestFeed: requestFeed,
  requestDetail: requestDetail
}

