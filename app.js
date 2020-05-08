const container = document.querySelector('.container');
const poke_types = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying',
 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'];
container.addEventListener('click', (e)=>{
    const target = e.target
    if(target.classList.contains('type-icon') && target.id != 'type-icon-selected'){
        const types = document.getElementById('types')
        const type_to_replace = document.getElementById('type-icon-selected');

        

        const replace_with = target.innerHTML;
        const img = document.getElementById('type-stat-dist-img')
        img.src = `img/${replace_with}_stat_distribution.png`

        type_to_replace.className = `type-icon type-${replace_with}`
        type_to_replace.innerHTML = replace_with

        let html = ''
        for(let i=0; i<poke_types.length; i++){
            if(poke_types[i] == replace_with){
                continue;
            }
            html += `
            <p class="type-icon type-${poke_types[i]}">${poke_types[i]}</p>
            `
        }
        types.innerHTML = html;



        console.log(type_to_replace)
        console.log(target.innerHTML)
    }
})



// Materialize JS
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, {});
  });

  
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {});
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });
