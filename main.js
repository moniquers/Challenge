//Array
let arrayNames = ["Monize", "Monique", "Leonardo", "Elber", "Daniel"];

function showNames() {
  for (let name of arrayNames) {
    const cardHtml = `
        <div class='card'>
            <span>${name}</span>
        </div>
    `;

    containerNames.insertAdjacentHTML("beforeend", cardHtml);
  }
}

showNames();



//Array de objetos JavaScript
let arrayPeople = [ {name: "Monize"}, {name: "Monique", age: 31 }, {name: "Leonardo"}];

function showPeople() {
  for (let person of arrayPeople) {
    const cardHtml = `
        <div class='card'>
            <span>${person.name}</span>
            <span>${person.age ?? ''}</span>
        </div>
    `;

    containerPeople.insertAdjacentHTML("beforeend", cardHtml);
  }
}

showPeople();