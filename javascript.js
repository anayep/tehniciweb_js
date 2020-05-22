const container = document.querySelector("#postari");
const adaugaBtn = document.querySelector("#adauga-btn");

function afiseazaAnimale() {

    const animaleArray = fetch('http://localhost:3000/postari')
        .then(response => response.json())
        .then(function (animaleArray) {
            animaleArray.forEach(animal => {
                const tempAnimal = `<div class="containerClass">
                <p class="descriere1">${animal.descriere}</p> 
                <img src=${animal.src} alt="imagine-caine" class="imaginecaine">
                <button class="middlebutton10"><i class="fas fa-heart fa-8x"></i> 
                </button>
                </div>`

                container.insertAdjacentHTML("beforeend", tempAnimal);
            });

        }
        )
}

async function afiseazaAnimale2() {

    const response = await fetch('http://localhost:3000/postari');

    console.log("response", response)

    const animaleArray = await response.json();
    console.log("animaleArray", animaleArray)
    container.innerHTML = ''

    animaleArray.forEach(animal => {
        const tempAnimal = `<div class="containerClass">
        <p class="descriere1">${animal.descriere}</p> 
        <img src=${animal.src} alt="imagine-caine" class="imaginecaine">
        <button class="middlebutton10"><i class="fas fa-heart fa-8x"></i> 
        </button>
        </div>`

        container.insertAdjacentHTML("beforeend", tempAnimal); 
    });


}


adaugaBtn.addEventListener("click", async function () {
    
    const descriere = document.querySelector("#fname").value;
    const imagineAnimal = document.querySelector("#fname1").value;
    const newAnimal = {
        descriere,
        "src": imagineAnimal
    }

    const newAnnimalsList = await postData('http://localhost:3000/adauga-postare', newAnimal)

    console.log("Data", newAnnimalsList)
    afiseazaAnimale2(newAnnimalsList)

})


async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

afiseazaAnimale2()