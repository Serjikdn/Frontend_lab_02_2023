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

const inputData = document.querySelector('#inputData');
const outputData = document.querySelector('#outputData');
let dog = new Animal('Dog', 'Taksa', '2');
inputData.innerHTML = 'new Animal(\'Dog\', \'Taksa\', \'2\')<br> dog.voice()';
outputData.textContent = 'Результат: ' + dog.voice();