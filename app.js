

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
        document.querySelector('#trump').src = 'assets/Trump_to_Cheeto_V2.gif';
}

//Action to Revert
function normalTrump(){
    document.querySelector('#trump').src = 'assets/Trump_Button_V2.png';
}

// Hover Function
function hoverTrump(){
    console.log(new Date());
}

//UnHover Function
function unHoverTrump(){
    console.log('WHat');
}

//Right Click function
function rightClick(event){
    event.preventDefault();
    alert('hi');
}

// Left Click function
function clicked(){
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
