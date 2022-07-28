export async function fetchToDoItems() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  return res.json();
}
