document.addEventListener('DOMContentLoaded', () =>{
    //    We use the querySelectorAll function to get an Node List (similar to a Python list or a JavaScript array) with all elements that match the query.
    //The forEach function in JavaScript takes in another function, and applies that function to each element in a list or array.

    
    document.querySelectorAll('button').forEach(button =>{
        
        button.onclick = () =>{
            
            document.querySelector('#change-me').style.color = button.dataset.color;
            
           
        }
    });
});