
/*var text=$(".text span").text();
var su=text.substring();
alert(su[0]);*/

/*for (var i=0;i<su.length;i++) {
	present=count*79;     //开始
	if(present!=su.length-1){   //如果是最后一行就不加
		finish=present+79; 
	}
	if(i==present&&present!=su.length-1){  //如果等于最后一行就不进
		var te="";
		for (var j=present;j<finish;j++) {
			te=te+su[j];
		}
		$(".st").append("<div class='title'>"+te+"</div><div class='input'><input type='name' name='name'  value='' /></div>")
		count++;
	}
}*/

var text="Once upon a time a little girl tried to make a living by selling matches in the street. It was New Year's Eve and the snowed streets were deserted. From brightly lit windows came the tinkle of laughter and the sound of singing. People were getting ready to bring in the new year. But the poor little match seller sat sadly beside the fountain. Her ragged dress and worn shawl did not keep out the cold and she tried to keep her bare feet from touching the frozen ground. She"

/*字符*/
var su=text.substr();
var count=0;       //统计第几行
var present =0;    //开始的位置
var finish=0;      //结束的位置

var wrong =0 ; //记录错误的
var correct=0;  //记录正确的
var bs=0;  //记录退格次数的
var record=0; //记录时第几个input

var sum=0;//记录总共按了多少次
var how=0;//记录每分钟多少个字

var ininit=false; //是否开始
count=su.length/80;
for (var i=0;i<count;i++) {
	present=i*79; 
	finish=present+79; 
		var te="";
		for (var j=present;j<finish;j++) {
			if(j==present&&su[present]==" "){
				
			}else{
				te=te+su[j];
			}
		}
		$(".st").append("<div class='title'><span class='finish_"+i+"'> </span><span id='txt_"+i+"'>"+te+"</span></div><div class='input_"+i+"'><input type='name' name='name'  value='' style='border:solid 2px #B6B4B6;'/></div>")
}

$("input").keydown(function(e){
	ininit=true; //开始
	//判断是否都完成了
	var zz=Math.ceil(count)-1;
	var t2=$("#txt_"+zz+"").text();
	var newline2=t2.substring();
	if (newline2.length==0&&record==zz) {
		alert("恭喜完成了所有的,就是打字太慢了，比樱凌轩大人还要慢很多啊，继续努力吧！！！少年");
		for (var t=0;t<zz+1;t++) {
			$(".input_"+t+" input").attr("readonly","readonly");
		}
		ininit=false; //开始
		return;
	}
	var t=$("#txt_"+record+"").text();
	var newline=t.substring();
	//匹配当前的字符和按下的字符是否一样，显示绿色，
	if(e.key==newline[0]){
		$(".title .finish_"+record+"").append("<a class='green'>"+newline[0]+"</a>");	
		var te="";
		for (var i=1;i<newline.length;i++) {
			te=te+newline[i];
		}
		$("#txt_"+record+"").text(te);
		how++;
		sum++;		//总按键数
		correct++;//记录成功的次数
	}else if(e.key!="Backspace"&&e.key!="Shift"&&e.key!="CapsLock"&&newline.length!=0){
		$(".title .finish_"+record+"").append("<a class='red'>"+newline[0]+"</a>");	
		var te="";
		for (var i=1;i<newline.length;i++) {
			te=te+newline[i];
		}
		$("#txt_"+record+"").text(te);
		 wrong++;//记录错误的次数
		 sum++;		//总按键数
	}
	//判断是否是这一行的最后一个是就换行
	var length=newline.length;
	var count2=Math.ceil(count);
	if(length==0&&e.key!="Backspace"&&record<count2-1){
		$(".input_"+record+" input").attr("readonly","readonly");
		record=record+1;
		document.getElementsByTagName("input")[record].focus();
	}
	
	//清除
	if(e.key=="Backspace"&&newline.length<=80){
	 	var tt=$(".title .finish_"+record+" a").last();  
	 	var te=tt.text(); 
		for (var i=0;i<newline.length;i++) {
			te=te+newline[i];
		}
		$("#txt_"+record+"").text(te);
		tt.remove();  //删除有颜色的标签
		bs++; //记录退格的次数
	}

	var alen=$(".title .finish_"+record+" a").nextAll();  //获取所有的a标签
	var inval=$(".input_"+record+" input").val(); //判断input里面是否清空了
	
	if(record>=1&&alen.length==0&&newline.length>0){
		var inval=$(".input_"+record+" input").val(); //判断input里面是否清空了
		if(inval.length==0){
			record=record-1;
			$(".input_"+record+" input").removeAttr("disabled");
			$(".input_"+record+" input").removeAttr("readonly");
			document.getElementsByTagName("input")[record].focus();
			
		}
	}
});


	$("input").keyup(function(e){  //这是按键后 ，先按键，再按键后	
		var alen=$(".title .finish_"+record+" a").nextAll();  //获取所有的a标签
	    var inval=$(".input_"+record+" input").val(); //判断input里面是否清空了
		if(e.key=="Backspace"){
			if(inval.length==0){
				for(var i=0;i<alen.length+1;i++){
					var tt=$(".title .finish_"+record+" a").last();  
				 	var te=tt.text(); 
				 	var t=$("#txt_"+record+"").text(); //获取他的字符数
					var newline=t.substring();
					for (var j=0;j<newline.length;j++) {
						te=te+newline[j];
					}
					$("#txt_"+record+"").text(te);
					tt.remove();  //删除有颜色的标签
				}
				bs++; //记录退格的次数
			}
		}
		if(alen.length>inval.length){     //如果上面的样式的字大于在input的字那么就进来判断
			var de=alen.length-inval.length;
			for(var i=0;i<de+1;i++){
					var tt=$(".title .finish_"+record+" a").last();  
				 	var te=tt.text(); 
				 	var t=$("#txt_"+record+"").text(); //获取他的字符数
					var newline=t.substring();
					for (var j=0;j<newline.length;j++) {
						te=te+newline[j];
					}
					$("#txt_"+record+"").text(te);
					tt.remove();  //删除有颜色的标签
			}
			bs++; //记录退格的次数
			
			
			//var tt=$(".title .finish_"+record+" a").nextAll();//获取所有的元素
			//var ins=inval.substring(); //分割input中的字符
			//for(var a=tt.length;a>0;a--){
				//var tes=tt[a-1].innerText; 
				//if(tes==ins[a]){
					/*tt[a-1].remove();  //删除有颜色的标签*/
					//$(".title .finish_"+record+"").attr("class","green");
				//}else{
					/*tt[a-1].remove();  //删除有颜色的标签*/
					//$(".title .finish_"+record+"").attr("class","red");
				//}
			//}

		}
		
		/*if(alen.length!=0){
				var tt=$(".title .finish_"+record+" a").nextAll();//获取所有的元素
				var ins=inval.substring(); //分割input中的字符
				for(var i=0;i<alen.length;i++){
					var tes=tt[i+1].innerText; 
					if(tes==ins[i]){
						tt[i].remove();  //删除有颜色的标签
						$(".title .finish_"+record+"").append("<a class='green'>"+tes+"</a>");	
					}else{
						tt[i].remove();  //删除有颜色的标签
						$(".title .finish_"+record+"").append("<a class='red'>"+tes+"</a>");	
					}
				}
			}*/
			
		
		
			
		
	});
	
