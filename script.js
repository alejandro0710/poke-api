console.log('hi');

document.addEventListener('DOMContentLoaded', () => {
    const ramdon = getNumberRamdon(1, 150)
    fetchData(ramdon)
})

const getNumberRamdon = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
const fetchData = async(id) => {
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()

        // console.log(data); datos que recuperamos o hacemos llamar de la api
        painCard(data)
    } catch (error){ console.log(error);}
}
 
const painCard = (pokemon) => {
    console.log(pokemon);
    const main = document.querySelector('.main-card')
    const fragment = new DocumentFragment()
    const template = document.querySelector('.template-card').content
    const clone = template.cloneNode(true)
    
    clone.querySelector('.card-body-img').setAttribute('src',pokemon.sprites.other.dream_world.front_default)
    clone.querySelector('.card-body-title').innerHTML = `${pokemon.name} <span>${pokemon.stats[0].base_stat}hp</span>` 
    clone.querySelector('.card-body-text').textContent = pokemon.base_experience + ' EXP'
    clone.querySelectorAll('.card-footer-social h3')[0].textContent = pokemon.stats[1].base_stat 
    clone.querySelectorAll('.card-footer-social h3')[1].textContent = pokemon.stats[3].base_stat 
    clone.querySelectorAll('.card-footer-social h3')[2].textContent = pokemon.stats[2].base_stat 

    fragment.appendChild(clone)
    main.appendChild(fragment)
}