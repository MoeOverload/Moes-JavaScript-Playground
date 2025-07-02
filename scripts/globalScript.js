document.addEventListener('DOMContentLoaded', () =>{
    
    //select the color change button
    const colorButton = document.querySelector('#color-button');
    //get saved theme
    const savetheme = localStorage.getItem('theme');
    if (savetheme === 'dark'){
        document.body.classList.add('darkmode');
        colorButton.textContent = '🌞';
    }
    
    colorButton.addEventListener('click', () =>{
        document.body.classList.toggle('darkmode');  
        
        
         // Save the new theme
        if (document.body.classList.contains('darkmode')) {
            localStorage.setItem('theme', 'dark');
            colorButton.textContent = '🌞';
        } 
        else {
            localStorage.setItem('theme', 'light');
            colorButton.textContent = '🌙';
        }
    });
    
    
});
