var input = document.querySelector('input')
var button = document.querySelector('button')
var Character = document.querySelector(".character")

button.addEventListener('click', (e) => {
    e.preventDefault();
    fetchData(input.value);
})


function fetchData(character) {
    fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
        .then(res => res.json())
        .then(data => {
            characterInit(data.results)
        });
}

function characterInit(data) {
    data.forEach((elem) => {
        console.log(elem.name);
    })
}
