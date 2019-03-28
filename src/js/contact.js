// // (function(){
// // 	var self = this;

// // 	this.csdn_left = 0;
// // 	this.segm_left = 0;
// // 	this.github_left = 0;

// // })();
// /**
//  * @Author: ZM
//  * @Date: 2019/3/27
//  * @Last Modified by: ZM
//  * @Last Modified time: 2019/3/27
//  */
// //封装组件
// FloatItem=(function(){
// 	var obj=function (options){
// 		// 处理参数
// 		this._setPara(options);
// 		// 调用入口函数
// 		this.init();
// 	};
// 	obj.prototype={
// 		//修正指针
// 		constructor: obj,
// 		//公开接口
// 		init: function (){
// 			// 样式
// 			this._setStyle();
// 			this._flotFn();
// 		},
// 		// 核心逻辑
// 		_flotFn: function(){
// 			var self = this;
// 			var s = parseInt(this.originTop.replace(/px/g,''));
// 			var dis = "down";
// 			this.timer = setInterval(function(){
// 				if(dis == 'down'){
// 					s += s-10;
// 				}
// 				// if(s>300){
// 				// 	s -= s-2;
// 				// 	if(s<100){
// 				// 		s = s + 50;
// 				// 	}
// 				// }else if(s<0){
// 				// 	s = 0;
// 				// }
				
// 				console.log(s);
// 				self.el.style.top = s + 'px';
// 				if(s>260){
// 					clearInterval(self.timer)
// 				}

// 			},100);

			
// 		},
// 		// 初始化样式
// 		_setStyle: function(){
// 			// 根据父元素定位
// 			this.el.parentNode.style.position = "relative";
// 			// this.el.parentNode.style.overflow = "auto";
// 			// 给父元素清除浮动
// 			var clearEl = document.createElement('div');
// 			clearEl.style.clear = "both";
// 			this.el.parentNode.appendChild(clearEl);

// 			this.el.style.position = "absolute";
// 			this.el.style.left = this.originLeft;
// 			this.el.style.top = this.originTop;
// 		},
// 		//设置参数
// 		_setPara:function (option){
// 			this.el = document.querySelector(option.el);//元素对象
// 			this.originLeft = option.left.replace(/px/g,'')+'px' || '10px';//初始的left值
// 			this.originTop = option.top.replace(/px/g,'')+'px' || '10px';//初始的bottom值
// 			this.timer = null;
// 		}
// 	};
// 	return obj;
// })();

// // 调用的示例
// var aaa = new FloatItem({
// 	el:"#csdn",
// 	left:"100",
// 	top:"11"
// });
// var bbb = new FloatItem({
// 	el:"#segmentfault",
// 	left:"300px",
// 	top:"11px"
// });
// var ccc = new FloatItem({
// 	el:"#github",
// 	left:"500px",
// 	top:"11px"
// })
// 
var obj = document.getElementById("csdn");
// Chrome, Safari 和 Opera 代码
obj.addEventListener("webkitAnimationEnd", myFirstFunction);

// 标准语法
obj.addEventListener("animationend", myFirstFunction);

function addEvent (obj){

}
function myFirstFunction(){
	obj.className = "bounce1 bounce2";

	// Chrome, Safari 和 Opera 代码
	obj.addEventListener("webkitAnimationEnd", mySecondFunction);

	// 标准语法
	obj.addEventListener("animationend", mySecondFunction);
};
function mySecondFunction(){
	
	obj.className = "bounce1 bounce2";

	// Chrome, Safari 和 Opera 代码
	obj.addEventListener("webkitAnimationEnd", myFourthFunction);

	// 标准语法
	obj.addEventListener("animationend", myFourthFunction);
};

function myFourthFunction(){
	// obj.style.animation = "myfourth 2s";
	// obj.style.animationFillMode = "forwards";
	// Chrome, Safari 和 Opera 代码
	obj.addEventListener("webkitAnimationEnd", myFiveFunction);

	// 标准语法
	obj.addEventListener("animationend", myFiveFunction);
};

function myFiveFunction(){
	// obj.style.animation = "myfive 2s";
	// obj.style.animationFillMode = "forwards";
};



var csdn = document.getElementById("csdn");
var segmen = document.getElementById("segmentfault");
var github = document.getElementById("github");


//添加事件
function addEvent(obj,fn){
	// Chrome, Safari 和 Opera 代码
	obj.addEventListener("webkitAnimationEnd", fn);
	// 标准语法
	obj.addEventListener("animationend", fn);
};
// 第一次弹跳
function myFirstFunction(){
	addEvent(csdn,mySecondFunction);
};
myFirstFunction();
function mySecondFunction(){
	
	csdn.className = "csdn bounce1 bounce2";
	segmen.className = "segmentfault bounce1 bounce2";
	github.className = "github bounce1 bounce2";

	addEvent(csdn,myThirdFunction);
};

function myThirdFunction(){

	csdn.className = "csdn bounce1 bounce3";
	segmen.className = "segmentfault bounce1 bounce3";
	github.className = "github bounce1 bounce3";

	addEvent(csdn,myFourthFunction);
};

function myFourthFunction(){

	csdn.className = "csdn bounce1 bounce4";
	segmen.className = "segmentfault bounce1 bounce4";
	github.className = "github bounce1 bounce4";

	addEvent(csdn,myFiveFunction);
};

function myFiveFunction(){

	csdn.className = "csdn bounce1 bounce5";
	segmen.className = "segmentfault bounce1 bounce5";
	github.className = "github bounce1 bounce5";

}
