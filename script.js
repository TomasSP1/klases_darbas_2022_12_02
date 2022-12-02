const createBtn = document.querySelector('button');
const ul_input = document.getElementById('ul-list');
const ol_input = document.getElementById('ol-list');
const myBody = document.querySelector('body')



createBtn.addEventListener('click', () => {
    let manoul = document.createElement('ul');
    myBody.appendChild(manoul);
    for (let i = 0; i < ul_input.value; i++) {
        let manoli = document.createElement('li');
        manoli.innerText = 'isorinis li sarasas'; // tekstas koreaguojamas
        manoul.appendChild(manoli);
        let mano_ol = document.createElement('ol')
        manoli.appendChild(mano_ol);
        for (let j = 0; j < ol_input.value; j++) {
            let nextLi = document.createElement('li');
            nextLi.innerText = 'gilesnis li sarasas'; // tekstas koreaguojamas
            mano_ol.appendChild(nextLi);
        }
    }
});

