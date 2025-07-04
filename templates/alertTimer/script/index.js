//wait for page load
document.addEventListener('DOMContentLoaded', function(){
	//get the timer element
	const timeDisplay = document.querySelector('#timer');
	const startBtn = document.querySelector('#startBtn');
	const endBtn = document.querySelector('#endBtn');
	const resetBtn = document.querySelector('#resetBtn');
	// set reminder msg
	const reminderMsg = document.querySelector('#reminderMsg');
	// declare timer length start and end points
	const endTime =10;
	let startTime = 0;
	let timeInterval;
	const roastSound = new Audio('/sounds/Classic Rewatch  Full Metal Jacket (1987) HD Move Clip Jelly Doughnut.mp3')

	//on start button pessed
	startBtn.addEventListener('click', () =>{
		//disable the button
		startBtn.disabled = true
		// start the timer
		timeInterval = setInterval(() =>{
			//calculate the remaining time
			let timeRemaining = (endTime - startTime);
			let minutes = Math.floor(timeRemaining/60);
			let seconds = timeRemaining % 60;
			// format text like HH:MM
			let formattedMinutes = String(minutes).padStart(2, "0");
			let formattedSeconds = String(seconds).padStart(2,"0");
			let display = `${formattedMinutes}:${formattedSeconds}`;
			
			
			// if the timer ends
			if(startTime == endTime){
				//stop the timer
				clearInterval(timeInterval);
				//call function
				reminderAlert()
			}
			else{
				startTime += 1;

			}
			timeDisplay.innerHTML = display 
		},1000)
	})
	//on pause button pressed
	endBtn.addEventListener('click', () =>{
		//stop the timer
		clearInterval(timeInterval);
		startBtn.disabled = false;
	})
	//on reset button pressed
	resetBtn.addEventListener('click', () =>{
		//stop the timer
		clearInterval(timeInterval);
		//hide the msg
		reminderMsg.classList.add('hidden');
		//reset start time
		startTime = 0;
		//reset the html msg
		reminderMsg.innerHTML = "";
		//enable start button
		startBtn.disabled = false
	})

	// a list of  'roasts'
	const roastLines = [
		"WHAT THE HELL ARE YOU DOING",
		"GET BACKTO WORK",
		"WHERES YOU BRAIN",
		"TALK GOD DAMN",
	];

	function reminderAlert(){
		roastSound.play()
		//stop thetimer
		clearInterval(timeInterval);
		//reset start time
		startTime = 0;
		//get a random roast from the list
		const randomLine = roastLines[Math.floor(Math.random() * roastLines.length)];
		//set the html content to the roast
		reminderMsg.textContent = randomLine;
		//make the alert visible and make the timer invisible
		timeDisplay.classList.add('hidden');
		reminderMsg.classList.remove('hidden');
		
		//give the alert a timer
		setTimeout(() => {
			reminderMsg.classList.add('hidden');
			timeDisplay.classList.remove('hidden');
		}, 1000);

	}


})