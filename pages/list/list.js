// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    console.log('到达页面底部运行此函数');
    this.updateArrList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 更新页面数据
   */
  updateArrList: function() {
    let arr = this.data.arrList;
    arr.push(...this.createData());
    this.setData({
      arrList: arr
    })
  },

  /**
   * 自动创建数据
   */
  createData: function() {
    let length = this.data.arrList.length;
    if (length >= 30)
      return [];
    return Array.from({length: 3}, (v, i) => `数据${1 + i + length}`)
  }
})