

// Timers for javascript
var clickTimer;
var idleTimer;

// Cheeto Trump Idle Timeout: Times in miliseconds
var idleTimeout = 20000;
// Time before we trigger cooldown mode in between clicks
var clickTimeout = 1000;

// Intervals for update
var cooldownInterval = 1000;
var timeUpdateInterval = 1000;

// Clicks
var totalClicks = 0;
var clickCount = 0;

var functionIsRunning = false;



// Hover Triggers. Used for only triggering once when mouse enter or leaves image
// For ensuring one execution of hover or unhover function when mouse transition from
// transparent part of image to button part of image
var hoverTrigger = 0;
var unHoverTrigger = 0;

// Update Time function
function updateTime(){
    // Function to format 0 back to timer
    correctTime = function(time){
        return time < 10 ? "0" + time : time;
    }
    // Getting new time
    var time = new Date();
    document.querySelector('#clock').innerHTML = correctTime(time.getHours()) + ":" + correctTime(time.getMinutes()) + ":" + correctTime(time.getSeconds());
}

// Actions if Idle
function idleTrump(){
    // Only Swap to Cheeto trump if there is no click on Trump
    if(clickCount == 0)
        document.querySelector('#trump').src = 'assets/Cheeto_Trump_gif.gif';
		var audio = document.querySelector('#DarthTrump');
        audio.pause();
        audio.currentTime = 0;
		audio.play();
}

//Action to Revert
function normalTrump(){
    document.querySelector('#trump').src = 'assets/Bored_Trump_gif.gif';
}

// Hover Function
function hoverTrump(){
    console.log('Hovered');
	var audio = document.querySelector('#LoveChina');
        audio.pause();
        audio.currentTime = 0;
		if(functionIsRunning == true)
		{
			audio.pause();
		}
		else{
        audio.play();
		}
		document.querySelector('#trump').src = 'assets/Angry_Trump_gif.gif';
}

//UnHover Function
function unHoverTrump(){
    console.log('UnHovered');
	var audio = document.querySelector('#LoveChina');
        audio.pause();
        audio.currentTime = 0;
		//document.querySelector('#trump').src = 'assets/Bored_Trump_gif.gif';

}

// Function for mouse move. Does Hover and cursor styling based on transparency
function mouseMove(event, element){
    // If mouse positon on transparent part, style with default, else pointer
    if (isTransparent(event, element)){
        // Style cursor to default since we are on transparent
        element.style.cursor = 'default';
        // This is to make sure that we are coming from inside element
        // If this is satisfied, it means we are unhovering, so run unhover function
        if (hoverTrigger !== 0){
            hoverTrigger = 0;
            // Run UnHover function
            unHoverTrump();
        }
        // These triggers are to detect that we are in the unhover or hover state
        unHoverTrigger++;
    }else{
        // Style cursor to pointer since we are on button
        element.style.cursor = 'pointer';
        // If unhover is not 0, it means we are coming from transparent part of image
        // Set it to zero and run hover function.
        if (unHoverTrigger !== 0){
            unHoverTrigger = 0;
            // Run Hover Function
            hoverTrump();
        }
        // These triggers are to detect that we are in the unhover or hover state
        hoverTrigger++;
    }
}

