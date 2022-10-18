import food from './food';
import { choice, remove } from './helpers';

const fruit = choice(food)

console.log(`I'd like on ${fruit}, please.`)
console.log(`Here you go: ${fruit}`)
console.log('Delicious! May I have another?')
const remaining = remove(fruit, food)
console.log(`I’m sorry, we’re all out.We have ${remaining} left.`)