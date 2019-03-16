var jufaApp = "";
var content = new Vue({
	el:"#content",
	data:{
		pic: "src/images/1.jpg",
		expr_line:[
			{
				title:"民营企业法制体检自测系统",
				timeS:"2019-1",
				timeE:"2019-1",
				link:"https://legalcheck.jufaanli.com/",
				side:"project_right",
				isFirst:true,
				isLast:false
			},
			{
				title:"聚法案例APP",
				timeS:"2018-12",
				timeE:"2018-12",
				link:"http://a.app.qq.com/o/simple.jsp?pkgname=com.jufaanli.wvapp",
				side:"project_left",
				isFirst:false,
				isLast:false
			},
			{
				title:"民营企业法制体检自测系统",
				timeS:"2019-1",
				timeE:"2019-1",
				link:"https://legalcheck.jufaanli.com/",
				side:"project_right",
				isFirst:false,
				isLast:true
			}
		]
	},
	methods:{
		showPic: function(){
			alert(1)
		}
	},
	beforeCreate: function(){
		
	},
	created: function(){
		// 幻灯片
		var index = 1;
		var self = this;
		setInterval(function(){
			index ++ ;
			if(index == 6){
				index = 1;
			}
			self.pic = 'src/images/'+index+'.jpg';
		},5000);
	}
});

