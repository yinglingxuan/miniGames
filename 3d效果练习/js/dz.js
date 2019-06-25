var arr=['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var att=new Array();//用来记录错误的字符的下标
var record=0;//记录当前打到第几个
var length=0;  //记录按键前和按键后input里的字符数量
for (var i=0;i<arr.length;i++) {
	$("#title").append("<span>"+arr[i]+"</span>");
}

$("#name").keydown(function(e){
	var title=document.getElementById("title");
	var childrens=title.children;

	if(record!=childrens.length&&record<childrens.length){
		//匹配当前的字符和按下的字符不一样，显示红色，剔除会按到的按键
		if(e.key!=childrens[record].innerText &&e.key!="Backspace"&&e.key!="Shift"&&e.key!="CapsLock"){
			childrens[record].setAttribute("class","red");
			record=record+1; //错误的也加1
			return;
		}
		//匹配当前的字符和按下的字符是否一样，显示绿色，
		//并且当前的按键和匹配的按键是否同一个位置，如果位置不相同的就不能进去
		for (var i=0;i<childrens.length;i++) {
			if(e.key==childrens[i].innerText&&i<=record&&i==record){
				childrens[i].setAttribute("class","green");
				record=record+1; //如果相等就进来
			}
		}
	}
	length=$("#name").val().length;

	
	if(record!=0&&record==length){
		if(e.key=="Backspace"){
		 	 if(record>=1){   //不为零的时候才可以减1，不能出现负数
		 	 	record=record-1;
		 	 }
		     childrens[record].setAttribute("class","black");   
		 }
	}
	
	$("#name").keyup(function(e){  //这是按键后 ，先按键，再按键后
		var title=document.getElementById("title");
		var childrens=title.children;
		var length2=$("#name").val().length;
		
		var le=length-length2;
		if(e.key=="Backspace"){
			 if(length2==0){
				for (var i=0;i<childrens.length;i++) {
					childrens[i].setAttribute("class","black");
					 if(record>=1){   //不为零的时候才可以减1，不能出现负数
				 	 	record=record-1;
				 	 }
				}
			}
		}
	});
	
});


/*var text=$(".text span").text();
var su=text.substring();

alert(su[0]);*/