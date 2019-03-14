var footer = new Vue({
	el:"#footer",
	data:{
		heartColor: "#ff4444",
		heartColor2:"blue"
	},
	methods:{

	},
	computed:{

	},
	created:function(){
		// 生成爱心的随机颜色
		var self = this;
		var	color1,color2,color3;
		setInterval(function(){
			color1 = Math.floor((Math.random()*255));
			color2 = Math.floor((Math.random()*255));
			color3 = Math.floor((Math.random()*255));
			self.heartColor = 'rgb('+color1+','+color2+','+color3+')';
			self.heartColor2 = 'rgb('+color3+','+color1+','+color2+')';
		},1000);
		
		console.log("哈哈，既然你打开了控制台，我就给你讲个笑话吧：");
		console.log("从前有座庙，庙里有个和尚，和尚在讲故事，故事是：");
		console.log("从前有座庙，庙里有个和尚，和尚在讲故事，故事是...");
	}
});