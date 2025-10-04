// Task 5: Demo ES6+
const users = [
  { id: 1, name: "Quang", age: 21 },
  { id: 2, name: "Anh", age: 25 },
];

// Arrow function + destructuring + template literals
users.forEach(({ id, name, age }) => {
  console.log(`User ${id}: ${name} (${age} tuổi)`);
});

// Spread operator + rest parameter
const newUser = { id: 3, name: "Bình", age: 22 };
const updatedUsers = [...users, newUser];
console.log(updatedUsers);

// Async/await + fetch (giả sử API public)
async function fetchPosts() {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=3"
    );
    const data = await res.json();
    console.log("Posts:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}
fetchPosts();
