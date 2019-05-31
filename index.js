import camelCase from 'camelcase';

console.log(camelCase('foo-bar'));

const div = document.getElementById("div");
const input = document.getElementById("input");

input.addEventListener("change", (event) => {
    div.innerHTML = `${camelCase(input.value)}`;
});