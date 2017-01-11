var clearTime;
var seconds = 0, minutes = 0, hours = 0, days = 0;
var clearState;
var getSecs, getMins, getHours, getDays;
var countTarget;
function setTimer() {
    countTarget = document.getElementById("countTarget").value;
}
function startUpWatch( ) {
	if ( seconds === 60 ) { 
		seconds = 0; 
		minutes = minutes + 1;
	}
	if ( minutes === 60 ) { 
		minutes = 0; 
		hours = hours + 1; 
	}
	if (hours === 24) {
		hours = 0;
		days = days + 1;
	};
	getDays = days + ' days ';
	getHours = hours + ' hours ';
	getMins = minutes + ' minutes ';
	getSecs = seconds + ' seconds';
	var x = document .getElementById("timer");
	x.innerHTML = 'Time : ' + getDays + getHours + getMins + getSecs; 
	seconds++;
	clearTime = setTimeout( "startUpWatch( )", 1000 );
}
function startUpTime( ) { 
 	this.style.display = "none";
 	var showStop = document.getElementById ('stop'); 
	showStop.style.display = "inline-block";
 	startUpWatch( );
} 
function stopUpTime( ) { 
	if ( seconds !== 0 || minutes !== 0 || hours !== 0 ) { 
		var showStart = document.getElementById ('start'); 
		showStart.style.display = "inline-block"; 
		var hideStop = document.getElementById ("stop"); 
		hideStop.style.display = "none";  
		clearTimeout( clearTime ); 
	} 
} 
function resetUpTime() {
	seconds = 0; 
	minutes = 0; 
	hours = 0;
	days = 0;
	getSecs = '0 seconds'; 
	getMins = '0 minutes '; 
	getHours = '0 hours ';
	getDays = '0 days '; 
	var x = document.getElementById ("timer"); 
	var resetUpTime = " Time : " + getDays + getHours + getMins + getSecs; 
	x.innerHTML = resetUpTime;
}
window.addEventListener( 'load', function ( ) { 
	var start = document.getElementById("start");
	start.addEventListener( 'click', startUpTime );
});
window.addEventListener( 'load', function ( ) { 
	var stop = document.getElementById ("stop"); 
	stop.addEventListener( 'click', stopUpTime ); 
});
window.addEventListener( 'load', function ( ) { 
	var stop = document.getElementById ("reset"); 
	stop.addEventListener( 'click', resetUpTime ); 
}); 