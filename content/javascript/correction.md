---
title: "Correction TP n°1 Javascript"
weight: 2
---

## Exercice 1 :

En utilisant while
```javascript
const numbers = [20, 30, 42, 66, 99];
let i = 0;
while (i < numbers.length) {
  numbers[i] = numbers[i] + 42;
  i++;
}
console.log(numbers);
```

En utilisant for
```javascript
const numbers = [20, 30, 42, 66, 99];
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] + 42;
}
console.log(numbers);
```

En utilisant for of
```javascript
const numbers = [20, 30, 42, 66, 99];
let newTab = [];
for (let number of numbers) {
  newTab.push(number + 42);
}
console.log(newTab);
```

En utilisant map()
```javascript
const numbers = [20, 30, 42, 66, 99];
const newTab = numbers.map(number => number + 42);
console.log(newTab);
```

## Exercice 2 : 

En utilisant for of
```javascript
const numbers = [20, 30, 42, 66, 99];
let sum = 0;
for (let number of numbers) {
  sum += number;
}
console.log(sum);
```

En utilisant reduce()
```javascript
const numbers = [20, 30, 42, 66, 99];
const sum = numbers.reduce((acc, number) => acc + number, 0);
console.log(sum);
```

## Exercice 3 : 

```javascript
const colors = ["blue", "red", "green", "yellow", "cyan"];
colors.forEach(color => console.log(color));
```

## Exercice 4 : 

```javascript
const peoples = [{name: "Julien", age: 25}, {name: "Maud", age: 24}, {name: "Bastien", age: 22}, {name: "Raphaël", age: 28}, {name: "Alexandre", age: 42}, {name: "Julien", age: 55}]
const julien = peoples.find(({ name, age }) => name === "Julien" && age === 25);
console.log(julien);
```

## Exercice 5 : 

```javascript
const peoples = [{name: "Julien", age: 25}, {name: "Maud", age: 24}, {name: "Bastien", age: 22}, {name: "Raphaël", age: 28}, {name: "Alexandre", age: 42}, {name: "Julien", age: 55}]
const underTwentySix = peoples.filter(({age}) => age < 26)
console.log(underTwentySix)
```