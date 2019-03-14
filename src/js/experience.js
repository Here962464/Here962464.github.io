var content = new Vue({
	el:"#content",
	data:{
		pic: "src/images/1.jpg"
	},
	created: function(){
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