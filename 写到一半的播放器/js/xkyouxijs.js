	#dontai{
		position: absolute;
		left: 200px;
		top: 400px;
		z-index: 60;
	}
	document.onkeyup=function(event){
		  var e=event||window.event;
		  var keyCode=e.keyCode||e.which;
		  if(keyCode==81){
		  	count(1);
		  }else if(keyCode==87){
		  	count(2);
		  }else if(keyCode==69){
		  	count(3);
		  }else if(keyCode==82){
		  	count(4);
		  }
		}
	
var suspend;//clearInterval(interId); 暂停
  document.getElementById('fen').style.color='red';
  	var fenshu=0;
  	var a=new Array(-110,-120,-270,-390,-430,-580,-650);
  	var b=new Array(-110,-120,-220,-320,-360,-480,-550);
    var speed = 5; 
    
    function zanting(){
    	clearInterval(suspend);
    	alert("游戏结束 分数："+fenshu);
	    window.location.href='index.html';
    	
    }
    function moveTop(){
      var oldTop = parseInt(box.style.top); 
      var oldTop1 = parseInt(box1.style.top); 
      var oldTop2 = parseInt(box2.style.top); 
      var oldTop3 = parseInt(box3.style.top); 
			
      box.style.top = oldTop + speed + "px";  
      box1.style.top = oldTop1 + speed + "px";  
      box2.style.top = oldTop2 + speed + "px";  
      box3.style.top = oldTop3 + speed + "px";
     
      
			if(box.style.top=="450px"){
				aixin();
				 box.style.top=a[random()]+'px';
				 
			}if(box1.style.top=="450px"){
				 aixin();
				 box1.style.top=a[random()]+'px';
				 document.getElementById('box1').style.backgroundColor=s[random()];
				
			}
			if(box2.style.top=="450px"){
				aixin();
				 box2.style.top=a[random()]+'px';
				 document.getElementById('box2').style.backgroundColor=s[random()];
				 
			}
			if(box3.style.top=="450px"){
				 aixin();
				 box3.style.top=a[random()]+'px';
				 document.getElementById('box3').style.backgroundColor=s[random()];
				 
			}
			document.getElementById('fen').value="分数："+fenshu;
    } 
    var mark=-1;
    function onOff(){ 
//     	btn.innerHTML = "游戏已经开启";
				if(mark==-1){
					   	suspend=setInterval("moveTop()",100);
					   	document.getElementById('btn').style.display='none';
					   	document.getElementById('flip').style.display='none';
					   	document.getElementById('dontai').style.display='none';
//					   	window.location.href='index.html';//刷新页面
					   	 $("#yc").hide(1500);
					   	
				}
	      mark++;
    } 
      
    function count(e){

    	var s=new Array("1.gif","2.gif","3.gif","4.gif","5.gif","3.gif","2.gif");
    	var oldTop = parseInt(box.style.top); 
      var oldTop1 = parseInt(box1.style.top); 
      var oldTop2 = parseInt(box2.style.top); 
      var oldTop3 = parseInt(box3.style.top); 
      
    	var t=oldTop + speed;
      var t1=oldTop1 + speed;
      var t2=oldTop2 + speed;
      var t3=oldTop3 + speed;
      
			if(mark!=-1){
				if(e==1){
		      if(fenshu%10==0 && fenshu!=0){
						suspend=setInterval("moveTop()",400);
					}
					if(t>=t1 &&  t >= t2 && t>=t3){
	    			fenshu+=1;
	    			if(fenshu<100){
		    			box.style.top=a[random()]+'px';
		    		}else{
		    			box.style.top=b[random()]+'px';
		    		}
	    			document.getElementById('box').style.backgroundImage="url(img/"+s[random()]+")";
	    			sonaixin();
			    }else{
			    			aixin();
			    }
	    	}else if(e==2){
	    		  if(fenshu%10==0 && fenshu!=0){
	      				suspend=setInterval("moveTop()",400);
	     			}
		    		if(t1>=t &&  t1 >= t2 && t1>=t3){
		    			fenshu+=1;
		    			if(fenshu<100){
		    				box1.style.top=a[random()]+'px';
		    			}else{
		    				box1.style.top=b[random()]+'px';
		    			}
		    			document.getElementById('box1').style.backgroundImage="url(img/"+s[random()]+")";
		    			sonaixin();
		    		}else{
		    			aixin();
		    		}
	    	}else if(e==3){
	    		  if(fenshu%10==0 && fenshu!=0){
	      	 		suspend=setInterval("moveTop()",400);
	     			}
		    		if(t2>=t &&  t2 >= t1 && t2>=t3){
		    			fenshu+=1;
		    			if(fenshu<100){
		    				box2.style.top=a[random()]+'px';
		    			}else{
		    				box2.style.top=b[random()]+'px';
		    			}
		    			document.getElementById('box2').style.backgroundImage="url(img/"+s[random()]+")";
		    			sonaixin();
		    		}else{
		    			aixin();
		    		}
	    	}else if(e==4){
	    		   if(fenshu%10==0 && fenshu!=0){
	      			suspend=setInterval("moveTop()",400);
	     			}
		    		if(t3 >=t &&  t3 >= t1 && t3 >=t2){
		    			fenshu+=1;
		    			if(fenshu<100){
		    				box3.style.top=a[random()]+'px';
		    			}else{
		    				box3.style.top=b[random()]+'px';
		    			}
		    			
		    			document.getElementById('box3').style.backgroundImage="url(img/"+s[random()]+")";
		    			sonaixin();
		    		}else{
		    			aixin();
		    		}
	    	}
			}

    }
    btn.onclick =onOff;
    
    function random(){ 
      	return parseInt(Math.random() * 6); 
    } 
    function aixin(){
    	for(var i=0;i<3;i++){
    		var l="like"+(i+1);
    		if(document.getElementById(l).style.color=="red"){
    			document.getElementById(l).style.color='lightsteelblue';
    			if((i+1)==3){
	    			alert("游戏结束 分数："+fenshu);
	    			window.location.href='index(1).html';
    			}
    			return;
    		}
    		
    	}
    }
    function sonaixin(){
    	if(fenshu%50==0){
    		for(var i=3;i>=0;i--){
	    		var l="like"+(i);
	    		if(document.getElementById(l).style.color=="lightsteelblue"){
	    			document.getElementById(l).style.color='red';
	    			if((i+1)==3){
		    			alert("游戏结束 分数："+fenshu);
		    			window.location.href='index(1).html';
	    			}
	    			return;
	    		}
	    		
    		}
    	}
    	
    }
    function axcolor(){
    	for(var i=0;i<3;i++){
	    		var l="like"+(i+1);
	    		document.getElementById(l).style.color="red"
    	}
    }
	axcolor();
	
$(document).ready(function(){
		  $("#flip").click(function(){
		    $("#panel").slideToggle("slow");
		  });
		});
		
		$("#btn").click(function(){
		    $("#panel").slideUp("slow");
		 });
		 
	 $("#yc").click(function(){
	    $("#panel").slideUp("slow");
	 });
	 $("#panel").click(function(){
	    $("#panel").slideUp("slow");
	 });
	</script>
	<script>
			var id;
			function yc(){
				document.getElementById('yc1').style.display="none";
				document.getElementById('yc2').style.display="block";
				id=setInterval("ych()",1000);
			}
			
			function ych(){
				document.getElementById('yc2').style.display="none";
				document.getElementById('yc1').style.display="block";
				window.clearInterval(id);
			}