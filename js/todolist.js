new Vue({
	el : ".box",
	data : {
		icon : "+",
		hidden : false,
		hid : false,
		mydata: "",
		event: "",
		datalist: [
			//{"mydata":"2017/04/17","event":"上课"},
		],
		alldelate: "您确认要删除吗？",
		flag: false
	},
	methods : {
		toggle(){
			this.icon = this.icon == "+" ? "-" : "+",
			this.hidden = !this.hidden
		},
		delate(index){
			this.hid = true,
			this.index = index

		},
		add(num){
			this.datalist.push({"mydata":this.mydata,"event":this.event});
			this.mydata="";
			this.event=""
		},
		cancel(){
			this.hid = false
		},
		confirm(){
			this.hid = false;
			this.datalist.splice(this.index,1);
			if(this.flag){this.datalist.length=0;}
		},
		alldel(){
			this.hid = true;
			this.alldelate = "您确定要全部删除吗？";
			this.flag = true;
		},
		repeat(){
			this.mydata="";
			this.event=""				
		}
	}
})