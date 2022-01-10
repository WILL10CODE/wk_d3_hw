const button = document.createElement('button');

button.innerHTML = "Search";

document.body.append(button);

//button.type = "submit";




// button.addEventListener('submit', () => {
    const button_press = (event) => {
    event.preventDefault()
    const poke_name = document.getElementById('pokemon_name');
    loadData(poke_name.value)

};

button.onclick = button_press;

const getData = async (name) =>{
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/"+ name )
    console.log(res);
    const data = await res.json();
    console.log(data)
    return data
};

const createList = (pokemonName, image) => {
    const html1 = document.createElement('Pokemon');
    html1.innerHTML = pokemonName;
    html1.className = "list-group-item list-group-item-action list-group-item-light";
    document.querySelector(".pokemon-list").insertAdjacentElement('beforeend',html1,);
    const html2 = document.createElement('img');
    html2.src = image;
    document.querySelector(".add_image").insertAdjacentElement('beforeend', html2)

};

const loadData = async (name) => {
    const data = await getData(name);
    const pokemonName = data.name;
    const image = data.sprites.front_default;
    createList(pokemonName, image)
 
};