$(document).ready(function(){ 
  var move=false;
  var _x,_y;
  $("#drag").mousedown(function(e){ 
    move=true; 
    _x=e.pageX-parseInt($("#drag").css("left")); 
    _y=e.pageY-parseInt($("#drag").css("top")); 
  }); 
  $(document).mousemove(function(e){ 
    if(move){ 
      var x=e.pageX-_x;//控件左上角到屏幕左上角的相对位置 
      var y=e.pageY-_y; 
      $("#drag").css({"top":y,"left":x}); 
    } 
  }).mouseup(function(){ 
    move=false; 
  }); 
});

$("#zt").click(function(){
	alert("暂停");
	var zz=Math.ceil(count);
	for (var t=0;t<zz+1;t++) {
		$(".input_"+t+" input").attr("disabled","disabled");
	}
	ininit=false; //开始
})
$("#ks").click(function(){
	alert("开始");
	var zz=Math.ceil(count);
	for (var t=0;t<zz+1;t++) {
		$(".input_"+t+" input").removeAttr("disabled");
	}
	ininit=true; //开始
})


var date=1;
var newDates=60;
var minute=5;
var newDate=5;
setInterval(function(){
	if(ininit==true){
		$("#drag #gx").empty();
		var hows=Math.ceil(how*60/date);
		var rate=Math.ceil(correct/sum*100);
		$("#drag #gx").append("<h1>"+minute+":"+newDates+"</h1><p>速度:"+hows+"/秒</p><p>正确率:"+rate+"%</p><p>错误数："+wrong+"</p><p>总字数："+text.length+"</p><p>退格："+bs+"</p>");
		date++;
		newDates--;
		
		if(date==60){
			minute=minute-1;
			date=0;
			newDates=60;
		}
		if(minute==-1){
			ininit=false; //停止
		}
		
		if(newDate==0){  //速度，每隔10秒减一个
			how--;
			newDate=10;
		}
		newDate--;
	}
	
},1000);

var zh=true;
setInterval(function(){
	if(zh){
		$("#sy").hide();
		$("#hx").show();
		zh=false;
	}
},3000);
/*var newDate=10;
	setInterval(function(){
		if(newDate==0&&ininit){
			how--;
		}
		newDate--;
	} 1000);
*/

/*$(".title")[0].append("123123123123");*/


/*$("#name").keydown(function(e){
	length=$("#name").val().length;
	if(length>2){
		document.getElementsByTagName("input")[1].focus();
	}
});*/

/*var AAA="Once upon a time a little girl tried to make a living by selling matches in the ";
alert(AAA.length);*/




