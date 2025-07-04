//wait for the page to load 
document.addEventListener('DOMContentLoaded', function(){
	const submit = document.querySelector('#submit');
	const startTime = document.querySelector('#startTime');
	const endTime = document.querySelector('#endTime');
	//disable the submit button
	submit.disabled = true;

	//listen for end time completion 
	endTime.onkeyup = () =>{
		if(endTime.value.length > 0){
			submit.disabled = false;
		}
		else{
			submit.disabled = true;
		}

	}
	//listen for form submission
	document.querySelector('form').onsubmit = () =>{
		const [sH,sM] = startTime.value.split(":").map(Number);
		const [eH,eM] = endTime.value.split(":").map(Number);

		let newStartTotal = sH * 60 +sM;
		let newEndTime = eH * 60 + eM;
		const total = (newEndTime - newStartTotal) / 60;
		console.log(total);
		startTime.value = "";
		endTime.value = "";
		submit.disabled = true;
		return false;
	}
})