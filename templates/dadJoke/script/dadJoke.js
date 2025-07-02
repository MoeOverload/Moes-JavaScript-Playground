document.addEventListener('DOMContentLoaded', function(){

	const genButton = document.querySelector('#genButton');
	genButton.addEventListener('click', () =>{
		fetchData()
	})
	async function fetchData(){
		try{
			const response = await fetch('https://icanhazdadjoke.com/', {
				
				headers: {
					'Accept': 'application/json'
				}
			})
			if (!response.ok){
				throw new Error('No Yuks Found!')
			}
			const data = await response.json();
			const dadJoke =data.joke;
			const P = document.createElement('p');
			P.innerHTML = dadJoke;
			document.querySelector('#joke-container').appendChild(P);

		}
		catch(error) {
			console.log(error)
		}
	}
})