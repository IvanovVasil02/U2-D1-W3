const pets = [];

const compare = function (event) {
  console.log(pets);
  console.log(pets[0].ownerName);

  if (pets.length < 2) {
    console.log("ci devono essere almeno due animali nella lista");
  } else {
    console.log(Pet.ownerComparator(pets[0].ownerName, pets[2].ownerName));
  }
};

const getData = function (event) {
  event.preventDefault();

  let petName = document.querySelector("#petName").value;
  let ownerName = document.querySelector("#ownerName").value;
  let species = document.querySelector("#species").value;
  let breed = document.querySelector("#breed").value;

  pets.push(new Pet(petName, ownerName, species, breed));

  const list = document.querySelector("#tbody");

  list.innerHTML += `
        <tr>
            <td>${petName}</td>
            <td>${ownerName}</td>
            <td>${species}</td>
            <td>${breed}</td>
        </tr>
    `;
};

let form = document.querySelector("form");
const compareBtn = document.querySelector("#compare-btn");
form.addEventListener("submit", getData);

compareBtn.addEventListener("click", compare);
