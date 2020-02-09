# Redux in a Nutshell 🌰-shell!
## Motivation and Basic Philosophy:
## Basic Functionality:
## Avoiding Array Mutation:
- **`concat`** and the **spread operator** allow you to add an element to an existing array without modifying it. Instead, they result in a new 
modified array (with the new element added to it) without changing the original array.
```javascript
const addItem = (arr, index) => arr.concat(elem);
const addItem2 = (arr, index) => [...arr, elem];
```
- **slice** is used in conjunction with `concat` or the spread operator to remove an element from an array at a certain index as in:
```javascript
const remov1 = (arr, index) => arr.slice(0, index).concat(arr.slice(index + 1)); // first argument to slice is optional.
const remov1 = (arr, index) => [...arr.slice(0, index), ...arr.slice(index + 1)];
```
- To modify an element you concatenate a modified copy of the element to the new array as in:
```javascript
const mod = (arr, index) => arr.slice(0, index).concat(arr.slice(index + 1));
const mod = (arr, index) => [...arr.slice(0, index), ...arr.slice(index + 1)];
```