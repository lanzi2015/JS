var star=1;
/**点一次闪一次
 */
function myFunction() {
	var a=reset();
	var num=numrandom();
	for(i=0;i<num.length;i++)
		a[num[i]].style.background= color();
	
}
/** 重置九宫格颜色,并获取九个格子doc数组
 */
function reset(){
	var a=document.getElementsByClassName("Ju");
	for(i=0;i<a.length;i++)
	{
		a[i].style.background='yellow';
	}
	return a;
}
/**获取三个随机数 */
function numrandom(){
	var arr=[0,1,2,3,4,5,6,7,8];
	var newblock=[];

	for(k=0;k<3;k++){
		var ran=Math.round(Math.random()*(arr.length-1));
		newblock.push(arr[ran]);
		arr.splice(ran,1);
	}
	return newblock;
}
/** 随机取3个颜色
	  */
function color(){
	this.r=Math.floor(Math.random()*255);
	this.g=Math.floor(Math.random()*255);
	this.b=Math.floor(Math.random()*255);
	return 'rgba('+ this.r +','+ this.g +','+ this.b +',0.8)';
}
/**一直闪*/
function myFunction2(){
	var m=reset();
	var n;
	if(star=='1')
	{
		star=setInterval(myFunction,1000);
	}

}
/**结束闪 */
function myFunction3(){
	clearInterval(star);
	reset();
	star=1;
}
/**获取id */
function $(id){
	return document.getElementById(id);
}
window.onload=function(){
		var one = document.getElementsByClassName("one");
		one[0].onmouseover = function(){
			one[0].style.background = 'darkorange';
			one[0].style.color='white';
			}
		one[0].onmouseout = function(){
			one[0].style.background= 'white';
			one[0].style.color='darkorange'
		}
		one[1].onmouseover = function(){
			one[1].style.background = 'darkorange';
			one[1].style.color='white';
			}
		one[1].onmouseout = function(){
			one[1].style.background= 'white';
			one[1].style.color='darkorange'
		}
}
function resetcolor(){
}