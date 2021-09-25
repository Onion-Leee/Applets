Page({
  data:{
      text:"这里是内容！",
      btnText:"这是按钮的内容！",
      show : true, 
      new :['aa','bb','cc','武汉加油！']
  },
  onLoad:function(options){

  },
  onReady:function(){

  },
  onShow:function(){

  },
  onHide:function(){

  },
  onUnload:function(){

  },
  btnClik:function(){
     console.log("按钮被点击了")

     var isShow = this.data.show;
     console.log("isShow:"+isShow)
     var newdata=this.data.new;
     var clickData = newdata.shift()

     this.setData({text:"这是一个新的内容！",show:!isShow,new:newdata})
   
  }
})