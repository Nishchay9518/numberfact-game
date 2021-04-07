const form = document.querySelector('form');
const fact = document.querySelector('.number-fact');

form.addEventListener('submit' , (e) =>{
    e.preventDefault();
    const number = e.target.querySelector('input[type="number"]').value;
    const loadText = "Wait a little bit.. 🤔";
    fact.innerHTML = loadText;
    const baseURL = 'https://cors-anywhere.herokuapp.com/http://numbersapi.com/';

    fetch(baseURL + number,{
        method:"GET",
        headers:{
          'X-Requested-With': 'text/html' 
        }
    })
    .then(response => response.text())
    .then(text => fact.innerHTML = text)
})