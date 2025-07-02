document.addEventListener('DOMContentLoaded', function(){
	const genButton  = document.querySelector('#gen-button');

	genButton.addEventListener('click', () =>{
		fetchData()
	})
	async function fetchData(){
		try{
			const response = await fetch('https://dog.ceo/api/breeds/image/random')
			if (!response.ok){
				throw new Error('could not fetch resource');

			}
			const data = await response.json();
			const dogimage = data.message;
			const imageElement = document.getElementById('random-photo');

			imageElement.src = dogimage;
			imageElement.style.display = 'block';
			console.log(data)
		}
		catch(error){
			console.log(error)
		}
	}
	imageElement.src = "";
	imageElement.src.display = "none";
})