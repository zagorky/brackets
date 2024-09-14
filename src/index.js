module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketsMap = {};
  bracketsConfig.forEach(([open, close]) => {
    bracketsMap[close] = open;
  });
  const openBrackets = bracketsConfig.map((pair) => pair[0]);
  const closeBrackets = bracketsConfig.map((pair) => pair[1]);
  for (let i = 0; i < str.length; i++) {
    const x = str[i];
    if (openBrackets.includes(x)) {
      if (closeBrackets.includes(x) && stack[stack.length - 1] === x) {
        stack.pop();
      } else {
        stack.push(x);
      }
    } else if (closeBrackets.includes(x)) {
      if (stack.length === 0 || stack.pop() !== bracketsMap[x]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
