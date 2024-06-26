const age: number = 50;
const username: string = "Max";
const toggle: boolean = true;
const empty: null = null;
const callback = (a: number): number => {
  return 100 + a;
};

console.log("age:" + age);
console.log("username:" + username);
console.log("toggle:" + toggle);
console.log("empty:" + empty);
console.log("callback(5):" + callback(5));
