/*
Skylander
 Div Id = skylanders html
class = skylandercontainer html

title = skylander-title css
image = skylander-image css
element = skylander-element css
*/




console.log("Welcome to sky lands");

const skylandercard = document.getElementById('skylanders');




fetch('https://raw.githubusercontent.com/velasquezd/SkylanderImages/refs/heads/main/skylander.json')
.then(response => response.json())
.then(skylanders => {
    console.log(skylanders)
    skylanders.forEach(skylander => {
        skylandercard.innerHTML += `
        <div class="skylander-card">
        <h1 class="skylander-title">${skylander.name}</h1>
        <img class="skylander-image" src="${skylander.image}" alt="${skylander.name}">
        <p class="skylander-element">${skylander.element}</p>
        <hr>
        <p class="skylander-series">${skylander.game}</p>
        </div>
        `;
    });

    const skylanderCards = document.querySelectorAll('.skylander-card');

    skylanderCards.forEach(card => { /*FUNCTION STARTS HERE= CLICK*/
        card.addEventListener('click', function() {
            card.classList.toggle('collected');
            console.log('clicked');
        });
}); /*FUNCTION ENDS HERE= CLICK*/
});

   

