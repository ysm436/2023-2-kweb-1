console.log("hello world");

const a = 1 + 2;
const b = 1.2;
const string = `a: ${a} b: ${b}`;

const [x, y, z] = [1, 2, 3];
console.log(x, y, z);

const c = { m: 10, n: 20, s: "abc" };
const { m, n, s } = c;
console.log(`${m},${n},${s}`);

//aaa = "hi";

try {
  console.log(aaa);
  console.log("no error");
} catch (err) {
  console.log(err);
  console.log(typeof err);
} finally {
  console.log("finally");
}
