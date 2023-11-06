function Animal(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.voice = () => {
        if (this.age < 1) {
            return 'Тяф';
        } else if (this.age >= 1 && this.age < 3) {
            return 'Гав';
        } else if (this.age > 3) {
            return 'Ррр';
        }
    }
}

let dog = new Animal('Dog', 'Taksa', '2');
console.log(dog.voice())