//Right Click function
function rightClick(event, element){
	functionIsRunning = true;
		var audio = document.querySelector('#LoveChina');
        audio.pause();
        audio.currentTime = 0;
    // Prevent right click menu from showing
    event.preventDefault();
    // Function to check if we are clicking on transparent region, if we are, return so do nothing
    if (isTransparent(event, element)){
        return false;
    }
	else{
		//play trump "WE NEED TO BuILD A WaLl
		var audio = document.querySelector('#BuildWall');
        audio.pause();
        audio.currentTime = 0;
        audio.play();
		
		document.querySelector('#brick').classList.add('animatedropDown');document.querySelector('#brick').classList.add('animatedropDown');
		sleep(500).then(() => {
			document.querySelector('#brick2').classList.add('animatedropDown');document.querySelector('#brick2').classList.add('animatedropDown');
});
	sleep(1000).then(() => {
			document.querySelector('#brick3').classList.add('animatedropDown');document.querySelector('#brick3').classList.add('animatedropDown');
});
	sleep(1500).then(() => {
			document.querySelector('#brick4').classList.add('animatedropDown');document.querySelector('#brick4').classList.add('animatedropDown');
});
	sleep(2000).then(() => {
			document.querySelector('#brick5').classList.add('animatedropDown');document.querySelector('#brick5').classList.add('animatedropDown');
});
	sleep(2500).then(() => {
			document.querySelector('#brick6').classList.add('animatedropDown');document.querySelector('#brick6').classList.add('animatedropDown');
});
	sleep(3000).then(() => {
			document.querySelector('#brick7').classList.add('animatedropDown');document.querySelector('#brick7').classList.add('animatedropDown');
});
	sleep(3500).then(() => {
			document.querySelector('#brick8').classList.add('animatedropDown');document.querySelector('#brick8').classList.add('animatedropDown');
});	
	sleep(4000).then(() => {
			document.querySelector('#brick9').classList.add('animatedropDown');document.querySelector('#brick9').classList.add('animatedropDown');
});
	sleep(4500).then(() => {
			document.querySelector('#brick10').classList.add('animatedropDown');document.querySelector('#brick10').classList.add('animatedropDown');
});
	sleep(5000).then(() => {
			document.querySelector('#brick11').classList.add('animatedropDown');document.querySelector('#brick11').classList.add('animatedropDown');
});
	sleep(5500).then(() => {
			document.querySelector('#brick12').classList.add('animatedropDown');document.querySelector('#brick12').classList.add('animatedropDown');
});
	sleep(11500).then(() => {
		//break down the wall.....
		document.querySelector('#brick').classList.add('animatedropFurther');
		document.querySelector('#brick2').classList.add('animatedropFurther');
		document.querySelector('#brick3').classList.add('animatedropFurther');
		document.querySelector('#brick4').classList.add('animatedropFurther');
		document.querySelector('#brick5').classList.add('animatedropFurther');
		document.querySelector('#brick6').classList.add('animatedropFurther');
		document.querySelector('#brick7').classList.add('animatedropFurther');
		document.querySelector('#brick8').classList.add('animatedropFurther');
		document.querySelector('#brick9').classList.add('animatedropFurther');
		document.querySelector('#brick10').classList.add('animatedropFurther');
		document.querySelector('#brick11').classList.add('animatedropFurther');
		document.querySelector('#brick12').classList.add('animatedropFurther');
		audio.pause();
		audio.currentTime = 0;
		functionIsRunning = false;
	    idleTimer = setTimeout(()=>{idleTrump()}, idleTimeout);
	});
	 
	}
}
// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
//sleep function used in rightclick for wall animation 

// Left Click function
function clicked(event, element){
    // Function to check if we are clicking on transparent region, if we are, return so do nothing
    if (isTransparent(event, element)){
        return false;
    }
    
    // Change to normal trump
    normalTrump();

    // Clear the timer for Idle when clicked as we don't want timer for cheeto trump
    clearTimeout(idleTimer);

    // Clear the timer for decreasing click count as we don't want it to cooldown in between clicks
    clearInterval(cooldown);

    // We clear the timer so we don't keep executing cooldown until the last click
    clearTimeout(clickTimer);
    clickTimer = setTimeout(()=>{
        // If timeout is not cleared by next click, we run the cooldown timer
        cooldown = setInterval(()=>{decreaseOpacity()}, cooldownInterval)
    }, clickTimeout);

    // Checking if it is the first click on the screen. Need to put this in so that we can toggle left right birds
    // Should only execute once
    if (totalClicks == 0){
        document.querySelector('#birdLeft').classList.add('animateFlyLeft');
        totalClicks++;
    }

    // If click count is less than 6, we toggle the animation for the birds
    if (clickCount < 6) {
        // Play Tweet Sounds
        var audio = document.querySelector('#tweet');
        audio.pause();
        audio.currentTime = 0;
        audio.play();
        
        // Toggle animation classes
        document.querySelector('#birdRight').classList.toggle('animateFlyRight');
        document.querySelector('#birdLeft').classList.toggle('animateFlyLeft');
        clickCount++;
    }

    // Based on the click count, we turn up the opacity of the red circle
    var image = document.querySelector('#red');
    image.style.opacity = clickCount/10;

    // Set back the idle timer after click event ends
    idleTimer = setTimeout(()=>{idleTrump()}, idleTimeout);
}

// Function to decrease opacity, use with cooldown
function decreaseOpacity(){
    var image = document.querySelector('#red')
    image.style.opacity = clickCount/10;
    if(clickCount > 0)
        clickCount--;
}

// Function to check transparency
// Takes in an item and event
function isTransparent(event, item){
    var ctx = document.createElement("canvas").getContext("2d");

    // Get click coordinates
    var x = event.pageX - item.offsetLeft,
        y = event.pageY - item.offsetTop,
        w = ctx.canvas.width = item.width,
        h = ctx.canvas.height = item.height,
        alpha;

    // Draw image to canvas
    // and read Alpha channel value
    ctx.drawImage(item, 0, 0, w, h);
    alpha = ctx.getImageData(x, y, 1, 1).data[3]; // [0]R [1]G [2]B [3]A
    // If pixel is transparent,
    // retrieve the element underneath and trigger it's click event

    return alpha === 0 ? true : false;
}

//Execution Begins here

//Start Updating the time
setInterval(()=>{updateTime();}, timeUpdateInterval);

// Speed at which Trump Coolsdown
var cooldown = setInterval(() => {decreaseOpacity();},cooldownInterval);

// When mouse moves, change to normal trump, clear idle timer, and set back idle timer in case mouse no longer moves
window.onmousemove = () => {
    normalTrump();
    clearTimeout(idleTimer);
    idleTimer = setTimeout(()=>{idleTrump()}, idleTimeout);
}
