How To Use
=====

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
