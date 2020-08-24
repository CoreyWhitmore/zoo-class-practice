export class Yak {
    constructor(name, diet, sex, noise, color, weight) {
        this.name = name,
            this.diet = diet,
            this.sex = sex,
            this.noise = noise,
            this.color = color,
            this.weight = weight
    }

    speak() {
        console.log(this.noise);
    }
}