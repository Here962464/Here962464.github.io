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
				respon:"在这个项目中，我主要负责了首页、"
				+"导航页、诉讼风险分析以及法制体检报告页的前端页面搭建以及交互、逻辑处理，以及和后台对接数据，"
				+"技术上使用了html5+css3+jq+echarts。",
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
				respon:"这是一个h5和原生混合开发的APP，在这次改版中，我主要负责了holo筛选、"
				+"提取公共头部样式以及搜索样式改版，通过此次改版，让我对PHP的smart模板语法有了一定的了解。",
				isFirst:false,
				isLast:false
			},
			{
				title:"仿微信开发者论坛",
				timeS:"2018-7",
				timeE:"2018-8",
				link:"http://jun.0cms.vip/addons/gengkuai_BBS/template/webapp/index.html",
				respon:"这个项目主要参考微信开发者论坛的功能和样式，"
				+"目前实现的功能有登录、注册、文章发表、删除文章、编辑文章、评论、评论回复、点赞、编辑资料、修改密码等，"
				+"技术上使用了html5+css3+vue+layUI。",
				side:"project_right",
				isFirst:false,
				isLast:true
			}
		]
	},
	methods:{
		
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

