/*
Author: Partha Ranjan Nayak
http://www.partha.pw/
********************************************************
var target_date=new Date(2014,0,21,16,0,0);
var timer=new Timer(target_date);
timer.tick=function(count_down_object,status)
{
	if(count_down_object!=null)
	{
		var day=timer.leadingZero(count_down_object.day);
		var hr=timer.leadingZero(count_down_object.hr);
		var min=timer.leadingZero(count_down_object.min);
		var sec=timer.leadingZero(count_down_object.sec);
		$("#timer_content").html(day+":"+hr+":"+min+":"+sec);
	}
	else
	{
		$("#timer_content").html("00:00:00:00");
	}
};
timer.start();
*/
function Timer(target_date)
{
	this.targetTimeStamp=target_date.getTime();
	this.tick = function (new_date,status) { }
	this.countDownObject=
	{
		day:0,
		hr:0,
		min:0,
		sec:0
	}
}
Timer.prototype.start=function()
{
	var obj=this;
	var currentTimeStamp=new Date().getTime();
	var seconds_left =Math.floor((this.targetTimeStamp - currentTimeStamp) / 1000);
	if(seconds_left>0)
	{
		setTimeout(function(){
			//set the time object
			//day
			obj.countDownObject['day']=parseInt(seconds_left/86400);
			seconds_left = seconds_left % 86400;
			//hr
			obj.countDownObject['hr'] = parseInt(seconds_left/3600);
			seconds_left = seconds_left % 3600;
			//min
			obj.countDownObject['min'] = parseInt(seconds_left/60);
			//sec
			obj.countDownObject['sec'] = parseInt(seconds_left%60);
			//call the callback function
			obj.tick(obj.countDownObject,false);
			//call the timmer event
			obj.start();
			},1000);
	}
	else
	{
		//status set to true
		//means event timer close
		obj.tick(null,true);
	}
}
Timer.prototype.leadingZero=function(data)
{
	data=new String(data);
	return data.length<2?"0"+data:data;
}
