// ES6+ Demo

// 1. let/const
const PI = 3.14;
let radius = 5;

// 2. Template literals
console.log(`Chu vi hình tròn: ${2 * PI * radius}`);

// 3. Arrow function
const sum = (a, b) => a + b;

// 4. Destructuring
const user = { name: "Sĩ", age: 22 };
const { name, age } = user;

// 5. Class + extends
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, major) {
    super(name);
    this.major = major;
  }
}

const s1 = new Student("Sĩ", "Frontend");
console.log(s1.greet());

// 6. Promise + async/await
const getData = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data loaded"), 1000));

async function fetchData() {
  const res = await getData();
  console.log(res);
}
fetchData();
