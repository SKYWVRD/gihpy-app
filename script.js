const newCatButton = document.getElementById('new-cat-button');
const searchBox = document.getElementById('search-text');
fetchGif('Default');


const img = document.querySelector('img');
async function fetchGif (searchParameter) {
    try{
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=i13s2h9tf8ZI6sj0JMPaOcBBZpZylSM5&s=${searchParameter}`, {mode: 'cors'})
        const gifData = await response.json();
        img.src = gifData.data.images.original.url    
    } catch (error) {
        img.src = 'https://media3.giphy.com/media/l1J9EdzfOSgfyueLm/giphy.gif?cid=ecf05e47ilucmas9r4xlgzkl2oqv7i6nbw1ch3utuzugu5go&rid=giphy.gif&ct=g'
    }
};


newCatButton.addEventListener('click', ()=>{
    fetchGif(searchBox.value)
});           