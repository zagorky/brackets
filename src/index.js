module.exports = function check(str, bracketsConfig) {
  // your solution
};
console.log(check(config1));

const config3 = [
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
];
const config2 = ("())(", [["(", ")"]]); //false
const config1 = ("((()))()", [["(", ")"]]); //true
