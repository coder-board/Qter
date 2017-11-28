//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    text: 'Qter',
    branch:[
      {
        name:'研发部',
        src:'../../images/tech.png'
      },
      {
        name:'运营部',
        src:'../../images/operate.png'
      },
      {
        name:'设计部',
        src:'../../images/design.png'
      }

    ],
    iconColor:'#cccccc',
    class:'search',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
   search:function(e){
     this.setData({
      class:'search-check',
      iconColor:'#ff6600'
     })

    if(!e.detail.value){
      return;
    }

   },
  reset:function(e){
     this.setData({
      class:'search',
      iconColor:'#cccccc'
     })
  }
})
