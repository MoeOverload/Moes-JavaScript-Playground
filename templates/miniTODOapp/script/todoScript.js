//wait for dom toload
document.addEventListener('DOMContentLoaded', function(){
	//select the submit button and task input for later
	const submit = document.querySelector('#submit');
	const newTask = document.querySelector('#task');
	//disable submit button
	submit.disabled = true;
	//listen for input 
	newTask.onkeyup = () => {
		if(newTask.value.length > 0){
			submit.disabled = false;
		}
		else{
			submit.disabled = true;
		}
	}

	//listen for form submit
	document.querySelector('form').onsubmit = () =>{
		//find the task the user just submitted
		const task =newTask.value;
		//create a list item from task submit data
		const Li = document.querySelector('li');
		Li.innerHTML = task;
		//create a button to complete the task
		const completeButton =  document.createElement('button');
		completeButton.textContent= 'done';
		completeButton.addEventListener('click', () =>{
			Li.classList.toggle('done');
		});
		//create a delete button
		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'delete';
		deleteButton.addEventListener('click', ()=>{
			Li.remove()
		});
		Li.appendChild(completeButton);
		Li.appendChild(deleteButton)
		//add the task
		document.querySelector('#tasks').append(Li);

		//clear the input field
		newTask.value='';
		//disable the submit button
		submit.disabled = true;
		//stop form from submitting
		return false;
	}

})