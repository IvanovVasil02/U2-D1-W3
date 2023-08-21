class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static ageComparator(userX, userY) {
    return userX.age > userY.age
      ? userX.firstName + " è piu vecchio di " + userY.firstName
      : userY.firstName + " è piu vecchio di " + userX.firstName;
  }
}

const user1 = new User("Mario", "Rossi", 26, "Roma");
const user2 = new User("Luca", "Marrone", 29, "Lazio");
const user3 = new User("Franco", "Verde", 78, "Milano");
const user4 = new User("Paolo", "Giallo", 22, "Firenze");

console.log(User.ageComparator(user3, user2));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  static ownerComparator(petX, petY) {
    return petX.ownerName === petY.ownerName;
  }
}

const pet1 = new Pet("Franco", "Giacomo", "cane", "Labrador");
const pet2 = new Pet("Gianni", "Gianni", "cane", "barboncino");

console.log(Pet.ownerComparator(pet1, pet2));
