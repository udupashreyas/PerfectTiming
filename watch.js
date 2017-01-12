var clearTime;
var seconds = 0, minutes = 0, hours = 0, days = 0;
var getSecs, getMins, getHours, getDays;
var countTarget;
function setTimer() {
    countTarget = document.getElementById("countTarget").value;
    var showReset = document.getElementById ('reset'); 
	showReset.style.display = "inline-block";
	var showStart = document.getElementById ('start'); 
	showStart.style.display = "inline-block";
	var hideTarget = document.getElementById ('target'); 
	hideTarget.style.display = "none"; 
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
	if((days * 24 * 3600 + hours * 3600 + minutes * 60 + seconds) - 1 == countTarget) {
		var hideStart = document.getElementById ('start'); 
		hideStart.style.display = "none"; 
		var hideStop = document.getElementById ("stop"); 
		hideStop.style.display = "none";
		var showReset = document.getElementById ('reset'); 
		showReset.style.display = "inline-block";
		return;
	}
	clearTime = setTimeout( "startUpWatch( )", 1000 );
}
function startUpTime( ) { 
 	this.style.display = "none";
 	var showStop = document.getElementById ('stop'); 
	showStop.style.display = "inline-block";
	var hideReset = document.getElementById ("reset"); 
	hideReset.style.display = "none";
 	startUpWatch( );
} 
function stopUpTime( ) { 
	if ( seconds !== 0 || minutes !== 0 || hours !== 0 ) { 
		var showStart = document.getElementById ('start'); 
		showStart.style.display = "inline-block"; 
		var hideStop = document.getElementById ("stop"); 
		hideStop.style.display = "none";
		var showReset = document.getElementById ('reset'); 
		showReset.style.display = "inline-block";  
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
	var showStart = document.getElementById ('start'); 
	showStart.style.display = "inline-block";
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