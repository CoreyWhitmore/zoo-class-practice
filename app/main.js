import { Aligator } from "./models/Aligator.js"
import { Bear } from "./models/Bear.js"
import { Cat } from "./models/cat.js"
import { Dog } from "./models/dog.js"
import { Elephant } from "./models/elephant.js"
import { Frog } from "./models/frog.js"
import { Gorilla } from "./models/gorilla.js"
import { Hog } from "./models/hog.js"
import { Iguana } from "./models/iguana.js"
import { Jackalope } from "./models/jackalope.js"
import { Kangaroo } from "./models/kangaroo.js"
import { Lion } from "./models/lion.js"
import { Manatee } from "./models/manatee.js"
import { Narwhal } from "./models/narwhal.js"
import { Orangutan } from "./models/orangutan.js"
import { Platypus } from "./models/platypus.js"
import { Quail } from "./models/quail.js"
import { Racoon } from "./models/racoon.js"
import { Snake } from "./models/snake.js"
import { Tarantula } from "./models/tarantula.js"
import { UmbrellaBird } from "./models/umbrella-bird.js"
import { Viper } from "./models/viper.js"
import { Walrus } from "./models/walrus.js"
import { Xolo } from "./models/Xolo.js"
import { Yak } from "./models/yak.js"
import { Zebra } from "./models/zebra.js"

let zoo = {
    friendly: [],
    mean: []
}

zoo.mean.push(new Aligator('Aly', 'Carnivore', 'F', 'Hiss', 'green', 200))
zoo.mean.push(new Bear('Winnie', 'Omnivore', 'M', 'Growl', 'yellow', 700))
zoo.friendly.push(new Cat('Garfield', 'Carnivore', 'M', '-Snore-', 'orange', 25))
zoo.friendly.push(new Dog('Odie', 'Carnivore', 'M', 'Bark!', 'yellow', 30))
zoo.friendly.push(new Elephant('Dumbo', 'Herbivore', 'M', '-Trumpet noise-', 'grey', 8000))
zoo.friendly.push(new Frog('Kermit', 'Insectivore', 'M', 'Ribbit', 'green', 0.3))
zoo.mean.push(new Gorilla('Tarzan', 'Omnivore', 'M', 'Hoot', 'grey', 500))
zoo.mean.push(new Hog('Porkie', 'Herbivore', 'M', 'Squeal', 'brown', 250))
zoo.friendly.push(new Iguana('Liz', 'Insectivore', 'F', '-silence-', 'green', 1.2))
zoo.friendly.push(new Jackalope('Thumper', 'Herbivore', 'M', '-quiet chewing noise-', 'grey', 2.8))
zoo.mean.push(new Kangaroo('Kenga', 'Herbivore', 'F', 'Chortle', 'rusty', 110))
zoo.mean.push(new Lion('Simba', 'Carnivore', 'M', 'Roar', 'yellow', 400))
zoo.mean.push(new Manatee('Urf', 'Herbivore', 'M', 'Urf!', 'grey', 900))
zoo.mean.push(new Narwhal('Jedi', 'Carnivore', 'F', 'Splash', 'grey', 2000))
zoo.mean.push(new Orangutan('King Louie', 'omnivore', 'M', 'hoot', 'orange', 180))
zoo.mean.push(new Platypus('Perry', 'Herbivore', 'M', 'indescribable', 'green', 4.3))
zoo.mean.push(new Quail('Queen', 'insectivore', 'F', 'Whistle', 'grey', 0.4))
zoo.friendly.push(new Racoon('RJ', 'Omnivore', 'M', 'Chitter', 'grey', 15))
zoo.friendly.push(new Snake('Huggy', 'Carnivore', 'F', 'Hiss', 'green', 140))
zoo.mean.push(new Tarantula('Speedy', 'Insectivore', 'F', 'Hiss', 'brown', '0.2'))
zoo.mean.push(new UmbrellaBird('Flappy', 'Insectivore', 'F', 'BOOM', 'black', 2.1))
zoo.mean.push(new Viper('Viper', 'Carnivore', 'F', 'Hiss', 'green', 0.9))
zoo.mean.push(new Walrus('Wally', 'Carnivore', 'M', 'Bark', 'grey', 2200))
zoo.friendly.push(new Xolo('Alpha', 'Carnivore', 'M', 'Woof', 'black', 90))
zoo.mean.push(new Yak('Yona', 'Herbivore', 'F', 'grunt', 'brown', 550))
zoo.mean.push(new Zebra('Marty', 'Herbivore', 'M', 'Whinny', 'Black and White', 880))
