var clearTimeDown;
var secondsDown = 0, minutesDown = 0, hoursDown = 0, daysDown = 0;
var getSecs, getMins, getHours, getDays, origTime;
var countTarget;
function setDownTimer() {
    countTarget = document.getElementById("countTarget").value;
    if(countTarget < 60) {
    	secondsDown = countTarget;
    }
    else if(countTarget < 3600) {
    	secondsDown = countTarget % 60;
    	minutesDown = Math.floor(countTarget / 60);
    }
    else if(countTarget < 3600 * 24) {
    	secondsDown = countTarget % 60;
    	minutesDown = Math.floor((countTarget % 3600) / 60);
    	hoursDown = Math.floor(countTarget / 3600);
    }
    else {
    	secondsDown = countTarget % 60;
    	minutesDown = Math.floor((countTarget % 3600) / 60);
    	hoursDown = Math.floor((countTarget % 86400) / 3600);
    	daysDown = Math.floor(countTarget / (3600 * 24));
    }
    getDays = daysDown + ' days ';
	getHours = hoursDown + ' hours ';
	getMins = minutesDown + ' minutes ';
	getSecs = secondsDown + ' seconds';
	var x = document .getElementById("timerDown");
	x.innerHTML = 'Time : ' + getDays + getHours + getMins + getSecs;
	origTime = 'Time : ' + getDays + getHours + getMins + getSecs;
}
function startDownWatch( ) {
	if ( secondsDown === -1 && minutesDown !== 0 && hoursDown !== 0 && daysDown !== 0 ) { 
		secondsDown = 59; 
		minutesDown = minutesDown - 1;
	}
	if ( minutesDown === -1 && hoursDown !== 0 && daysDown !== 0 ) { 
		minutesDown = 59; 
		hoursDown = hoursDown - 1; 
	}
	if (hoursDown === -1 && daysDown !== 0) {
		hoursDown = 23;
		daysDown = daysDown - 1;
	};
	getDays = daysDown + ' days ';
	getHours = hoursDown + ' hours ';
	getMins = minutesDown + ' minutes ';
	getSecs = secondsDown + ' seconds';
	var x = document .getElementById("timerDown");
	x.innerHTML = 'Time : ' + getDays + getHours + getMins + getSecs; 
	secondsDown--;
	if(secondsDown + 1 === 0) {
		var hideStart = document.getElementById ('startDown'); 
		hideStart.style.display = "none"; 
		var hideStop = document.getElementById ("stopDown"); 
		hideStop.style.display = "none";
		var showReset = document.getElementById ('resetDown'); 
		showReset.style.display = "inline-block";
		return;
	}
	clearTimeDown = setTimeout( "startDownWatch( )", 1000 );
}
function startDownTime( ) { 
 	this.style.display = "none";
 	var showStop = document.getElementById ('stopDown'); 
	showStop.style.display = "inline-block";
	var hideReset = document.getElementById ("resetDown"); 
	hideReset.style.display = "none";
 	startDownWatch( );
} 
function stopDownTime( ) { 
	if ( secondsDown !== 0 || minutesDown !== 0 || hoursDown !== 0 ) { 
		var showStart = document.getElementById ('startDown'); 
		showStart.style.display = "inline-block"; 
		var hideStop = document.getElementById ("stopDown"); 
		hideStop.style.display = "none";
		var showReset = document.getElementById ('resetDown'); 
		showReset.style.display = "inline-block";  
		clearTimeout( clearTimeDown ); 
	} 
} 
function resetDownTime() {
	if(countTarget < 60) {
    	secondsDown = countTarget;
    }
    else if(countTarget < 3600) {
    	secondsDown = countTarget % 60;
    	minutesDown = Math.floor(countTarget / 60);
    }
    else if(countTarget < 3600 * 24) {
    	secondsDown = countTarget % 60;
    	minutesDown = Math.floor((countTarget % 3600) / 60);
    	hoursDown = Math.floor(countTarget / 3600);
    }
    else {
    	secondsDown = countTarget % 60;
    	minutesDown = Math.floor((countTarget % 3600) / 60);
    	hoursDown = Math.floor((countTarget % 86400) / 3600);
    	daysDown = Math.floor(countTarget / (3600 * 24));
    }
	var x = document.getElementById ("timerDown"); 
	x.innerHTML = origTime;
	var showStart = document.getElementById ('startDown'); 
	showStart.style.display = "inline-block";
}
window.addEventListener( 'load', function ( ) { 
	var start = document.getElementById("startDown");
	start.addEventListener( 'click', startDownTime );
});
window.addEventListener( 'load', function ( ) { 
	var stop = document.getElementById ("stopDown"); 
	stop.addEventListener( 'click', stopDownTime ); 
});
window.addEventListener( 'load', function ( ) { 
	var stop = document.getElementById ("resetDown"); 
	stop.addEventListener( 'click', resetDownTime ); 
}); 