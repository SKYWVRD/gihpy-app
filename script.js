const newCatButton = document.getElementById('new-cat-button')
fetchGif()


const img = document.querySelector('img');
function fetchGif () {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=i13s2h9tf8ZI6sj0JMPaOcBBZpZylSM5&s=cats', {mode: 'cors'})
            .then(function(response){
                return response.json();
            })
            .then(function(response){
                img.src = response.data.images.original.url;
            });
} 


newCatButton.addEventListener('click', fetchGif);           