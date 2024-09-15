const fruits = ["apple", "banana", "orange", "mango"];

const emojiFruits = ["🍎", "🍌", "🍊", "🥭"];

const iter = emojiFruits[Symbol.iterator]();

for (const fruit of emojiFruits) {
  fruit;
}
