var contentBox = new Vue({
	el:"#content_box",
	data: {
		tabView: 'select1',
		// 顶部导航
	    menu:[
	    	{
	    		title:"首页"
	    	},
	    	{
	    		title:"项目经验"
	    	},
	    	{
	    		title:"关于我"
	    	},
	    	{
	    		title:"联系方式"
	    	}
	    ],
	    arr:["index","experience","about","contact"]
	},
	methods:{
		tabMenu:function(index){
			var arr = this.arr;
			var url = this.getUrlParams('tabs');
	     	for(var i=0;i<arr.length;i++){
				if(index == i){
					window.location.href = arr[i] +'.html?tabs=' + arr[i];
				}
			}
	    },
	    // 正则匹配url
		getUrlParams: function(name) { 
		    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); //定义正则表达式 
		    var r = window.location.search.substr(1).match(reg);  
		    if (r != null) return unescape(r[2]); 
		  	return null; 
		}
	},
	// 计算属性   加载默认样式
	computed:{
		// 顶部导航的active样式
		iscur: function(e){
			var arr = this.arr;
			var url = this.getUrlParams('tabs');
			for(var i=0;i<arr.length;i++){
				if(url == arr[0]){
					return 0;
				}else if(url == arr[1]){
					return 1;
				}else if(url == arr[2]){
					return 2;
				}else if(url == arr[3]){
					return 3;
				}else{
					return 0;
				}
			}
			
		}
	},
	// 生命周期，加载初始化样式
	created:function(){
		
	}
});